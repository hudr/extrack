import firebase from '../../config/Firebase'

export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
  USERINFO: 'auth/USERINFO',
  ERROR: 'auth/ERROR'
}

const INITIAL_STATE = {
  isLogged: false,
  authUser: {},
  errorMessage: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        isLogged: action.payload,
        errorMessage: ''
      }
    case Types.USERINFO:
      return {
        ...state,
        authUser: action.payload,
        isLogged: true,
        errorMessage: ''
      }
    case Types.LOGOUT:
      return {
        ...state,
        isLogged: action.payload.isLogged,
        authUser: action.payload.authUser
      }
    case Types.ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export const Creators = {
  hideErrorMessage: () => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: Types.ERROR,
          payload: ''
        })
      }, 5000)
    }
  },

  handleSignUp: (email, password, confirmPassword, firstName) => {
    return async dispatch => {
      //Instancia do Firestore
      const db = firebase.firestore()

      //Condições de campos vazios
      if (!email || !password || !confirmPassword || !firstName) {
        dispatch({
          type: Types.ERROR,
          payload: 'Please, fill in all required fields.'
        })
      } else if (password !== confirmPassword) {
        dispatch({
          type: Types.ERROR,
          payload: 'Passwords need to be equal.'
        })
      } else {
        //Gravando documento ao criar conta
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(function(user) {
            db.collection('users')
              .doc('data')
              .collection('profile')
              .doc(user.user.uid)
              .set({
                name: firstName
              })
            dispatch({
              type: Types.USERINFO,
              payload: {
                userName: firstName
              }
            })
          })
          .catch(function(error) {
            if (error.code === 'auth/invalid-email')
              dispatch({
                type: Types.ERROR,
                payload: 'Invalid email address format.'
              })

            if (error.code === 'auth/email-already-in-use')
              dispatch({
                type: Types.ERROR,
                payload: 'This email is already in use.'
              })

            if (error.code === 'auth/weak-password')
              dispatch({
                type: Types.ERROR,
                payload: 'You need to use a strong password.'
              })

            if (error.code === 'auth/operation-not-allowed')
              dispatch({
                type: Types.ERROR,
                payload: "Create user with email isn't allowed."
              })
          })
      }
      dispatch(Creators.hideErrorMessage())
    }
  },

  handleLogin: (email, password) => {
    return async dispatch => {
      if (!email || !password) {
        dispatch({
          type: Types.ERROR,
          payload: 'Please, fill in all required fields.'
        })
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() =>
            dispatch({
              type: Types.LOGIN,
              payload: true
            })
          )

          .catch(error => {
            if (error.code === 'auth/invalid-email')
              dispatch({
                type: Types.ERROR,
                payload: 'Invalid email address format.'
              })

            if (error.code === 'auth/user-not-found')
              dispatch({
                type: Types.ERROR,
                payload: "This account doesn't exist."
              })

            if (error.code === 'auth/wrong-password')
              dispatch({
                type: Types.ERROR,
                payload: 'Wrong password.'
              })

            if (error.code === 'auth/too-many-requests')
              dispatch({
                type: Types.ERROR,
                payload: 'You tried to login so many times, wait.'
              })
          })
      }
      dispatch(Creators.hideErrorMessage())
    }
  },

  handleForgotPassword: email => {
    return async dispatch => {
      if (!email) {
        dispatch({
          type: Types.ERROR,
          payload: 'Please, fill in all required fields.'
        })
      } else {
        await firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(
            dispatch({
              type: Types.ERROR,
              payload: ''
            })
          )
          .catch(error => {
            if (error.code === 'auth/invalid-email')
              dispatch({
                type: Types.ERROR,
                payload: 'Invalid email address format.'
              })

            if (error.code === 'auth/user-not-found')
              dispatch({
                type: Types.ERROR,
                payload: "This account doesn't exist."
              })
          })
      }
      dispatch(Creators.hideErrorMessage())
    }
  },

  handleUpdateProfile: (userName, userGenre, userBirthDate, userEmail) => {
    return async dispatch => {
      //Instancia do Firestore
      const db = firebase.firestore()

      const user = firebase.auth().currentUser
      if (user) {
        //Gravando documento ao salvar novas infos
        await db
          .collection('users')
          .doc('data')
          .collection('profile')
          .doc(user.uid)
          .set({
            name: userName,
            gender: userGenre,
            birthDate: userBirthDate
          })

        user.updateEmail(userEmail)

        dispatch({
          type: Types.USERINFO,
          payload: {
            userName,
            userGenre,
            userBirthDate,
            userEmail
          }
        })
      }
    }
  },

  handleUserInfo: () => {
    return async dispatch => {
      const user = firebase.auth().currentUser
      if (user) {
        const db = firebase.firestore()
        const docRef = db
          .collection('users')
          .doc('data')
          .collection('profile')
          .doc(`${user.uid}`)
        docRef
          .get()
          .then(async doc => {
            if (doc.exists) {
              const userName = await doc.data().name
              const gender = await doc.data().gender
              const birthDate = await doc.data().birthDate
              dispatch({
                type: Types.USERINFO,
                payload: {
                  userName: userName,
                  userGenre: gender,
                  userBirthDate: birthDate,
                  userEmail: user.email
                }
              })
            } else {
              console.log('No such document!')
            }
          })
          .catch(function(error) {
            console.log('Error getting document:', error)
          })
      } else {
        console.log('User not logged in')
      }
    }
  },

  handleLogout: () => {
    return async dispatch => {
      try {
        await firebase
          .auth()
          .signOut()
          .then(() =>
            dispatch({
              type: Types.LOGOUT,
              payload: {
                isLogged: false,
                authUser: {}
              }
            })
          )
          .catch(error => {
            console.error(error)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
