import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AuthModel from '../../Auth/AuthModel'
import Swal from 'sweetalert2'
import { getUSer, logout } from '../../../State/Auth/Action'
const navigation = [
  { name: 'Trang chủ', id: '/', href: '/', current: true },
  { name: 'Truyện ngắn', id: '/truyenngan', href: '/truyenngan', current: false },
  { name: 'Truyện dài', id: '/truyendai', href: '/truyendai', current: false },
  { name: 'Truyện thiếu nhi', id: '/truyenthieunhi', href: '/truyenthieunhi', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
 
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector(store => store);
  const {cart} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [active, setActive] = useState(false);
  const handleClose = () => {
    setOpenAuthModel(false);
  }
  const handleCart = ()=>{
    navigate('/cart')
  }
  const handleOpen = () => {
    setOpenAuthModel(true);
   
  }
  useEffect(() => {
    if (jwt) {
      dispatch(getUSer(jwt));
       
    }
  }, [jwt])
  console.log(cart)
  console.log(auth)
  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (auth.use) {
      setActive(true)
    }
    if (location.pathname === '/login' || location.pathname === '/register') {
      navigate(-1);
    }
  }, [auth.user])
  useEffect(()=>{

    
  },[])
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    setActive(false)
    localStorage.clear()
    navigate('/')
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Đăng xuất thành công"
    });
    
  }
  console.log(auth)
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="data:image/jpeg;base64,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"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button" onClick={handleCart} 
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                   <ShoppingCartIcon  className="h-6 w-6" aria-hidden="true" />({cart?.totalItem})
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {!auth.user?.lastName ? (
                         <Menu.Button onClick={handleOpen} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                         <span className="absolute -inset-1.5" />
                         <span className="sr-only ">Open user menu</span>
                         <span onClick={handleOpen}className='p-2 text-white'>SIGN IN</span>

                       </Menu.Button>
                      ):(
                        <>
                          <Menu.Button  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only ">Open user menu</span>
                        <span className='p-2 text-white'>{auth.user.lastName.toUpperCase()}</span>
                      </Menu.Button>
                      <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              to={'/profile'}
                              className= {classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        {auth?.user?.role==="ADMIN"?<>
                        
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              to={'/admin'}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Trang quản trị
                            </Link>
                          )}
                        </Menu.Item>
                        </>:""}
                        <Menu.Item >
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              to={"/account/order"}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Trạng thái đơn hàng
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item onClick={handleLogout}>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Đăng xuất
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                        </>
                      
                      )}
                     
                    </div>
                    
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <AuthModel handleClose={handleClose} open={openAuthModel} />
    </>

  )
}
