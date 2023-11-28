"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

 

const NewProduct = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('0');

  const router = useRouter();

  const handlePrice = (e:  React.ChangeEvent<HTMLInputElement>) => {
    let numAsString = e.target.value

    if (numAsString[0] === "0" && numAsString.length > 1) {
      return setPrice(numAsString.slice(1))
    } else if (numAsString.length === 0) {
      return setPrice("0")
    }
    setPrice(numAsString)
  }

  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {title, description, price}
        await axios.post(`/api/product`, data)
        router.refresh();
        router.push(`/products`)
        toast.success("Product Added")
    } catch (err) {
      toast.error("Something went wrong.");
    } 
  }

  
  return (
    <form onSubmit={createProduct}>
      <div>
          <h1>New Product</h1>
          <div>
            <label>Product Name</label>
            <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            value={title}
            placeholder='product name'/>
          </div>
          <div>
            <label>Product Name</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            placeholder='description'/>
          </div>
          <div>
            <label>Price (in USD)</label>
            <input
            type='number'
            value={price}
            onChange={handlePrice}
            placeholder='price'/>
          </div>
          <button  type="submit" className='btn'>Save</button>
      </div>
    </form>
  )
}

export default NewProduct
