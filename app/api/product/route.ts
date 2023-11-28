import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();
        const {title, description, price} = body;

        if (!title) return new NextResponse("Title is required", {status: 400})

        if (!description) return new NextResponse("Description is required", {status: 400})
        
        if (!price) return new NextResponse("Price is required", {status: 400})

        const product = await Product.create({
            title, 
            description, 
            price
        });
        
        return NextResponse.json(product)
    } catch (err) {
        console.log('[PRODUCT_POST]', err)
        return new NextResponse("Internal error", {status: 500});
    }
}