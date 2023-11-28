import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        
        const products = await Product.find({});
        return NextResponse.json(products)
    } catch (err) {
        console.log('[PRODUCTS_GET]', err)
        return new NextResponse("Internal error", {status: 500})
    }
}