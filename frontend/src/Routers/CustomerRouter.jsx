import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'
import ProductCard from '../customer/components/Product/ProductCart'
import Product from '../customer/components/Product/Product'
import Login from '../customer/Auth/LoginForm'
import RegisterForm from '../customer/Auth/RegisterForm'
import PaymentSuccess from '../customer/components/PaymentSuccess/PaymentSuccess'
import Profile from '../customer/components/Proflie/Profile'
const CustomerRouter = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path={'/'} element={<HomePage/>}></Route>
        <Route path={'/login'} element={<HomePage/>}/>
        <Route path={'/register'} element={<HomePage/>}/>
        <Route path={'/success'} element={<PaymentSuccess/>}/>
        <Route path={'/profile'} element={<Profile/>}></Route>
        <Route path={'/cart'} element={<Cart/>}></Route>
        <Route path='/:product' element={<Product/>}></Route>     
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>     
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path={'/account/order'} element={<Order/>}></Route>
        <Route path={'/account/order/:orderId'} element={<OrderDetail/>}></Route>
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouter
