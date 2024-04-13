import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getUSer } from '../../../State/Auth/Action';

export default function Profile() {
    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store);
    const jwt = localStorage.getItem("jwt");
    useEffect(()=>{
        if(jwt)
        dispatch(getUSer())
    },[jwt])
    console.log(auth)
  return (
    <div className='px-50' style={{padding:'60px'}}>
      <div className=" p-50 px-4 sm:px-0 p-20">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Thông tin tài khoản</h3>
      </div>
      <div className="p-50 mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth?.user?.firstName+" "}{auth?.user?.lastName}</dd>
          </div>
         
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth?.user?.email}</dd>
          </div>
       
          
        
        </dl>
      </div>
    </div>
  )
}
