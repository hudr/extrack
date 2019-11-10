import * as AxiosProduct from '../../service/Axios'

export const Types = {
  PRODUCTS: 'product/PRODUCTS'
}

const INITIAL_STATE = {
  products: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

export const Creators = {
  getProducts: () => {
    return async dispatch => {
      try {
        const results = await AxiosProduct.getProducts()
        dispatch({
          type: Types.PRODUCTS,
          payload: results
        })
      } catch (err) {
        console.error(err)
      }
    }
  },

  submitUserProduct: productData => {
    return async dispatch => {
      await AxiosProduct.insertProduct(productData)
      await dispatch(Creators.getProducts())
    }
  }
}
