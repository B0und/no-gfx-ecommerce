import axiosConfig from './axiosConfig'

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.substring(1)

const getDevelopers = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/developers?fields[0]=name')
  const developers = res.data.data.map((item: Record<string, string>) =>
    capitalize(item.name)
  )
  return developers
}
export default getDevelopers
