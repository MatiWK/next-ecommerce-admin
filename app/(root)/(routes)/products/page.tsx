
import { Product, TypeProduct } from '@/models/product'
import Link from 'next/link'
import ProductTable from './components/product-table';

const Products = async () => {
  const products = await Product.find({}) as TypeProduct[];
  const formatData = JSON.parse(JSON.stringify(products))

  return (
    <div>
      <Link 
      className=' bg-black hover:bg-slate-600  transition-all text-white  px-4 py-2 rounded-lg ' 
      href={'/products/new'}
      >
        Add new product
      </Link>
      <ProductTable data={formatData} />
    </div>
  )
}

export default Products
