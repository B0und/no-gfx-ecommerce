import { Box } from '@mui/material'
// import Link from 'next/link'
// import { Link as MUILink } from '@mui/material'
import ProTip from './ProTip'
import Copyright from './Copyright'
import Link from './Link'

const Footer = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link color="secondary" href="/about">
        Go to the about page
      </Link>

      <ProTip />
      <Copyright />
    </Box>
  )
}

export default Footer
