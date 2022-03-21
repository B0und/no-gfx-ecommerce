import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

interface ICheckboxList {
  title: string
  apiFunction: () => any
  initialData: any // required for react query
  postfix?: string
}

const CheckboxList: React.FC<ICheckboxList> = (props) => {
  const [show, setShow] = useState(false)
  const [isChecked, setIsChecked] = React.useState<boolean[]>(
    props.initialData.slice().fill(false)
  )

  const { data } = useQuery(
    props.title.toLocaleLowerCase(),
    props.apiFunction,
    {
      initialData: props.initialData,
    }
  )

  const initialData = data.slice(0, 4)
  const extraData = data.slice(4, data.length)
  const showMore = !show && extraData.length !== 0

  const toggleCheckboxValue = (index: number) => {
    setIsChecked(
      isChecked.map((v: boolean, i: number) => (i === index ? !v : v))
    )
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <FormGroup sx={{ width: '100%' }}>
      <h2> {props.title}</h2>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',

          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        {/* show first few items */}
        {initialData.map((item: [number | string, number], index: number) => (
          <FormControlLabel
            key={item[1]}
            control={
              <Checkbox
                onClick={() => toggleCheckboxValue(index)}
                value={item[0]}
                checked={isChecked[index]}
              />
            }
            label={props.postfix ? item[0] + props.postfix : item[0]}
          />
        ))}
        {/* show extra data */}
        {showMore && <button onClick={handleShow}>show more</button>}
        {show &&
          extraData.map((item: [number | string, number], index: number) => (
            <FormControlLabel
              key={item[1]}
              control={
                <Checkbox
                  onClick={() =>
                    toggleCheckboxValue(index + initialData.length)
                  }
                  value={item[0]}
                  checked={isChecked[index + initialData.length]}
                />
              }
              label={props.postfix ? item[0] + props.postfix : item[0]}
            />
          ))}
      </Box>
    </FormGroup>
  )
}

export default CheckboxList
