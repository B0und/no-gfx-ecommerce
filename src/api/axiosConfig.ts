import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://gfx-backend.herokuapp.com/api',
})

export default axiosConfig
