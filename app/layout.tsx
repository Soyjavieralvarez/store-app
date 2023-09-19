import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from "@/components/navbar"
import Container from "@/components/ui/container"


import './globals.css'

import type { Metadata } from 'next'



const font = Urbanist({
  subsets: ['latin'],
  weight: '600'
})

export const metadata: Metadata = {
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
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
