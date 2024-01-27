import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.png' 
import LogoWhite from '@/public/logo-white biz fin.png'   
import { useTranslations } from 'next-intl'


const Sidebar = () => {
  const navt= useTranslations("Sidebar")
  return (
    <div className='fixed hidden md:flex flex-col w-[15%] items-center top-0 left-0 tracking-wider h-screen bg-[#db1380]'>
      <Link href={"/"}>
              <Image
                  src={LogoWhite}
                  alt='logo' 
                  width={100}
                  height={40} 
                  className='flex justify-center pt-[2px] mt-[60px]'
                  />
                  
      </Link>
      <div className='flex flex-col justify-center items-center text-[20px] lg:text-[22px] text-[#ffff] mt-[60px] lg:mt-[120px] mb-[60px] gap-3'>
        <Link href={'/microcredit'} className='w-full text-center rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navt('microcredit')}</Link>
        <Link href={'/microloan'}className='w-full text-center rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navt('microloan')}</Link>
        <Link href={'/microleasing'} className='w-full text-center rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navt('microleasing')}</Link>
        <Link href={'/factoring'} className='w-full text-center rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navt('factoring')}</Link>
      </div>  
      <div className='h-[60px] py-6 w-full bg-white text-center text-base items-center flex justify-center '>
          Kredit rasmiylashtirish 
      </div>
      <div className='flex flex-col py-6 justify-center text-center text-white text-lg'>
        <p className='cursor-pointer'>+998 78 298-12-35</p>
        <p className='cursor-pointer'>+998 74 228-32-12</p>
      </div>
    </div>
  )
}

export default Sidebar