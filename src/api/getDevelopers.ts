import axiosConfig from './axiosConfig'

const getDevelopers = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/developers?fields[0]=name')
  const developers = res.data.data.map((item: Record<string, string>) => [
    item?.name?.toUpperCase(),
    item.id,
  ])

  return developers
}
export default getDevelopers
