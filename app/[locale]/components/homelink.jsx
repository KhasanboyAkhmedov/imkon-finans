import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Homelink = () => {
  const navto= useTranslations("Sidebar")
  const navt= useTranslations("Navbar")
  return (
    <>
        {/* <div className='md:hidden flex flex-col justify-center items-center text-[20px] lg:text-[22px] text-[#ffff] mt-[60px] lg:mt-[120px] mb-[60px] gap-3'>
          <Link href={'/microcredit'} className='py-2 pl-2  w-full rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navto('microcredit')}</Link>
          <Link href={'/microloan'}className='py-2 pl-2  w-full rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navto('microloan')}</Link>
          <Link href={'/microleasing'} className='py-2 pl-2  w-full rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navto('microleasing')}</Link>
          <Link href={'/factoring'} className='py-2 pl-2  w-full rounded px-[35px] hover:bg-white hover:border-red-900 hover:text-red-900 '>{navto('factoring')}</Link>
        </div>  */}
        <nav className="md:hidden flex flex-col  py-4 items-center text-base lg:text-lg justify-center uppercase text-white leading-[24px]">
          <Link href={'/'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('home')}</Link>
          <Link href={'/news'} className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('news')}</Link>
          <Link href={'/about-us'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('about')}</Link>
          <Link href={'/investors'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('investors')}</Link>
          <Link href={'/contacts'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('contact')}</Link>
      </nav>
      {/* <nav className="md:hidden flex flex-col  py-4 items-center text-base lg:text-lg justify-center uppercase text-white leading-[24px] gap-3">
          <Link href={'/'}  className={`text-center w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('home')}</Link>
          <Link href={'/news'} className={`text-center w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('news')}</Link>
          <Link href={'/about-us'}  className={`text-center w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('about')}</Link>
          <Link href={'/investors'}  className={`text-center w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('investors')}</Link>
          <Link href={'/contacts'}  className={`text-center w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('contact')}</Link>
      </nav> */}
    </>
  )
}

export default Homelink