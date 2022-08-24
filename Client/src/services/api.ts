import axios from 'axios'

const api = axios.create({
  baseURL: 'https://uenp.fun/turismo/api',
})

export default api
