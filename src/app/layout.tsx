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
  title: 'Jérémie Helme - Fullstack developer',
  description: 'I help Startups and Agencies build exceptional digital products',
  keywords: ['developer', 'fullstack', 'Vue', 'React', 'React Native', 'france'],
  authors: [{ name: 'Jérémie' }, { name: 'Helme', url: 'https://jeremiehelme.fr' }],
  openGraph: {
    images: ['../assets/og-image.jpg'],
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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id=
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        {children}
      </body>
    </html>
  )
}
