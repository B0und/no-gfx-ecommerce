import { IGraphicsResponse } from '../../types/GraphicsCard'
import axiosConfig from './axiosConfig'

const getGraphicsCards = async (): Promise<IGraphicsResponse> => {
  const res = await axiosConfig.get('/products?populate=*')
  return res.data
}
export default getGraphicsCards

// http://localhost:1337/api/graphics-cards?filters[developer][$eq]=nvidia

// http://localhost:1337/api/developers?fields[0]=name

// https://gfx-backend.herokuapp.com/api/products?pagination[page]=1&pagination[pageSize]=5
