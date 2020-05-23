import axios from 'axios'

const baseUrl = 'https://www.potterapi.com/v1'
const apiKey = `?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G${process.env.REACT_APP_HARRY_POTTER_KEY}`

export const getAllData = () => {
  console.log(apiKey)
  return axios.get(`${baseUrl}/houses${apiKey}`)
}





// const apiKey = `?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G.ZZ8B8aJ55eOn5wTyv.mfkWgHT7xJ75y`