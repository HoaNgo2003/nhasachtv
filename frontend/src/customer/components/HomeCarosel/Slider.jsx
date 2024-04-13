import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { sliderData } from './SliderData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

 

const Slider = () => {
    const items = sliderData.map((item)=><img className='cursor-pointer ' role='presentation' src={item.image} alt=''></img>)
    return (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
};
export default Slider;