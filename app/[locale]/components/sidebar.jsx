import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.png'    
const Sidebar = () => {
  return (
    <div className='hidden  md:flex flex-col w-[15%] h-screen bg-white border'>
        Sidebar
        <Link href={"/"}>
                <Image
                    src={Logo}
                    alt='logo' 
                    width={220}
                    height={40} 
                    className='flex justify-center pt-[2px]'
                    />
                    
        </Link>
    </div>
  )
}

export default Sidebar