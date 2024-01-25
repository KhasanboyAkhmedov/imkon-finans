
'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Carousel = () => {

	return (
		// <div className='bg-red-600 w-full h-[20vh]'>
		// 	<div style={{ textAlign: 'center', marginTop: '10px' }}>
		// 		<button onClick={() => this.slider.slickPrev()}>Previous</button>
		// 		<button onClick={() => this.slider.slickNext()}>Next</button>
		// 	</div>
		// </div>
        // <section className='py-12'>
        //     <div className='container'>
        //         <Swiper
        //             navigation
        //             pagination= {{type: 'fraction'}}
        //             modules={[Navigation, Pagination]}
        //             className='w-full h-[30vh] rounded-lg'
        //         ></Swiper>
        //         <SwiperSlide>
        //             <div className='flex flex-row h-full w-full items-center justify-center'>
        //                 <Image src={first} alt='first slide' className='block h-full w-full object-cover'/>
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className='flex h-full w-full items-center justify-center'>
        //                 <Image src={second} alt='first slide' className='block h-full w-full object-cover'/>
        //             </div>
        //         </SwiperSlide>
        //     </div>
        // </section>
        <div className='my-[60px]'>
            <div className='flex justify-center text-center text-2xl py-5'>Customer reviews</div>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay= {{delay: true,
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

export default Carousel