import axios from 'axios'
import { alertTips } from '../../utils/SweetAlert'

const sheetson = axios.create({
  baseURL: process.env.REACT_APP_SHEETSON_BASEURL,
})

const extrackcrawler = axios.create({
  baseURL: 'https://extrack-crawler.herokuapp.com',
})

const API_VERSION = process.env.REACT_APP_SHEETSON_API_VERSION
const SHEET_NAME = process.env.REACT_APP_SHEETSON_SHEET_NAME
const EARN_SHEET_NAME = process.env.REACT_APP_SHEETSON_EARN_SHEET_NAME
const SKIP = process.env.REACT_APP_SHEETSON_SKIP
const LIMIT = process.env.REACT_APP_SHEETSON_LIMIT
const SPREADSHEET_ID = process.env.REACT_APP_SHEETSON_SPREADSHEET_ID
const TIP_SHEET_NAME = process.env.REACT_APP_SHEETSON_TIP_SHEET_NAME

export const getProducts = async () => {
  return sheetson
    .get(
      `/${API_VERSION}/sheets/${SHEET_NAME}?&skip=${SKIP}&limit=${LIMIT}&spreadsheetId=${SPREADSHEET_ID}`,
    )
    .then(res => {
      return res.data.results
    })
    .catch(err => {
      console.error(err)
    })
}

export const insertProduct = async productData => {
  return sheetson
    .post(
      `/${API_VERSION}/sheets/${SHEET_NAME}?spreadsheetId=${SPREADSHEET_ID}`,
      productData,
    )
    .catch(err => {
      console.error(err)
    })
}

export const removeProduct = async rowIndex => {
  return sheetson
    .delete(
      `/${API_VERSION}/sheets/${SHEET_NAME}/${rowIndex}?spreadsheetId=${SPREADSHEET_ID}`,
    )
    .catch(err => {
      console.error(err)
    })
}

export const removeTip = async rowIndex => {
  return sheetson
    .delete(
      `/${API_VERSION}/sheets/${TIP_SHEET_NAME}/${rowIndex}?spreadsheetId=${SPREADSHEET_ID}`,
    )
    .catch(err => {
      console.error(err)
    })
}

export const getEarningClass = async monthAmount => {
  return sheetson
    .get(
      `/${API_VERSION}/sheets/${EARN_SHEET_NAME}?&limit=${LIMIT}&spreadsheetId=${SPREADSHEET_ID}`,
    )
    .then(res => {
      const userEarnClass = res.data.results

      const userEarnClassFiltered = userEarnClass.filter(range => {
        return (
          parseFloat(monthAmount) >= parseFloat(range.Min) &&
          parseFloat(monthAmount) <= parseFloat(range.Max)
        )
      })

      return userEarnClassFiltered[0].Class
    })
    .catch(err => {
      console.error(err)
    })
}

export const insertTip = async productData => {
  const { userUid, name, price, qty } = productData

  let totalValue = parseFloat(price) * parseInt(qty)

  return extrackcrawler
    .post('/find/item', {
      name,
    })
    .then(res => {
      const result = res.data

      const tips = result.filter(
        tip =>
          parseFloat(tip.price.replace(',', '.')) * parseInt(qty) < totalValue,
      )

      tips.map(tip =>
        sheetson.post(
          `/${API_VERSION}/sheets/${TIP_SHEET_NAME}?spreadsheetId=${SPREADSHEET_ID}`,
          {
            userUid,
            store: tip.store,
            title: tip.title,
            url: tip.url,
            price: tip.price,
          },
        ),
      )

      if (tips.length > 0) {
        alertTips()
      }
    })
    .catch(err => {
      console.error(err)
    })
}

export const getTips = async () => {
  return sheetson
    .get(
      `/${API_VERSION}/sheets/${TIP_SHEET_NAME}?&skip=${SKIP}?&limit=${LIMIT}&spreadsheetId=${SPREADSHEET_ID}`,
    )
    .then(res => {
      return res.data.results
    })
    .catch(err => {
      console.error(err)
    })
}
