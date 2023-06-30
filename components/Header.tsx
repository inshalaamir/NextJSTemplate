"use client"; 
import React, { useEffect } from 'react'
import { signOut } from "next-auth/react"
import { useGlobalContext } from '@/app/context/store';
import { usePathname } from 'next/navigation';

export default function Header() {
    const {page, setPage} = useGlobalContext()

    const pathname = usePathname()
    
    const checkPath = () => {
        if(pathname && pathname.includes("analytics")){
        setPage("Analytics")
        }
    }
    useEffect(()=>{
        checkPath()
    },[])
  return (
    <div className='flex justify-between px-4 pt-4 bg-purple-600 pb-4 mb-4'>
        <h2>{page}</h2>
        <button onClick={() => signOut()}>Signout</button>

    </div>
  )
}
