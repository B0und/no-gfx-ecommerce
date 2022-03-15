import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Slider,
  Typography,
} from '@mui/material'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { PricesContext } from '../../../pages'
import getPrices from '../../api/getPrices'
import { mapOneRangeToAnother } from '../../helpers/helpers'

function getPriceText(value: number) {
  return `${value} rubles`
}

const Price = () => {
  const prices = useContext(PricesContext)
  const { data } = useQuery('prices', getPrices, {
    initialData: prices,
  })
  const startP = Math.min(...(data ?? [0]))
  const endP = Math.max(...(data ?? [1000000]))
  const [startPrice, setStartPrice] = React.useState(startP)
  const [endPrice, setEndPrice] = React.useState(endP)

  const [range, setRange] = React.useState([0, 100])

  const handleStartPriceChange = (event: any) => {
    setStartPrice(Number(event.target.value))
  }

  const handleEndPriceChange = (event: any) => {
    setEndPrice(Number(event.target.value))
  }

  const handleSliderChange = (
    event: any,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    setRange(newValue)

    if (activeThumb === 0) {
      setStartPrice(mapOneRangeToAnother(newValue[0], 0, 100, startP, endP))
    } else {
      setEndPrice(mapOneRangeToAnother(newValue[1], 0, 100, startP, endP))
    }
  }

  const handleStartPriceBlur = () => {
    const newStartRangeValue = mapOneRangeToAnother(
      startPrice,
      startP,
      endP,
      0,
      100
    )
    setRange([newStartRangeValue, range[1]])
  }

  const handleEndPriceBlur = () => {
    const newEndRangeValue = mapOneRangeToAnother(
      endPrice,
      startP,
      endP,
      0,
      100
    )
    setRange([range[0], newEndRangeValue])
  }

  return (
    <>
      <Typography variant="h6" component="h3" color="text.secondary">
        Price
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <FormControl variant="standard">
          <OutlinedInput
            size="small"
            id="standard-adornment-amount"
            value={startPrice}
            onChange={handleStartPriceChange}
            onBlur={handleStartPriceBlur}
            startAdornment={
              <InputAdornment position="start">from</InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard">
          <OutlinedInput
            size="small"
            id="standard-adornment-amount"
            value={endPrice}
            onChange={handleEndPriceChange}
            onBlur={handleEndPriceBlur}
            startAdornment={
              <InputAdornment position="start">to</InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={range}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        getAriaValueText={getPriceText}
        disableSwap
      />
    </>
  )
}

export default Price
