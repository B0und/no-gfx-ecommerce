import axiosConfig from './axiosConfig'

const getManufacturers = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/manufacturers?fields[0]=name')
  const manufacturers = res.data.data.map(
    (item: Record<string, string>) => [item.name, item.id]
  )
  return manufacturers
}
export default getManufacturers
