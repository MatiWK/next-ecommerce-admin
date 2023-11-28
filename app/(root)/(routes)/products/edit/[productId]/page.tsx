import { Product } from '@/models/product'
import React from 'react'
import EditProduct from './components/edit-product'

const Edit = async ({
  params
}: {
  params: { productId: string }
}) => {

  const product = await Product.findById(params.productId)

  return (
    <div>
      <EditProduct data={product} />
    </div>
  )
}

export default Edit
