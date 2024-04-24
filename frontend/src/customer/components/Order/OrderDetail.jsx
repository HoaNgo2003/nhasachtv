import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../State/Store'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
const OrderDetail = () => {
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);
    const location = useLocation();
    console.log(location.pathname.split('/')[3])
    useEffect(() => {
        dispatch(getOrderById(location.pathname.split('/')[3]))
    }, [])
    console.log(order)
    return (
        <div className='px:5 lg:px-20 '>
            <div>
                <h1 className='font-bold text-lg py-4'>Địa chỉ nhận hàng: {order?.order?.diachi} </h1>
                <p className='font-bold text-lg'>Tên người nhận: {order?.order?.tennguoinhan}</p>
                 
            </div>
            <div>
                <Grid className='space-y-5' container>
                    {order?.order?.orderItems?.map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignContent: 'center', justifyContent: 'space-between' }}>
                        
                        <Grid item xs={6}>
                            <div className='flex'>
                                <img className='w-[6rem] h-[6rem] object-cover object-top' src={item?.product?.imageUrl
                                } alt="" />
                                <div className='space-y-2 ml-5'>
                                    <p className='font-semibold'>{item?.product?.title}</p>
                                    <p className=''>Thể loại: {item?.product?.danhmuc}</p>
                                    <p>Tổng tiền: {item?.price * item?.quanity - item?.quanity*item?.discount}đ</p>
                                    <p>Số lượng: {item?.quanity}</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>)}

                </Grid>
            </div>

        </div>
    )
}

export default OrderDetail
