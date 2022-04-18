import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import Router from 'next/router'

interface Props {
  showModal: boolean
  setShowModal: (item: boolean) => void
}

export const LoginModal = ({ showModal, setShowModal }: Props) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(formValues)
  }

  const handleInputChange = (e: {
    target: { name: string; value: string }
  }) => {
    const name = e.target.name
    setFormValues({ ...formValues, [name]: e.target.value })
  }

  return (
    <>
      <Dialog open={showModal} fullWidth onClose={() => setShowModal(false)}>
        <DialogTitle sx={{ fontSize: '2rem', marginBottom: '24px' }}>
          Login
        </DialogTitle>
        <DialogContent sx={{ paddingTop: '32px' }}>
          <form onSubmit={onSubmit}>
            <Grid container spacing={4}>
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
                <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Button
                    variant="outlined"
                    onClick={() => setShowModal(false)}
                    disableElevation
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disableElevation
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
          <Divider sx={{ marginTop: '32px' }} variant="middle" />
          <h3>Don`t have an account?</h3>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => {
              Router.push('/register')
            }}
          >
            Register
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
