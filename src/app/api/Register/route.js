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

  return NextResponse.json(product);
}