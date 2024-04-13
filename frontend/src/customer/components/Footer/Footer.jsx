import React from 'react'
import {Button, Grid, Typography } from '@mui/material'
const Footer = () => {
  return (
    <div>
      <Grid className='z-index-0 bottom-0 bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black",color:"white", py:3}}
      >
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
        NHÀ SÁCH TV
        </Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        About us
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Blog
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Jobs
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Contact
        </Button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
        NHÀ SÁCH TV
        </Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        About us
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Blog
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Jobs
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Contact
        </Button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
        NHÀ SÁCH TV
        </Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        About us
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Blog
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Jobs
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Contact
        </Button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>
        NHÀ SÁCH TV
        </Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        About us
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Blog
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Jobs
        </Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterBottom>
        Contact
        </Button>
        </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Footer
