import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImgBanner from '../assets/images/banner-1.jpg';
import ImgBanner2 from '../assets/images/banner-2.jpg';


function HomeTopBanner() {
  return (
    <>
        <Swiper 
        navigation={true} 
        pagination={true}
        modules={[Navigation, Pagination]} 
        className="home-top-banner">
            <SwiperSlide><img src={ImgBanner} className='w-100' alt="ImgBanner" /></SwiperSlide>
            <SwiperSlide><img src={ImgBanner2} className='w-100' alt="ImgBanner2" /></SwiperSlide>
            
        </Swiper>
    </>
  )
}

export default HomeTopBanner