'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Testomonial = () => {
  return (
    <div className='my-[60px]'>
        <div className='flex justify-center text-center text-2xl py-5'>Customer reviews</div>
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay= {{delay: 2500, 
            disableOnInteraction: false}}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='h-[300px]'
            >
            <SwiperSlide>
                <div className='w-full h-[200px] flex flex-col items-center justify-center'>
                    <div className='bg-slate-300 border rounded-[50%] h-[60px] w-[60px] my-4'></div>
                    I left a request, literally an hour later the guys called and explained and gave me the conditions! Quickly, clearly, efficiently!
                    <span className='text-black my-5'>Aziza Nurmuhamedova</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[200px] flex flex-col items-center justify-center'>
                    <div className='bg-slate-300 border rounded-[50%] h-[60px] w-[60px] my-4'></div>
                    Well done guys, they work very harmoniously and efficiently! I arrived in the morning with documents, after lunch the money was already credited!
                    <span className='text-black my-5'>Lola Turgunova</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[200px] flex flex-col  items-center justify-center'>
                    <div className='bg-slate-300 border rounded-[50%] h-[60px] w-[60px] my-4'></div>
                    I am very pleased with the service. Everything was done efficiently and quickly!
                    <span className='text-black my-5'>Aziz Alisherov</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[200px] flex flex-col  items-center justify-center'>
                    <div className='bg-slate-300 border rounded-[50%] h-[60px] w-[60px] my-4'></div>
                    Я очень доволен сервисом. Все сделано качественно и быстро!
                    <span className='text-black my-5'>Bekir</span>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testomonial