import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from "@/components/navbar"

import ModalProvider from '@/providers/modal-provider'

import './globals.css'





const font = Urbanist({
  subsets: ['latin'],
  weight: '600'
})

export const metadata = {
  title: 'Store',
  description: 'Store by Javier Álvarez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
