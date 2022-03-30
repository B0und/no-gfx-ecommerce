import axiosConfig from './axiosConfig'

const getBusWidths = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/bus-widths?fields[0]=name')
  let widths = res.data.data.map((item: Record<string, string>) => [
    item.name,
    item.id,
  ])
  widths = widths.sort((a: any, b: any) => b[0] - a[0])
  return widths
}
export default getBusWidths
