
"use client"
import Navbar from "@/app/[locale]/components/navbar"
import { LanguageToggle } from "./language-toggler"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "@/navigation"

export const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <header className="flex flex-row top-0 z-40 w-full ">
            <Navbar/>
            {/* <div className="container mx-auto flex flex-row justify-between p-2 md:flex-row items-center ">
                <Link href={"/"}>
                    <Image
                        src={'/logo.png'}
                        alt='logo' 
                        width={220}
                        height={40} className='block md:hidden'/>
                </Link>
                
                <nav className=" hidden md:flex items-center text-sm lg:text-lg justify-centerz">
                    <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Bosh</Link>
                    <Link href={'/vacancies'}className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Xizmatlar</Link>
                    <Link href={'/about'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Biz haqimizda</Link>
                    <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Investorlarga</Link>
                    <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Aloqa Raqamlari</Link>
                </nav>
                <button className='cursor-pointer' onClick={() => router.push(pathname, { locale: "en" })}>
                English
                </button>
                <button className='cursor-pointer' onClick={() => router.push(pathname, { locale: "ru" })}>
                Russian
                </button>
            </div> */}
            {/* <LanguageToggle /> */}
        </header>
    )
}