import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Slider,
  Typography,
} from '@mui/material'

import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { PricesContext } from '../../../pages'
import getPrices from '../../api/getPrices'
import useDebounce from '../../hooks/useDebounce'
import useDidMountEffect from '../../hooks/useDidMountEffect'
import filtersStore from '../../store/filters.store'
import { mapOneRangeToAnother } from '../../utils/utils'

function getPriceText(value: number) {
  return `${value} rubles`
}

const Price = observer(() => {
  const prices = useContext(PricesContext)
  const { data } = useQuery('prices', getPrices, {
    initialData: prices,
  })
  const startP = Math.min(...(data ?? [0]))
  const endP = Math.max(...(data ?? [1000000]))
  const [startPrice, setStartPrice] = React.useState(startP)
  const [endPrice, setEndPrice] = React.useState(endP)

  const debouncedStartPrice = useDebounce(startPrice, 1000)
  const debouncedEndPrice = useDebounce(endPrice, 1000)

  useDidMountEffect(() => {
    filtersStore.changeStartPrice(debouncedStartPrice)
    filtersStore.changeEndPrice(debouncedEndPrice)
  }, [debouncedStartPrice, debouncedEndPrice])

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
      if (newValue[0]) {
        setStartPrice(mapOneRangeToAnother(newValue[0], 0, 100, startP, endP))
      }
    } else {
      if (newValue[1]) {
        setEndPrice(mapOneRangeToAnother(newValue[1], 0, 100, startP, endP))
      }
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
    if (range[1]) {
      setRange([newStartRangeValue, range[1]])
    }
  }

  const handleEndPriceBlur = () => {
    const newEndRangeValue = mapOneRangeToAnother(
      endPrice,
      startP,
      endP,
      0,
      100
    )
    if (range[0]) {
      setRange([range[0], newEndRangeValue])
    }
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
})

export default Price
