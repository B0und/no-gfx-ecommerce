import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { Link as MUILink } from '@mui/material'
import ProTip from './ProTip'
import Copyright from './Copyright'

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
      <Typography variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Typography>
      <Link href="/about" passHref>
        <MUILink color="secondary">Go to the about page</MUILink>
      </Link>

      <ProTip />
      <Copyright />
    </Box>
  )
}

export default Footer
