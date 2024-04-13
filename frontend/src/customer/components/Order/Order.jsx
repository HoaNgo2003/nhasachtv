import React from 'react'
import {Grid} from '@mui/material'
import OrderCard from './OrderCard'
const Order = () => {
  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{justifyContent:'space-between'}}>
      
        <Grid item xs={9}>
           <div className=''>
           {[1,1,1,1,1].map((item)=><OrderCard/>)}
           </div>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
