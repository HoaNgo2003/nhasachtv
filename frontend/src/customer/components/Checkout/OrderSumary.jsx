import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'

import {useDispatch, useSelector, } from "react-redux"
import {useLocation, useNavigate} from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'

import { creatPayment } from '../../../State/Payment/Action'
import CartItemCheckout from '../Cart/CartItemCheckout'
const OrderSumary = () => {
  const dispatch = useDispatch();
  const {order} = useSelector(store=>store)
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")
  console.log(order)
 
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  const handleThanhToan = ()=>{
    dispatch(creatPayment(orderId))
    navigate(`/success/?orderId=${orderId}`)
  }
  console.log(order.order)
  let totalPrice = 0;
  let totalDiscount = 0;
  console.log()
  // for(const item of order.orderItems){
    order?.order?.orderItems.forEach((item)=>{
      totalPrice += item.quanity*item.price;
      totalDiscount += item.quanity*item.discount
    })
  // }
  //  console.log(order.order.orderItems[0].product)
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order?.order} diachi={order?.order?.diachi}/>

      </div>

      <div>
        <div className='flex lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
            {order?.order?.orderItems?.map((item)=><CartItemCheckout item={item}/>) }
        </div>
        
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'> 
        <p className='uppercase font-bold opacity-60 pb-4'>HOÁ ĐƠN</p>
        <hr />
        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Giá Tiền</span>
                <span>{totalPrice}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Giảm giá</span>
                <span>{totalDiscount}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Phí Ship</span>
                <span>0đ</span>
            </div>
            <div className='flex justify-between pt-3 font-bold'>
                <span>Tổng tiền</span>
                <span className='text-green-600 ' >{totalPrice-totalDiscount}đ</span>
            </div>
            </div>
            <button
            onClick={handleThanhToan}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                THANH TOÁN
              </button>
        </div>
        </div>
        </div>
     
    </div>
    </div>
  )
}

export default OrderSumary
