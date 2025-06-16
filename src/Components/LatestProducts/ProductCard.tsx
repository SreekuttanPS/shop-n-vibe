import CartIcon from "@/assets/svg/CartIcon";
import { Product } from "@/helpers/sharedTypes";
import Image from "next/image";
import React from "react";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
        <div className="product-img h-72 bg-cover bg-center">
          <Image src={product?.imageUrl} alt="Tester" width={300} height={400} />
        </div>
        <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary transition-colors whitespace-nowrap cursor-pointer">
          <div className="flex gap-2">
            <CartIcon /> Quick Add
          </div>
        </button>
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{product?.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-medium">₹{product?.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
