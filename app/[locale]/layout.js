
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import { notFound } from 'next/navigation'
import Navbar from '../[locale]/components/navbar'
import Sidebar from '../[locale]/components/sidebar'
import Navbarlinks from '../[locale]/components/navbarlinks'
import Homelink from './components/homelink'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Imkon Finans',
  description: 'Mikrokredit tashkiloti',
}

const locales = ['en', 'ru', 'uz', 'uzk'];

export default function RootLayout({
  children,
  params: { locale },
}) {

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} >
      <body className={openSans.className}>
          {/* <Header /> */}
          
          <Navbar>
            <Navbarlinks/>
            <Homelink/>
          </Navbar>
          <Sidebar/>
          {children}
      </body>
    </html>
  )
}
