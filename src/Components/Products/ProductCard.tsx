import React from "react";
import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "@/Components/AddToCartButton";

import { Product } from "@/helpers/sharedTypes";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product?._id}`} className="product-card group max-w-[300px] mx-auto">
      <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
        <div className="product-img h-72 bg-cover bg-center">
          <Image src={product?.imageUrl} alt={product?.name} width={300} height={400} />
        </div>
        <div className="w-full flex justify-center mb-3">
          <AddToCartButton
            product={product}
            className="text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md bg-white whitespace-nowrap cursor-pointer translate-y-2 duration-[0.3s] ease-out opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{product?.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-medium">₹{product?.price}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
