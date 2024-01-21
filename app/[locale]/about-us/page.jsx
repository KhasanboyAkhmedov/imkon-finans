
import { useTranslations } from 'next-intl'
import Link from "next/link";
import React from 'react'


const AboutPage = () => {
  const navt= useTranslations("Navbar")
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
      About Page
      {navt("home")}
      {navt("news")}
      {navt("services")}
      <nav className=" hidden md:flex flex-row items-center text-base lg:text-lg justify-center">
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('home')}</Link>
        <Link href={'/vacancies'}className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('news')}</Link>
        <Link href={'/about-us'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('about')}</Link>
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('investors')}</Link>
        <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>{navt('contact')}</Link>  
      </nav>
      <Link href={'/'}>Home page</Link>
    </main>
  )
}

export default AboutPage