import React from 'react'
import { Grid, Box, Button, TextField } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom' 
import AddressCard from '../AddressCard/AddressCard'
import { createOrder } from '../../../State/Order/Action'
import { store } from '../../../State/Store'

const Delivery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {order} = useSelector(store=>store);
  const handelSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      sodienthoai: data.get("sodienthoai")
    }
    const orderData = {address, navigate}
    dispatch(createOrder(orderData))
     console.log(order)

  }
  // console.log(address)
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            {/* <AddressCard /> */}
            <Button sx={{ mt: 2, bgcolor: '#7E5FBE' , color:'white'}} size='large' variant='cointained' color='white'>
              Địa Chỉ
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  id='firstName'
                  name='firstName'
                  label='Fist Name'
                  fullWidth
                  autoComplete='given-name'/> 
                
                </Grid>
                <Grid  item xs={12} sm={6}>
                <TextField
                  required
                  id='lastName'
                  name='lastName'
                  label='Last Name'
                  fullWidth
                  autoComplete='given-name'/> 
                </Grid>
                <Grid  item xs={12} >
                <TextField
                  required
                  id='address'
                  name='address'
                  label='Address'
                  fullWidth
                  autoComplete='given-name'
                  multiline
                  rows={4}/> 

                </Grid>
                <Grid  item xs={12} >
                <TextField
                  required
                  id='sodienthoai'
                  name='sodienthoai'
                  label='Phone'
                  fullWidth
                  autoComplete='given-name'/> 
                </Grid>
                <Grid  item xs={12} >
                <Button sx={{ mt: 2, bgcolor: '#FDF3F4' }} type='submit' size='large' variant='cointained' color='white'>
              XÁC NHẬN ĐỊA CHỈ
            </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Delivery
