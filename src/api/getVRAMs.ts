import axiosConfig from './axiosConfig'

const getVRAMs = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/vrams?fields[0]=gb')
  const videoChipsets = res.data.data.map((item: Record<string, number>) => [
    item.gb,
    item.id,
  ])
  videoChipsets.sort((a: [number, number], b: [number, number]) => b[0] - a[0])

  return videoChipsets
}
export default getVRAMs
