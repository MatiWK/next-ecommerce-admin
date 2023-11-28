import { Schema, model, models } from "mongoose";

export interface TypeProduct {
    _id?: string,
    title: string,
    description: string,
    price: number
}

const ProductSchema = new Schema<TypeProduct>({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
});


export const Product = models.Product<TypeProduct> || model<TypeProduct>('Product', ProductSchema);
