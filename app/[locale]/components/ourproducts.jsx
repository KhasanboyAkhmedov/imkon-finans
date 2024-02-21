import React from 'react'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
// import product1 from '@/public/1613472925.jpg'

const Ourroducts = () => {
    const t = useTranslations("Home")
  return (
    <div className="flex flex-col justify-center  ">
        <h3 className="uppercase text-center text-3xl md:text-5xl">{t('products')}</h3>
        <div className="flex flex-row flex-wrap justify-around mt-10 ">
            {/* <div className='rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]' >
                <p className='flex absolute justify-center items-center '>Sayohat</p>
                <Image src={first} alt='ishonch' className='relative object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/>
            </div>
            <div className='bg-[url]'></div>
            <Image src={second} alt='ishonch' className='object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/>
            <Image src={third} alt='ishonch' className='object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/>
            <Image src={fourth} alt='ishonch' className='object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/>
            <Image src={fivth} alt='ishonch' className='object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/>
            <Image src={six} alt='ishonch' className='object-cover rounded-lg w-full h-[200px] md:w-[180px] md:h-[180px]'/> */}

            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Ishonch</div> 
            </div>
            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Sayohat</div> 
            </div>
            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Madad</div> 
            </div>
            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Omad</div> 
            </div>
            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Talim</div> 
            </div>
            <div className='mx-1 my-4 flex justify-center items-center border rounded w-full md:w-[240px]  lg:w-[270px] xl:w-[340px] h-[200px] bg-white shadow-md'>
                <div className='text-center'>Tezpul</div> 
            </div>
        </div>
    </div>
  )
}

export default Ourroducts