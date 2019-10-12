import axios from 'axios'

const sheetson = axios.create({
  baseURL: 'https://api.sheetson.com/'
})

const API_VERSION = 'v1'
const SHEET_NAME = 'extrack98-ced'
const SPREADSHEET_ID = '1NppfKaYvYUhkam6XLqWocGm5ZpXT8e7Yq5DJYxXbzkg'

export const insertProduct = async productData => {
  return sheetson
    .post(
      `/${API_VERSION}/sheets/${SHEET_NAME}?spreadsheetId=${SPREADSHEET_ID}`,
      productData
    )
    .catch(err => {
      console.error(err)
    })
}
