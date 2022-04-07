import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Layout from '../src/components/Layout'
import Link from '../src/components/Link'

const About: NextPage = () => {
  return (
    <Layout>
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
        <Box maxWidth="sm">
          <Link color="secondary" href="/">
            Go to the home page
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default React.memo(About)
