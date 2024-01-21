"use client"
import Image from 'next/image'
import { usePathname, useRouter } from "@/navigation"
import { Link } from '@/navigation'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import Logo from '@/public/logo.png'
import Togglelanguage from './togglelanguage'


const Navbar = ({children}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () =>{
         setMenuOpen(!menuOpen)
    }
  return (
    <header className='flex  px-3 xl:px-12 py-2  fixed top-0 w-full z-50 shadow bg-white'>
        <div className="container  mx-auto flex justify-between flex-row items-center ">
            <Link href={"/"}>
                <Image
                    src={Logo}
                    alt='logo' 
                    width={220}
                    height={40} 
                    className='pt-[2px] '
                    />
                    
            </Link>
            {/* <nav className=" hidden md:flex items-center text-base lg:text-lg justify-between">
                <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Bosh</Link>
                <Link href={'/vacancies'}className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Xizmatlar</Link>
                <Link href={'/about-us'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Biz haqimizda</Link>
                <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Investorlarga</Link>
                <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Aloqa Raqamlari</Link>
            </nav> */}
            {children}
            <Togglelanguage/>
            <div onClick={handleNav} className='md:hidden cursor-pointer p-2 items-center justify-end border rounded-lg'>
                    {menuOpen ? <AiOutlineClose size={25}/> : <AiOutlineMenu  size={25}/> }
            </div>
        </div>    

            {/* Mobile Navbar */}
        <div className={
            menuOpen ? 'fixed left-0 mt-[58.6px] top-0 w-[100%] md:hidden h-screen bg-[#ecf0f3] p-5 ease-in-out duration-500'
            : 'fixed mt-[58.6px] left-[-100%] top-0 ease-out duration-500'
        }>
            <nav className="flex flex-col py-4">
                <Link href={'/'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Home</Link>
                <Link href={'/vacancies'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Vacancies</Link>
                <Link href={'/about-us'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>About us</Link>
            </nav>
        </div>
        
    </header>
  )
}

export default Navbar