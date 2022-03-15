import axiosConfig from './axiosConfig'

const getVRAMs = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/vrams?fields[0]=gb')
  const videoChipsets = res.data.data.map(
    (item: Record<string, number>) => item.gb
  )
  videoChipsets.sort((a : number, b : number) => b - a)

  return videoChipsets
}
export default getVRAMs
