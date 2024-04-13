import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import {Grid} from '@mui/material'
const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20 '>
        <div>
            <h1 className='font-bold text-lg py-7'>Dia chi nhan hang</h1>
        <AddressCard/>
        </div>
        <div>
           <Grid className='space-y-5' container>
            {[1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignContent:'center', justifyContent:'space-between'}}>
            <Grid item xs={6}>
            <div className='flex'>
                <img className='w-[6rem] h-[6rem] object-cover object-top' src="https://salt.tikicdn.com/cache/280x280/ts/product/38/02/53/faa64e2a9376b035dd14e300ae2a7307.jpg.webp" alt="" />
                <div className='space-y-2 ml-5'>
                    <p className='font-semibold'>Truyen tan van</p>
                    <p className=''>The loai: Truyen thieu nhi</p>
                    <p>Gia: 15000đ</p>
                    <p>So luong: 1</p>
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
