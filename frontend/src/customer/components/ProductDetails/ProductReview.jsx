import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,Box, Avatar,Rating} from '@mui/material'
import { store } from '../../../State/Store';
import { getAllReview } from '../../../State/Review/Action';
const ProductReview = ({item, productId}) => {
  const dispatch = useDispatch();
  const {review} = useSelector(store=>store);
    useEffect(()=>{
      dispatch(getAllReview(productId));
    },[review.review])
    console.log(review)
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9115fd"}}>{item.user.firstName}</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p>{item.user.lastName}</p>
                    <p>{item.creatAt}</p>
                </div>
            </div>
             
            <p>{item.review} 
            </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReview
