import axios from 'axios'

const apiLocal = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export default apiLocal
