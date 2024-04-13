import React from 'react'
import {Button} from '@mui/material'
import {useLocation, useNavigate} from 'react-router-dom'
import { addItemToCart } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
const HomeSectionCard = ({product}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const params = location.pathname.split("/")[2];
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
    
    const jwt = localStorage.getItem("jwt");
    return (
        <div onClick={()=>navigate(`/product/${product?._id}`)} className='cursor-pointer 
    flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
           
           
                                   <div class="bg-white rounded-lg shadow-lg p-6   ">
                          <div class="relative overflow-hidden">
                              <img class="object-cover w-full h-full" src= {product.imageUrl} alt="Product"/>
                              <div class="absolute inset-0 bg-black opacity-30"></div>
                              <div class="absolute inset-0 flex items-center justify-center">
                                  <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300" onClick={()=>navigate(`/product/${product?._id}`)}>View Product</button>
                              </div>
                          </div>
                          <h3 class="text-xl font-bold text-gray-900 mt-4">{product.title}</h3>

                          <div class="flex items-center justify-between mt-4">
                             <span class="text-gray-900 font-bold text-lg">{product.price}đ</span>
                             {/* {jwt?
                             <>
                             <Button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"  onClick={handleAddToCart}>Add to Cart</Button>


                             </>
                             :<>
                             <Button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={()=>navigate("/login")}>Add to Cart</Button>


                             </>
} */}
                        </div>
                   </div>
        </div>
    )
}

export default HomeSectionCard
// <div class="bg-white-900 py-16  ">
// <div class="container mx-auto ">
//     <h2 class="text-3xl font-bold text-black mb-8">Tất cả sản phẩm</h2>
//     <div class="grid grid-cols-1 md:grid-cols-4 gap-8 border border-blacks">
//         {data.filter((item, index) => (index < 8)).map((item,index)=>{
//             return <>
//                      <div class="bg-white rounded-lg shadow-lg p-6    border border-black">
//                         <div class="relative overflow-hidden">
//                             <img class="object-cover w-full h-full" src= {item.imageUrl} alt="Product"/>
//                             <div class="absolute inset-0 bg-black opacity-30"></div>
//                             <div class="absolute inset-0 flex items-center justify-center">
//                                 <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300" onClick={()=>navigate(`/product/${item?._id}`)}>View Product</button>
//                             </div>
//                         </div>
//                         <h3 class="text-xl font-bold text-gray-900 mt-4">{item.title}</h3>

//                         <div class="flex items-center justify-between mt-4">
//                             <span class="text-gray-900 font-bold text-lg">{item.price}</span>
//                             {a?
//                             <>
//                             <Button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"  onClick={handleAddToCart}>Add to Cart</Button>


//                             </>
//                             :<>
//                             <Button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={()=>navigate("/login")}>Add to Cart</Button>


//                             </>
//                             }
//                         </div>
//                     </div>
//             </>
//         })}
   
     
//     </div>


// </div>
// </div>