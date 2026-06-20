"use client";
import { useState } from "react";
import Link from "next/link";


async function getProducts() {
  const[products, setPrducts] = useState([]);
  const res = await fetch(
    "https://fakestoreapi.com/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        All Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
          >
            <div className="h-full cursor-pointer rounded-lg border p-4 shadow-sm transition hover:shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto h-40 w-full object-contain"
                />

              <h3 className="mt-4 line-clamp-2 font-semibold">
                {product.title}
              </h3>

              <p className="mt-2 text-lg font-bold text-green-600">
                ${product.price}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {product.category}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {product.description.length > 100
                  ? product.description.substring(0, 100) + "..."
                  : product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}