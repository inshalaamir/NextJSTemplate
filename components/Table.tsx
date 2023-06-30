import React from 'react'

export default function Table({data}:any) {
  return (
    <div className='w-full bg-white p-4 overflow-auto'>
        <h1 className="text-xl mb-2">Inventory</h1>
        <table>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Title</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Brand</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Stock</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {
                data?.products.map((product:any)=>{
                    return(
                    <tr key={product.id}>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.title}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.description}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.price}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.category}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.brand}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'>{product.stock}</td>
                        <td className='p-3 md:text-sm text-xs text-gray-700'><img className='w-20 h-20' src={product.thumbnail}></img></td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}
