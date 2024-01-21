
import React from 'react'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const Navbarlinks = () => {
    const navt= useTranslations("Navbar")
  return (
    <nav className=" hidden md:flex flex-row items-center text-base lg:text-lg justify-center">
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('home')}</Link>
        <Link href={'/vacancies'}className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('news')}</Link>
        <Link href={'/about-us'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('about')}</Link>
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('investors')}</Link>
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('contact')}</Link>
    </nav>
  )
}

export default Navbarlinks