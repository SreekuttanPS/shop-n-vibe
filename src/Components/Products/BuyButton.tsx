"use client";

import React from "react";
import Link from "next/link";

import { Product } from "@/helpers/sharedTypes";

import useCartStore from "@/zustand/cart";

import CreditCardIcon from "@/assets/svg/CreditCardIcon";

const BuyButton = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state?.addToCart);

  const onAddToCart = () => {
    addToCart(product);
  };

  return (
    <Link
      href={"/cart"}
      className="text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      onClick={onAddToCart}
    >
      <div className="flex items-center gap-2">
        <div>
          <CreditCardIcon />
        </div>
        Buy Now
      </div>
    </Link>
  );
};

export default BuyButton;
