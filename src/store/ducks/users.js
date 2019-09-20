// Action Types

export const Types = {
  LOGIN: 'user/LOGIN'
}

// Reducer
const initialState = {
  isLogged: true,
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...initialState,
        user: action.payload
      }
    default:
      return state
  }
}

// Action Creators
export function login() {
  return {
    type: Types.LOGIN,
    payload: {
      username: 'Hudson',
      password: 'lalaland'
    }
  }
}
