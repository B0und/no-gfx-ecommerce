import { IGraphicResponse } from '../../types/GraphicsCard'
import axiosConfig from './axiosConfig'

const getGraphicCard = async (
  id: number,
  params = ''
): Promise<IGraphicResponse> => {
  const res = await axiosConfig.get(`/products/${id}/?populate=*&${params}`)
  return res.data
}
export default getGraphicCard
