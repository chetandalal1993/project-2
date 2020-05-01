import axios from 'axios'

const baseUrl = 'https://www.potterapi.com/v1/houses?key=$2a$10$3LzDUjIX8kPXxHyKIsVbB.Z7u9G7E/a6faguQ5FwIcAYFr72YurLe'

export const getAllData = () => {
  return axios.get(baseUrl)
}