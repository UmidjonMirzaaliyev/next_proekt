import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight:['400' , '500'],
   subsets: ['latin'] })

export const metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header/>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
