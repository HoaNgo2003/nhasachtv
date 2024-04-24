import React, { useEffect } from 'react'
import {Grid} from '@mui/material'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUSer } from '../../../State/Auth/Action'
import { store } from '../../../State/Store'
import { getOrderUser } from '../../../State/Order/Action'
const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);
  const {order} = useSelector(store=>store);
  useEffect(()=>{
    if(jwt){
      dispatch(getUSer(jwt))
    }

  },[]);
  useEffect(()=>{
    if(jwt){
      dispatch(getOrderUser(auth.user));
    }
  },[])
  console.log(order?.orders)

  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{justifyContent:'space-between'}}>
      
        <Grid item xs={9}>
           <div className=''>
           {order?.orders?.map((item)=><OrderCard item ={item}/>)}
           </div>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
