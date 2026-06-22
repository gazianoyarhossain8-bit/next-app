"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        "https://next-iwup4q14m-anoyars-projects.vercel.app/api/products"
      );

      const data = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);

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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}