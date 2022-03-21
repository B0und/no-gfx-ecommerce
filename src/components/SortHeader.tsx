import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

const typesList = ['popular', 'cheapFirst', 'expensiveFirst', 'discount']
type SortType = typeof typesList[number]

const SortHeader = () => {
  const [sortBy, setSortBy] = React.useState<SortType>('popular')

  const handleSortChange = (event: SelectChangeEvent<SortType>) => {
    setSortBy(event.target.value as SortType)
  }
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
