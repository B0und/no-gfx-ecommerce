import { Container } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <>{children}</>
      <Footer />
    </Container>
  )
}

export default Layout
