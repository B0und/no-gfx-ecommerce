import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Layout from '../src/components/Layout'
import { Button, Grid, TextField } from '@mui/material'

const About: NextPage = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(formValues)
  }

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name
    setFormValues({ ...formValues, [name]: e.target.value })
  }

  return (
    <Layout>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ paddingTop: '32px' }}
      >
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              required
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              required
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}

export default React.memo(About)
