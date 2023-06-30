"use client";

import React, {useState} from 'react'
import Card from './Card';
import Modal from './Modal';


const Cards = ({products}:any) => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState()

    const openModal = (modalData:any) => {
        setModalData(modalData)
        setIsOpen(true)
    }
    return(
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 p-4'>

            {products?.map((product:any) => 
                <Card key={product.id} openModal={openModal} product={product}/>
            )}

            <Modal open={isOpen} onClose={()=> setIsOpen(false)} data={modalData}/>
            
        </div>
    )
}

export default Cards;