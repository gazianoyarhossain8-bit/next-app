import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET() {
  await dbConnect();

  const products = await Product.find();

  return NextResponse.json(products);
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  const product = await Product.create(body);

  return NextResponse.json({
    success: true,
    product,
  });

}

export async function DELETE(req) {
  await dbConnect();

  const { id } = await req.json();

  await Product.findByIdAndDelete(id);

  return NextResponse.json({
    success: true,
    message: "Product Deleted",
  });
}