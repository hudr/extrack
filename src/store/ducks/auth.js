import firebase from '../../config/Firebase'

// Action Types
export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
  USERINFO: 'auth/USERINFO',
  ERROR: 'auth/ERROR'
}

// Reducer
const initialState = {
  isLogged: false,
  authUser: {},
  errorMessage: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      console.log('payload login', action.payload)
      return {
        ...initialState,
        isLogged: action.payload
      }
    case Types.USERINFO:
      console.log('payload userinfo', action.payload)
      return {
        ...initialState,
        authUser: action.payload
      }
    case Types.LOGOUT:
      console.log('payload logout', action.payload)
      return {
        ...initialState,
        isLogged: action.payload.isLogged,
        authUser: action.payload.authUser
      }
    case Types.ERROR:
      console.log('payload error', action.payload)
      return {
        ...initialState,
        errorMessage: action.payload
      }
    default:
      console.log('default', action.payload)
      return state
  }
}

// Action Creators
export const Creators = {
  handleLogin(email, password) {
    return async dispatch => {
      console.log('Entrei no handleLogin')
      try {
        if (!email || !password) {
          dispatch({
            type: Types.ERROR,
            payload: 'Please, fill in all required fields.'
          })
        } else {
          await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
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
      } catch (err) {
        console.log(err)
      }
    }
  },

  handleUserInfo() {
    return async dispatch => {
      console.log('Entrei no handleUserInfo')
      firebase.auth().onAuthStateChanged(user => {
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
              dispatch({
                type: Types.USERINFO,
                payload: {
                  userName: userName,
                  age: 24
                }
              })
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          })
          .catch(function(error) {
            console.log('Error getting document:', error)
          })
      })
    }
  },

  handleLogout() {
    return async dispatch => {
      console.log('Entrei no handleLogout')
      try {
        await firebase
          .auth()
          .signOut()
          .then(
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
