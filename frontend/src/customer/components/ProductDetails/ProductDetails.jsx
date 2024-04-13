/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import "./detail.css"
import {useNavigate,useLocation, useSearchParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import {Rating, Grid} from "@mui/material"
import ProductReview from "./ProductReview"
import { truyendai } from "../../../Data/truyendai"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard"
import { findProducts, findProductsById } from "../../../State/Product/Action"
import { store } from "../../../State/Store"
import { addItemToCart } from "../../../State/Cart/Action"
import ReviewForm from "../../Review/ReviewForm"
import { getAllReview } from "../../../State/Review/Action"
import Swal from 'sweetalert2'
import Pagination from "../Pagination/Pagination"

export default function ProductDetails({props}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(store=>store);
  const {review} = useSelector(store=>store);
 const {cart} = useSelector(store=>store);
  const location = useLocation();
  const params = location.pathname.split("/")[2];
  const jwt = localStorage.getItem("jwt")
  console.log(params)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  useEffect(()=>{
    const req = {productId: params}
   dispatch(findProductsById(req));
   
  },[dispatch, params])
  useEffect(()=>{
    dispatch(getAllReview(params));
  },[dispatch, params, review.payload])
  const handleAddToCart =(event)=>{
    // event.preventDefault()
    const data = {productId: params}
    dispatch(addItemToCart(data))
    if(jwt){
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
      title: "Thêm sản phẩm vào giỏ hàng thành công"
    });
    navigate('/cart')
    }else{
      Swal.fire({
        title: "Đăng nhập để thêm sản phẩm",
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
      navigate('/login')
    }
    
  }
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const Product = products.product.product;
  console.log(products.product.products)
  const truyentuongtu = products.product.products?.filter((item)=>item.danhmuc===Product?.danhmuc)
  console.log(review);
  const currentPosts = review?.reviews.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-white lb:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* {products.product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <a href={products.product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {Product?.title}
              </a>
            </li>
          </ol>
        </nav>
<section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
   {/* Image gallery */}
   <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
              src={Product?.imageUrl}
              alt={"anh san pham"}
              className="h-full w-full object-cover object-center"
            />
          </div>
           
         
        </div>

        {/* Product info */}
        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{Product?.title}</h1>
            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'></h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">{Product?.description}</h2>
            <div className='flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6'>
              <p className='font-semibold'>{Product?.price} đ</p>
              
              <p className='text-green-600 font-semibold'>Giảm giá -{Product?.discount}đ</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
            <Rating name="read-only" value={3.5} disabled />
            {/* <p className='opacity-50 text-sm'>  {Product?.reviews?.length} đã đánh giá</p> */}
            </div>

            <form   className="mt-10">
              {/* Colors */}
             

              {/* Sizes */}
            
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{Product?.description}</p>
              </div>
            </div>

            

        
          </div>
              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                ADD TO CART
              </button>
            </form>
          </div>

         
        </div>
</section>
{/* rating and review */}
       <section>
            <h1 className="font-semibold text-lg pb-4">Đánh giá gần đây</h1>
            <div className="border p-5">
              <ReviewForm/>
              <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {currentPosts.map((item)=><>
                    <ProductReview
                  
                  item={item}productId = {location.pathname.split("/")[2]}/>
                  </>
                )  }
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={review?.reviews.length}
                  paginate={paginate}
                  product = {location.pathname.split("/")[2]}
                />
              </Grid>
              </Grid>
            </div>
       </section>
{/* san pham tuong tu */}
<section className="pt-10">
            <h1 className="font-semibold text-lg pb-4">Sản phẩm tương tự</h1>
            <div className="px-10 flex flex-wrap space-y-5">
              {truyentuongtu?.map((item)=>
               
              <HomeSectionCard  product={item}/>)}
            </div>
</section>
      </div>
    </div>
  )
}
