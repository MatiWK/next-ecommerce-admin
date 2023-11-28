"use client";

import { TypeProduct } from "@/models/product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface EditProductProps {
  data: TypeProduct;
}
const EditProduct: React.FC<EditProductProps> = ({ data }) => {
  const [title, setTitle] = useState<string>(data.title);
  const [description, setDescription] = useState<string>(data.description);
  const [price, setPrice] = useState<string>(String(data.price));
  const router = useRouter();
  const params = useParams();

  const handlePrice = (e:  React.ChangeEvent<HTMLInputElement>) => {
    let numAsString = e.target.value

    if (numAsString[0] === "0" && numAsString.length > 1) {
      return setPrice(numAsString.slice(1))
    } else if (numAsString.length === 0) {
      return setPrice("0")
    }
    setPrice(numAsString)
  }

  const updateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {title, description, price};
      const response = await axios.patch(`/api/products/${params.productId}`, data)
      const updatedData = response.data;
      router.refresh();
      router.push(`/products`)
      toast.success(updatedData.title)
    } catch (err) {
      toast.error("Something went wrong")
    } 
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div>
          <h1>Editing {data.title}</h1>
          <div>
            <label>Product Name</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              placeholder="product name"
            />
          </div>
          <div>
            <label>Product Name</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="description"
            />
          </div>
          <div>
            <label>Price (in USD)</label>
            <input
              type="number"
              value={price}
              onChange={handlePrice}
              placeholder="price"
            />
          </div>
          <button type="submit" className="btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
