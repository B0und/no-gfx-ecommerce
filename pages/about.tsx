import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { Link as MUILink } from '@mui/material'
import ProTip from '../src/components/ProTip'
import Copyright from '../src/components/Copyright'

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
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
          <Link href="/" passHref>
            <MUILink color="secondary">Go to the home page</MUILink>
          </Link>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default About
