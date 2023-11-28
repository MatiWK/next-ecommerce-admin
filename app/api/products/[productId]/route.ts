import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { productId: string}}
) {
    try {
        if (!params.productId) {
            return new NextResponse("Product id is required", { status: 400});
        }

        const product = await Product.findById(params.productId)
        return NextResponse.json(product)
    } catch (err) {
        console.log('[PRODUCT_GET]', err)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { productId: string }}
) {
    try {
        const body = await req.json();
        const { title, description, price } = body;

        if (!params.productId) return new NextResponse("Product id is required", { status: 400});
            
        if (!title) return new NextResponse("Title is required", {status: 400})
        
        if (!description) return new NextResponse("Description is required", {status: 400})

        if (!price) return new NextResponse("Price is required", {status: 400})

        const product = await Product.updateOne({_id: params.productId}, {title, description, price})
        
        return NextResponse.json(product)
    } catch (err) {
        console.log('[PRODUCT_PATCH]', err)
        return new NextResponse("Internal error", { status: 500 })
    }
}