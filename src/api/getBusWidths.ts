import axiosConfig from './axiosConfig'

const getBusWidths = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/bus-widths?fields[0]=bit')
  let widths = res.data.data.map((item: Record<string, string>) => item.bit)
  widths = widths.sort((a: any, b: any) => b - a)
  return widths
}
export default getBusWidths
