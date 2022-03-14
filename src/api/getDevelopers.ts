import { IGraphicsResponse } from '../../types/GraphicsCard'
import axiosConfig from './axiosConfig'

const getDevelopers = async (): Promise<IGraphicsResponse> => {
  const res = await axiosConfig.get('/developers')
  return res.data
}
export default getDevelopers
