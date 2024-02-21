
'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Link from 'next/link';

const Carousel = () => {

	return (
        <div  className='mt-[58px] '>
            <Swiper
                modules={[Navigation, Pagination, ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                className='h-[650px]'
                >
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-sayohat bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[60%] bg-gradient-to-r from-[#c4c4c400] to-[rgba(255,255,255,0.6)] "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10">
                            <p className=" text-[20px] font-semibold">Кредиты на отдых</p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">Sayohat <span className='text-[20px] '>до 12 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-ishonch bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[50%] bg-gradient-to-r from-transparent via-gray-100 to-white  "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10">
                            <p className=" text-[20px] font-semibold">Онлайн беззалоговый кредит</p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">ISHONCH <span className='text-[20px] '>до 12 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-madad bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[50%] bg-gradient-to-r from-[#c4c4c400] to-[#ffffff94]   "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10">
                            <p className=" text-[20px] font-semibold">На развитие Бизнеса для физических лиц</p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">Madad <span className='text-[20px] '>до 50 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-omad bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[50%] bg-gradient-to-r from-[#c4c4c400] to-[#ffffff94]   "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10 ">
                            <p className="flex flex-col text-[20px] font-semibold items-end">Кредит на приобретение автомобиля 
                                <span>со вторичного рынка, с условием оплаты 40% </span>
                                <span>от стоимости автомобиля заемщиком</span></p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">Omad <span className='text-[20px] '>до 50 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-talim bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[50%] bg-gradient-to-r from-[#c4c4c400] to-[#ffffff94]   "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10">
                            <p className="flex flex-col text-[20px] font-semibold items-end">Кредит на обучение по контракту, с условием, что заемщикя 
                                <span>сам оплачивает 30% от суммы контракта</span></p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">Ta`lim<span className='text-[20px] '>до 20 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="absolute h-[650px] w-full bg-tezpul bg-cover -z-10  bg-no-repeat"></div>
                    <div className="h-[650px] w-full  flex justify-end text-[#162c55] tracking-[1.15] ">
                        <div className="absolute right-0 h-[650px] w-[50%] bg-gradient-to-r from-[#c4c4c400] to-[#ffffff94]   "></div>
                        <div className=" flex flex-col justify-between items-end pr-[40px] py-[50px] z-10">
                            <p className=" text-[20px] font-semibold">Беззалоговый кредит, получаемый через кредитомат</p>
                            <p className="flex flex-col mr-[40px] text-[62px] items-center font-[600] uppercase ">Tezpul<span className='text-[20px] '>до 50 000 000 сум</span></p>
                            <Link href={'/'} className="text-[#e5097f] text-[28px] uppercase">Подробно...</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
	)
}

export default Carousel