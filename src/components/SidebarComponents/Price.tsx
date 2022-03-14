import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Slider,
  Typography,
} from '@mui/material'
import React from 'react'

function getPriceText(value: number) {
  return `${value} rubles`
}

function mapOneRangeToAnother(
  sourceNumber: number,
  fromA: number,
  fromB: number,
  toA: number,
  toB: number
) {
  const deltaA = fromB - fromA
  const deltaB = toB - toA
  const scale = deltaB / deltaA
  const negA = -1 * fromA
  const offset = negA * scale + toA
  const finalNumber = sourceNumber * scale + offset
  return Math.round(finalNumber)
}

const Price = () => {
  const startP = 1000
  const endP = 500000
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
