"use client"
import { locales } from "@/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"


export const ActiveMobileLink = ({href, children}) => {
    const router = useRouter()
    console.log(router);
    const locales =  ['en', 'ru', 'uz', 'uzk'];
    const pathname = usePathname()
    console.log(pathname);
    const isActive = router == pathname.includes(href)
  return (
    <>
    <Link href={href} className={`${isActive ? 'mr-5 border-b-2 border-red-900 text-red-900 ': 'mr-5 hover:border-b-2 hover:border-red-900 hover:text-red-900 '}  `}>{children}</Link>
    </>
  )
}
