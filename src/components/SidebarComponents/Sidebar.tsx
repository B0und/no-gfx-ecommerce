import { Box, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Price from './Price'

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '300px',
        background: '#eaeaea',

        p: '16px',
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '8px',
      }}
    >
      <Typography mb={1} variant="h5" component="h2" color="text.secondary">
        Filters
      </Typography>
      <Price />
      <CheckboxList />
    </Box>
  )
}

export default Sidebar
