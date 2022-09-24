import axios from 'axios'

const apiLocal = axios.create({
  baseURL: 'https://backend-turismo-bandeirantes.herokuapp.com/api',
  // baseURL: 'https://bband.discloud.app/api',
})

export default apiLocal
