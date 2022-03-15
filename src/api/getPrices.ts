import axiosConfig from './axiosConfig'

const getPrices = async (): Promise<number[]> => {
  const res = await axiosConfig.get('/products?fields[0]=price')
  const prices = res.data.data.map((item: Record<string, number>) => item.price)
  return prices
}
export default getPrices
