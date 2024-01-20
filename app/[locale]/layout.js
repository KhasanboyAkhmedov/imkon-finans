
import { Inter } from 'next/font/google'
import './globals.css'
import { notFound } from 'next/navigation'
import { Header } from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Developer',
  description: 'Desenvolvedor Web Frontend em Recife - Pernambuco',
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
          <Header />
          {children}
      </body>
    </html>
  )
}
