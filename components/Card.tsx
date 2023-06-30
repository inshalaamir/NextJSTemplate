import React from 'react'
import Image from 'next/image'

export default function Card({product, openModal}:any) {
  return (
    <div >
        <div onClick={()=>openModal(product)} className=' cursor-pointer col-span-1 bg-white flex flex-col justify-between w-full p-4 h-full rounded-lg'>
            <div className='flex w-full pb-2 h-40 md:h-32 lg:h-40'>
                <img src={product.thumbnail} className='object-fill'/>
            </div>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-xl font-bold'>{product?.title}</p>
                <p className='text-gray-600'>${product?.price}</p>
            </div>
        </div>
    </div>
  )
}
