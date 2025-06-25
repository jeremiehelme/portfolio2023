import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import GoogleAnalytics from "@/components/GoogleAnalytics";


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



const roboto = Roboto({ weight: ['300', '500'], subsets: ['latin'], variable: '--font-roboto' })


export const metadata: Metadata = {
  title: 'Jérémie Helme - Fullstack Developer | Web & Mobile Apps',
  description: 'Experienced fullstack developer helping startups and agencies transform ideas into market-ready digital solutions. Specializing in Vue, React, and React Native development.',
  keywords: ['fullstack developer', 'web development', 'mobile apps', 'Vue.js', 'React', 'React Native', 'startup development', 'agency developer', 'freelance developer', 'france'],
  authors: [{ name: 'Jérémie' }, { name: 'Helme', url: 'https://jeremiehelme.fr' }],
  openGraph: {
    images: ['/og-image.jpg'],
    title: 'Jérémie Helme - Fullstack Developer',
    description: 'Transform your ideas into market-ready digital solutions with 15+ years of development expertise.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${karlaBold.variable} ${roboto.variable}`}>
      <body >

        <GoogleAnalytics ga_id="G-T3QQTKEVP7" />


        {children}
      </body>
    </html>
  )
}
