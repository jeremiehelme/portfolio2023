import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const karlaBold = localFont({
  variable: '--font-karla',
  src: [
    {
      path: '../assets/fonts/karla/Karla-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/karla/Karla-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})



const roboto = Roboto({ weight: ['300','500'], subsets: ['latin'], variable: '--font-roboto' })


export const metadata: Metadata = {
  title: 'Jeremie Helme - front-end developer',
  description: 'Jeremie Helme - front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${karlaBold.variable} ${roboto.variable}`}>
      <body >{children}</body>
    </html>
  )
}
