"use client";

import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Chart from '@/components/Chart';
import Barchart from '@/components/Barchart';
import Table from '@/components/Table';
import { useSession } from 'next-auth/react';

export default function analytics() {

    const { data:session, status } = useSession({
        required: true,
      })

    interface Product {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: Array<string>
    }
    
    interface Response {
        products : Array<Product>,
        total : number,
        skip : number,
        limit : number
    }
    const [data, setData] = useState<Response| undefined>(undefined)

    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        const data: Response = res.data
        console.log(data)
        setData(data)
      }
    
      useEffect(() => {
          fetchdata()
      }, [])

      

    return (
        <div className='flex flex-col md:mx-4 mx-0'>
            <div className='flex lg:flex-row flex-col justify-start gap-4 mb-4'>
                <Chart data={data}/>
                <Barchart data={data}/>
            </div>
            <Table data={data}/>
        </div>
    )
}
