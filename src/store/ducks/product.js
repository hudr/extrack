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
        //Pegando todos os produtos
        const results = await AxiosProduct.getProducts()
        //Filtrando apenas a partir do 1 (Bug sheetson)
        const filtered = results.filter(result => result.rowIndex > 1)
        dispatch({
          type: Types.PRODUCTS,
          payload: filtered
        })
      } catch (err) {
        console.error(err)
      }
    }
  },

  submitUserProduct: productData => {
    return async () => {
      await AxiosProduct.insertProduct(productData)
    }
  }
}
