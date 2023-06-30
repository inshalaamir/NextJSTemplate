"use client";

import Link from 'next/link'
import React from 'react'
import {RxDashboard} from "react-icons/rx"
import {RiLineChartLine} from "react-icons/ri"
import { useGlobalContext } from '@/app/context/store'

interface Props {
    children?: React.ReactNode
}


export default function Sidebar({children}: Props) {
    
    const {page, setPage} = useGlobalContext()

    const changePage = (page:string) => {
        setPage(page)
    }

  return (
    <div className='flex'>
        <div className='fixed w-20 h-full p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link onClick={()=> changePage('Dashboard')} href="/">
                    {page=="Dashboard"? 
                    <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                        <RxDashboard size={20}/>
                    </div>
                    :
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                        <RxDashboard size={20}/>
                    </div>
                    }                   
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 mb-4'></span>

                <Link onClick={()=> changePage('Analytics')} href="/analytics">
                    {page=="Analytics"?
                    <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                        <RiLineChartLine size={20}/>
                    </div>
                    :
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
                        <RiLineChartLine size={20}/>
                    </div>
                    }
                </Link>
            </div>
        </div>

        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}
