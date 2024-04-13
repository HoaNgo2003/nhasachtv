import React from 'react'
 
const CartItemCheckout = ({item}) => {
 
    console.log(item)
   
   
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className="flex items-center">
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src={item.product?.imageUrl} alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>{item?.title}</p>
                <p className='opacity-70'>{item?.title}</p>
            <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                <p className='font-semibold'>{item?.price} đ</p>
                <p className='text-green-600 font-semibold'>Giảm giá: -{item?.discount}đ</p>
            </div>
            </div>
          
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                 
                <span className='py-1 px-7 border rounded-sm'>{item?.quanity}</span>
                
               
                </div>
                <div>
                     
                </div>
            </div>
    </div>
  )
}

export default CartItemCheckout
