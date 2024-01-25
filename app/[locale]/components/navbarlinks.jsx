import { Link, usePathname,useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

const Navbarlinks = () => { 
    const navt= useTranslations("Navbar")
  return (
    <nav className=" hidden md:flex flex-row items-center text-base lg:text-lg justify-center uppercase text-[#36485C] ">
        <Link href={'/'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('home')}</Link>
        <Link href={'/news'}className={`mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('news')}</Link>
        <Link href={'/about-us'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('about')}</Link>
        <Link href={'/investors'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('investors')}</Link>
        <Link href={'/contacts'} className={`$ mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('contact')}</Link>
    </nav>
  )
}

export default Navbarlinks