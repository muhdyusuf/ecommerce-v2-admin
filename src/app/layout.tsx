import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase=createServerComponentClient({cookies})
    const {data:{session}}=await supabase.auth.getSession()

    if(!session){
        redirect("/signIn")
    }
    
  return (
    <html lang="en">
      <body className='dark'>{children}</body>
    </html>
  )
}
