
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import { notFound } from 'next/navigation'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { NextIntlProvider } from 'next-intl';
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
      <body className={inter.className}>
          {/* <Header /> */}
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
