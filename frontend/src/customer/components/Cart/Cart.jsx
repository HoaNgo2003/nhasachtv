import React, { useEffect } from 'react'
import CartItem from './CartItem'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/Store'
import Swal from 'sweetalert2'
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart}= useSelector(store=>store)
  const handleCheckout = (value)=>{
    if(value === 0){
      Swal.fire({
        title: "Chọn mua sản phẩm để tiếp tục",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
    else
    navigate("/checkout?step=2")
  }
  useEffect(()=>{
    dispatch(getCart())
  },[cart.cartItem])
  let totalPrice = 0;
  let totalItem = 0;
  let totalDiscount = 0;
  const cartItem = cart.cartItem;
  for(let i = 0; i < cartItem.length; i++){
    totalItem += cartItem[i]?.quanity;
    totalPrice += cartItem[i]?.price*cartItem[i]?.quanity;
    totalDiscount += cartItem[i]?.discount*cartItem[i]?.quanity;
  }
  
  cart.total = totalPrice;
  cart.totalItem = totalItem;
  console.log(cart)
  return (
    <div>
        <div className='flex lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
            {cartItem?.map((item)=><CartItem item={item}/>) }
        </div>
        
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'> 
        <p className='uppercase font-bold opacity-60 pb-4'>HOÁ ĐƠN</p>
        <hr />
        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Giá tiền</span>
                <span>{totalPrice}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Giảm giá</span>
                <span>-{totalDiscount}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Phí Ship</span>
                <span>0đ</span>
            </div>
            <div className='flex justify-between pt-3 font-bold'>
                <span>Tổng tiền</span>
                <span className='text-green-600 ' >{totalPrice - totalDiscount}đ</span>
            </div>
            </div>
            <button
            onClick={()=>handleCheckout(cartItem?.length)}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                THANH TOÁN
              </button>
        </div>
        </div>
        </div>
     
    </div>
  )
}

export default Cart
