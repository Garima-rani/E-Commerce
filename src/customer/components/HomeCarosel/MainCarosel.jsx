import React from 'react';
 import AliceCarousel from 'react-alice-carousel';
 import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './mainCaroselData';
    
    const items = mainCaroselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)


const MainCarousel = () => (

    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
    
);

export default MainCarousel;
