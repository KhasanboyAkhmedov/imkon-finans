import { Link, usePathname,useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

const Navbarlinks = () => { 
    const navt= useTranslations("Navbar")

  return (
    <>
      <nav className=" hidden md:flex flex-row items-center text-base lg:text-lg justify-center uppercase text-[#36485C] ">
          <Link href={'/'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('home')}</Link>
          <Link href={'/news'}className={`mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('news')}</Link>
          <Link href={'/about-us'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('about')}</Link>
          <Link href={'/investors'} className={` mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('investors')}</Link>
          <Link href={'/contacts'} className={`$ mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 `}>{navt('contact')}</Link>
      </nav>
      {/* <nav className="md:hidden flex flex-col  py-4 items-center text-base lg:text-lg justify-center uppercase text-white leading-[24px]">
          <Link href={'/'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('home')}</Link>
          <Link href={'/news'} className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('news')}</Link>
          <Link href={'/about-us'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600`}>{navt('about')}</Link>
          <Link href={'/investors'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('investors')}</Link>
          <Link href={'/contacts'}  className={`py-4 pl-2 w-full rounded uppercase hover:border-b-2 hover:bg-white hover:border-red-900 hover:text-red-900 font-600 `}>{navt('contact')}</Link>
      </nav> */}
    </>
  )
}

export default Navbarlinks