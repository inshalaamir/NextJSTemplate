import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, {useState} from 'react'

export default function Modal({open, onClose, data}:any){


    

    return(
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open? "visible bg-black/20": "invisible"}`}>
            
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all
            ${open? "scale-100 opacity-100": "scale-125 opacity-0"}`}>
            
            <div>
                <img src={data?.images[0]}></img>
            </div>
            <div>
                <p className='text-left font-semibold text-lg'>{data?.title}</p>
                <p>${data?.price}</p>
                <div className='max-w-[400px]'>{data?.description}</div>
            </div>

            </div>

        </div>
    )
}