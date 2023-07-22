import axios from 'axios'

const baseURL = 'https://api.instabuy.com.br/apiv3/item'

export const api = axios.create({
  baseURL,
})
