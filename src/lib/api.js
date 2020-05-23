import axios from 'axios'

const baseUrl = 'https://www.potterapi.com/v1'
const apiKey = `?key=$2a$10$3LzDUjIX8kPXxHyKIsVbB${process.env.REACT_APP_HARRY_POTTER_KEY}`

export const getAllData = () => {
  console.log(apiKey)
  return axios.get(`${baseUrl}/houses${apiKey}`)
}


// const apiKey = `?key=$2a$10$3LzDUjIX8kPXxHyKIsVbB${process.env.REACT_APP_HARRY_POTTER_KEY}`


// const apiKey = `?key=$2a$10$3LzDUjIX8kPXxHyKIsVbB.Z7u9G7E/a6faguQ5FwIcAYFr72YurLe`