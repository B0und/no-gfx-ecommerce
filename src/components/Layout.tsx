import { Container } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import PrimarySearchAppBar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <PrimarySearchAppBar />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
