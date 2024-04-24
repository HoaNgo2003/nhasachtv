import React from 'react'
import {Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
const OrderCard = ({item}) => {
  console.log(item)
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${item?._id}`)} className='p-5 shadow-lg hover:shadow-2xl mt-5'>
      <Grid container spacing={2} sx={{justifyContent:'space-between', alignItems:'center'}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
              <p>ID: {item?._id}</p>
                <div className='ml-5 space-y-2'>
                    <p className=''>{item?.title}</p>
                    <p className='opacity-50 text-sm font-semibold'>Số lượng: {item?.orderItems?.length}</p>
                    <p></p>
                </div>
            </div>
            
        </Grid>
        <Grid item xs={2}>
            Trạng thái: {item?.paymentDetails?.paymentStatus}
        </Grid>
        <Grid item xs={4}>
            <p>
                <span>Đặt hàng lúc: {item?.orderDate}</span>
            </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
