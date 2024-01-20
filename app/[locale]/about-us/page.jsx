
import { useTranslations } from 'next-intl'
import Link from "next/link";
import React from 'react'


const AboutPage = () => {
  const navt= useTranslations("Navbar")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About Page
      <Link href={'/'} locale='en'>English</Link>
      <Link href={'/'} locale='ru'>Rus</Link>
      <Link href={`/`} locale='uz'>Uz</Link>
      {navt("home")}
      {navt("news")}
      {navt("services")}
      <Link href={'/'}>Home page</Link>
    </main>
  )
}

export default AboutPage