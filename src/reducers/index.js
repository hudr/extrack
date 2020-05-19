import { combineReducers } from 'redux'

import auth from '../store/ducks/auth'
import product from '../store/ducks/product'

export default combineReducers({
  auth,
  product
})
