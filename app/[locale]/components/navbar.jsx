"use client"
import Image from 'next/image'
import { usePathname, useRouter } from "@/navigation"
import { Link } from '@/navigation'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import Logo from '@/public/logo.png'
import Togglelanguage from './toggleLanguage'
import {getTranslations} from 'next-intl/server'


const Navbar = ({children}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () =>{
         setMenuOpen(!menuOpen)
    }
  return (
    <header className='flex  px-3 xl:px-12 py-2  fixed top-0 md:ml-[15%] md:w-[85%] w-full z-50 shadow bg-white '>
        <div className="container  mx-auto flex justify-between md:justify-center w-full flex-row items-center">
            <Link href={"/"}>
                <Image
                    src={Logo}
                    alt='logo' 
                    width={220}
                    height={40} 
                    className='pt-[2px] flex md:hidden'
                    />
                    
            </Link>
            {children}
            <div className='flex flex-row justify-between'>

            <Togglelanguage/>
            <div onClick={handleNav} className='md:hidden ml-[15px] cursor-pointer p-2 items-center justify-end border rounded-lg'>
                    {menuOpen ? <AiOutlineClose size={25}/> : <AiOutlineMenu  size={25}/> }
            </div>
            </div>
        </div>    

            {/* Mobile Navbar */}
        <div className={
            menuOpen ? 'fixed left-0 mt-[58px] top-0 w-[100%] md:hidden h-screen bg-[#840E1C] p-5 ease-in-out duration-500'
            : 'fixed mt-[58px] left-[-100%] top-0 ease-out duration-500'
        }>
            {/* <nav className="flex flex-col py-4">
                <Link href={'/'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Home</Link>
                <Link href={'/vacancies'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Vacancies</Link>
                <Link href={'/about-us'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>About us</Link>
            </nav> */}
            <nav className="flex flex-col py-4 items-center text-base lg:text-lg justify-center uppercase text-white leading-[24px]">
                <Link href={'/'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600'>Home</Link>
                <Link href={'/news'}onClick={() => setMenuOpen(!menuOpen)} className='py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600'>News</Link>
                <Link href={'/about-us'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600'>About us</Link>
                <Link href={'/investors'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600'>Investors</Link>
                <Link href={'/contacts'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600'>Contacts</Link>
            </nav>
        </div>
        
    </header>
  )
}

export default Navbar