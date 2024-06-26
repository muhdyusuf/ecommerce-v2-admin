import {ReactNode,FC} from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface layoutProps {
    children:ReactNode
}

const layout:FC<layoutProps>=async({children})=>{
    const cookieStore=cookies()
    const supabase=createClient(cookieStore)

    const {data:{session}} = await supabase.auth.getSession()
      
    if (!session) {
        return redirect('/signIn');
    }
    
    
 return(
    <>
        <Navbar />
        {children}
    </>
)}

export default layout