import axiosConfig from './axiosConfig'

const getVideoChipsets = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/video-chipsets?fields[0]=name')
  const videoChipsets = res.data.data.map((item: Record<string, string>) => [
    item.name,
    item.id,
  ])
  videoChipsets.sort().reverse()
  return videoChipsets
}
export default getVideoChipsets
