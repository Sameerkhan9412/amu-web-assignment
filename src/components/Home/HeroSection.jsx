import React from 'react'
// Import Swiper styles
import 'swiper/css';
import { heroSecitonImages } from '../../utils/common-utils';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const HeroSection = () => {
  return (
    <div className=''>

    <Swiper spaceBetween={50} loop={true} pagination={true} modules={[Pagination]}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)} className='w-full' >
        {
            heroSecitonImages.map((image,index)=>(
                <SwiperSlide><img src={image} alt="hero image" className='w-full lg:max-h-96 object-cover'   /></SwiperSlide>
            ))
        }

    </Swiper>
        </div>
  )
}

export default HeroSection