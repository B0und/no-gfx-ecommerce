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
        {initialData.map((item: any) => (
          <FormControlLabel
            key={item}
            control={<Checkbox />}
            label={props.postfix ? item + props.postfix : item}
          />
        ))}
        {showMore && <button onClick={handleShow}>show more</button>}
        {show &&
          extraData.map((item: any) => (
            <FormControlLabel
              key={item}
              control={<Checkbox />}
              label={props.postfix ? item + props.postfix : item}
            />
          ))}
      </Box>
    </FormGroup>
  )
}

export default CheckboxList
