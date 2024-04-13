import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import "./PaymentSuccess.css"
import {Alert,AlertTitle, Grid} from '@mui/material'
import { store } from '../../../State/Store';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import AddressCard from '../AddressCard/AddressCard';
const PaymentSuccess = () => {
     
    const {order} = useSelector(store=>store);
    const dispatch = useDispatch();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderId = urlParams.get("orderId")
     useEffect(()=>{
        dispatch(getOrderById(orderId))
     },[orderId])
    console.log(order)
    
    // console.log(orderId)
  return (
    <div className='p-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert
            variant='filled'
            severity='success'
            sx={{mb:6, width:'fit-content'}}
            >
                <AlertTitle>
                    Payment success
                    Chuc mung quy khach mua hang thanh cong
                </AlertTitle>
            </Alert>
        </div>
        <Grid container className='space-y-5 py-5 pt-20'>
            <h1  className='text-lg font-semibold' >San pham da mua</h1>
            {order.order?.orderItems.map((item)=><Grid container item className=''
            sx={{alignItems:"center", justifyContent:"space-around"}}
            >
                <Grid item xs={6}>
                    <div className='flex items-center'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'src={item?.product?.imageUrl} alt="" />
                    <div className='  font-semibold space-x-5 text-lg'>
                    <span className='text-lg'>{item.title}</span>
                    <span>Gia:{item.price}</span>
                    <span>So luong:{item.quanity}</span>
                    <span>Giamgia:-{item.discount}</span>    
                    </div>
                    </div>
                </Grid>
                <Grid item>
                    <AddressCard address={order?.order}/>
                </Grid>
            </Grid>)}

        </Grid>
    </div>
  )
}

export default PaymentSuccess
