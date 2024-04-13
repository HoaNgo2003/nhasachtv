import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';
const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
};

const HomeSectionCarosel = ({ data, sectionName, danhmuc }) => {
    // const items = data.slice(0,8).map((item)=><HomeSectionCard product={item}/>)
    const navigate = useNavigate()
    const [activeIndex, setActivIndex] = useState(0);
    const slidePrev = () => {
        setActivIndex(activeIndex - 1);
        console.log(activeIndex)
    }
    const slideNext = () => {
        setActivIndex(activeIndex + 1);
        console.log(activeIndex)

    }
    const syncActiveIndex = ({ item }) => setActivIndex(item);

    return (
        <>
            <div class="bg-white-900 py-16  ">
                <div class="container mx-auto ">
                    <h2 class="text-3xl font-bold text-black mb-8">{sectionName}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 border border-blacks">
                        {data.filter((item, index) => (index < 5)).map((item, index) => {
                            return <>
                                <div class="bg-white rounded-lg shadow-lg p-6    border border-black">
                                    <div class="relative overflow-hidden">
                                        <img class="object-cover w-full h-full" src={item.imageUrl} alt="Product" />
                                        <div class="absolute inset-0 bg-black opacity-30"></div>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300" onClick={() => navigate(`/product/${item?._id}`)}>View Product</button>
                                        </div>
                                    </div>
                                    <h3 class="text-xl font-bold text-gray-900 mt-4">{item.title}</h3>

                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-gray-900 font-bold text-lg">{item.price}đ</span>
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
                            </>
                        })}

                    </div>

                    <div className='my-5px'>
                        <button onClick={()=>navigate(`/${danhmuc}`)} type="button" class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Khám phá thêm
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeSectionCarosel
