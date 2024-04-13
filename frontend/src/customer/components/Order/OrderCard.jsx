import React from 'react'
import {Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/5')} className='p-5 shadow-lg hover:shadow-2xl mt-5'>
      <Grid container spacing={2} sx={{justifyContent:'space-between', alignItems:'center'}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[6rem] h-[6rem] object-cover object-top' src="https://salt.tikicdn.com/ts/tikimsp/11/23/63/e79c535d4a7124325b3d32bc7628a30f.png" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className=''>Sach on thi</p>
                    <p className='opacity-50 text-sm font-semibold'>The loai: Truyen ngan</p>
                    <p></p>
                </div>
            </div>
            
        </Grid>
        <Grid item xs={2}>
            30000đ
        </Grid>
        <Grid item xs={4}>
            <p>
                <span>Giao hang vao ngay 04 thang 8</span>
            </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
