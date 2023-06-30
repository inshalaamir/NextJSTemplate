import React, { useState } from 'react'

export default function ({filterFunc}: any) {

    const [category, setCategory] = useState("All")
    const [brand, setBrand] = useState("All")

    const handleCategory = (e: any) => {
        setCategory(e.target.value);
    };

    const handleBrand = (e:any) => {
        setBrand(e.target.value)
    }
    
  return (
    <div className='p-4 mx-4 bg-white flex flex-col md:flex-row'>
        
        <div className="md:w-1/3 w-100 px-2">
            <select value={category} onChange={handleCategory} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value="all">All</option>
                <option value="smartphones">Smart Phones</option>
                <option value="laptops">Laptops</option>
                <option value="fragrances">Fragrances</option>
                <option value="skincare">Skincare</option>
                <option value="groceries">Groceries</option>
                <option value="home-decoration">Home Decoration</option>
            </select>
        </div>

        <div className="md:w-1/3 w-100 px-2">
            <select value={brand} onChange={handleBrand} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value="all">All</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="OPPO">OPPO</option>
                <option value="Huawei">Huawei</option>
                <option value="Microsoft surface">Microsoft surface</option>
                <option value="Infinix">Infinix</option>
                <option value="HP Pavilion">HP Pavilion</option>
                <option value="Impression of Acqua Di Gio">Acqua Di Gio</option>
                <option value="Royal_Mirage">Royal Mirage</option>
                <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
                <option value="Al Munakh">Al Munakh</option>
                <option value="L'Oreal Paris">L'Oreal Paris</option>
                <option value="Hemani Tea">Hemani Tea</option>
                <option value="Dermive">Dermive</option>
                <option value="Saaf & Khaas">Saaf & Khaas</option>
                <option value="Bake Parlor Big">Bake Parlor</option>
                <option value="Baking Food Items">Baking Food Items</option>
                <option value="Fauji">Fauji</option>
                <option value="Boho Decor">Boho Decor</option>
                <option value="Flying Wooden">Flying Wooden</option>
                <option value="luxury palace">Luxury Palace</option>

            </select>
        </div>

        <button onClick={()=>filterFunc(category,brand)} className="md:w-1/3 w-100 bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
            Filter
        </button>
       
    </div>
  )
}
