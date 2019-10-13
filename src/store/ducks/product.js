import * as AxiosProduct from '../../service/Axios'

export const Types = {
  USERPRODUCTS: 'product/USERPRODUCTS'
}

const INITIAL_STATE = {
  userProducts: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USERPRODUCTS:
      return {
        ...state,
        userProducts: action.payload
      }
    default:
      return state
  }
}

export const Creators = {
  submitUserProduct: productData => {
    return async () => {
      await AxiosProduct.insertProduct(productData)
    }
  }
}
