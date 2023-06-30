"use client";

import FilterBar from '@/components/FilterBar';
import axios from 'axios';
import { AnyNaptrRecord } from 'dns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards"

export default function Page() {

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

  interface Ifiltered {
    products: Array<Product>
  }

  const [data, setData] = useState<Response| undefined>(undefined)
  const [filtered, setFiltered] = useState<Product[]| undefined>(undefined)

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    const data: Response = res.data
    console.log(data)
    setData(data)
    setFiltered(data.products)
  }

  useEffect(() => {
    if (status==="authenticated"){
      fetchdata()
    }
  }, [status])

  const filterData = (category:string, brand:string) => {
    let fil
    if(category=="all" && brand=="all"){
      fil = data?.products
    }
    else if(category!=="all" && brand!=="all"){
      fil = data?.products?.filter((product)=> {
        return product.category==category && product.brand==brand
      })
    }
    else if(category!=="all" && brand=="all"){
      fil = data?.products?.filter((product)=> {
        return product.category==category
      })
    }
    else if(category=="all" && brand!=="all"){
      fil = data?.products?.filter((product)=> {
        return product.brand==brand
      })
    }
    else{
      fil = data?.products
    }
    setFiltered(fil)
  }

  return (
    <div className='w-full'>
      <FilterBar filterFunc={filterData}/>
      <Cards products={filtered}/>
    </div>
  )
}
