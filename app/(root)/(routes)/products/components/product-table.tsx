"use client"

import { TypeProduct } from '@/models/product'
import { Edit, Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ProductTableProps {
    data: TypeProduct[]
}

const ProductTable: React.FC<ProductTableProps> = ({
    data
}) => {


  return (
      <table className='w-full mt-5 text-xl rounded-md overflow-hidden' >
        <thead>
          <tr className='font-bold bg-blue-300 border border-black ' >
            <td className='py-2'>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {data.map(product => (
            <tr className='' 
            key={product._id}>
              <td className='border-b border-r border-l py-2'>{product.title}</td>
              <td className='border-b border-r border-l'>
                <Link 
                className=' inline-flex gap-2 bg-black text-white py-1 px-3 mx-2 rounded-lg hover:bg-slate-600 transition-all' 
                href={`/products/edit/${product._id}`}>
                  <Edit />
                   Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
  )
}

export default ProductTable
