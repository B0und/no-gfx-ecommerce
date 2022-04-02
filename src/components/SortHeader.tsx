import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useEffect } from 'react'
import { IGraphicsCard, IGraphicsResponse } from '../../types/GraphicsCard'

const typesList = ['popular', 'cheapFirst', 'expensiveFirst', 'discount']
type SortType = typeof typesList[number]

interface ISortHeader {
  setFilteredData: (initialData: IGraphicsResponse) => void
  initialData: IGraphicsResponse
}

const SortHeader: React.FC<ISortHeader> = ({
  setFilteredData,
  initialData,
}) => {
  const [sortBy, setSortBy] = React.useState<SortType>('popular')

  const handleSortChange = (event: SelectChangeEvent<SortType>) => {
    setSortBy(event.target.value as SortType)
  }

  useEffect(() => {
    switch (sortBy) {
      case 'popular':
        setFilteredData(initialData)
        break
      case 'cheapFirst':
        const initalDataCopy = initialData?.data
        const data1 = initalDataCopy?.sort(
          (a: IGraphicsCard, b: IGraphicsCard) => a.price - b.price
        )
        setFilteredData({ ...initialData, data: data1 })
        break
      case 'expensiveFirst':
        const initalDataCopy2 = initialData?.data
        const data2 = initalDataCopy2?.sort(
          (a: IGraphicsCard, b: IGraphicsCard) => b.price - a.price
        )
        setFilteredData({ ...initialData, data: data2 })
        break
      default:
        console.error('Unknown filter ')
    }
  }, [initialData, setFilteredData, sortBy])

  return (
    <FormControl>
      <Select value={sortBy} onChange={handleSortChange}>
        <MenuItem value="popular">Popular</MenuItem>
        <MenuItem value="cheapFirst">Cheap First</MenuItem>
        <MenuItem value="expensiveFirst">Expensive First</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SortHeader
