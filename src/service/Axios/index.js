import axios from 'axios'

const sheetson = axios.create({
  baseURL: 'https://api.sheetson.com/'
})

const API_VERSION = 'v1'
const SHEET_NAME = 'extrack98-ced'
const SHEET_NAME_IMGS = 'extrack98-imgs'
const SKIP = '0'
const LIMIT = '1000'
const SPREADSHEET_ID = '1NppfKaYvYUhkam6XLqWocGm5ZpXT8e7Yq5DJYxXbzkg'

export const getProducts = async () => {
  return sheetson
    .get(
      `/${API_VERSION}/sheets/${SHEET_NAME}?&skip=${SKIP}&limit=${LIMIT}&spreadsheetId=${SPREADSHEET_ID}`
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
      productData
    )
    .catch(err => {
      console.error(err)
    })
}

export const getProfilePicture = () => {
  return sheetson
    .get(
      `/${API_VERSION}/sheets/${SHEET_NAME_IMGS}?&skip=${SKIP}&limit=${LIMIT}&spreadsheetId=${SPREADSHEET_ID}`
    )
    .then(res => {
      return res.data.results
    })
    .catch(err => {
      console.error(err)
    })
}

export const registerProfilePicture = async userImage => {
  return sheetson
    .post(
      `/${API_VERSION}/sheets/${SHEET_NAME_IMGS}?spreadsheetId=${SPREADSHEET_ID}`,
      userImage
    )
    .then(res => {
      return res.data.userImage
    })
    .catch(err => {
      console.error(err)
    })
}

export const updateProfilePicture = async userData => {
  const findAllPictures = await getProfilePicture()
  const returnedFilter = findAllPictures.filter(
    filteredRowIndex => filteredRowIndex.userUid === userData.userUid
  )
  const rowIndex = returnedFilter[0].rowIndex

  const userImage = userData.userImage

  return sheetson
    .patch(
      `/${API_VERSION}/sheets/${SHEET_NAME_IMGS}/${rowIndex}?spreadsheetId=${SPREADSHEET_ID}`,
      { userImage }
    )
    .then(res => {
      return res.data.userImage
    })
    .catch(err => {
      console.error(err)
    })
}
