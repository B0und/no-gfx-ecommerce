import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

export const LoginModal = ({ showModal, setShowModal }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    setFormValues({ ...formValues, [name]: e.target.value })
  }

  return (
    <Dialog open={showModal} fullWidth onClose={() => setShowModal(false)}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                required
                fullWidth
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
                fullWidth
                value={formValues.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                required
                fullWidth
                value={formValues.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                required
                name="password"
                fullWidth
                value={formValues.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => setShowModal(false)}
                disableElevation
              >
                Close
              </Button>
              <Button
                style={{ marginLeft: '15px' }}
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
      </DialogContent>
    </Dialog>
  )
}
