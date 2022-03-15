import axiosConfig from './axiosConfig'

const getMemoryTypes = async (): Promise<string[]> => {
  const res = await axiosConfig.get('/memory-types?fields[0]=name')
  const memoryTypes = res.data.data.map(
    (item: Record<string, string>) => item.name
  )
  return memoryTypes.sort((a: any, b: any) => a - b)
}
export default getMemoryTypes
