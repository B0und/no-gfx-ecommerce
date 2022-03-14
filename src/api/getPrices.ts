import { IGraphicsResponse } from '../../types/GraphicsCard'
import axiosConfig from './axiosConfig'

const getPrices = async (): Promise<IGraphicsResponse> => {
  const res = await axiosConfig.get('/products?fields[0]=price')
  return res.data
}
export default getPrices
