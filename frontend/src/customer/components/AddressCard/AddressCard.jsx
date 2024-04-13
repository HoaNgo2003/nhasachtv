import React from 'react'

const AddressCard = ({address}) => {
  console.log(address)
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.tennguoinhan}</p>
        <p>{address?.address}</p>
        <div className='space-y-1'>
            <p className='font-semibold'>Số điện thoại</p>
            <p>{address?.giaohangAddress?.sodienthoai}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
