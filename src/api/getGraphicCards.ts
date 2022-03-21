import { IGraphicsResponse } from '../../types/GraphicsCard'
import axiosConfig from './axiosConfig'

const getGraphicsCards = async (): Promise<IGraphicsResponse> => {
  const res = await axiosConfig.get('/products?populate=*')
  return res.data
}
export default getGraphicsCards

// http://localhost:1337/api/products?populate=*&filters[developer][name][$eq]=amd

// http://localhost:1337/api/developers?fields[0]=name

// https://gfx-backend.herokuapp.com/api/products?pagination[page]=1&pagination[pageSize]=5
