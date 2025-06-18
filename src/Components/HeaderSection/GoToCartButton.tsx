"use client";
import CartIcon from "@/assets/svg/CartIcon";
import useCartStore from "@/zustand/cart";
import Link from "next/link";
import React from "react";

function GoToCartButton() {
  const cartCount = useCartStore((state) => state?.cart.cartCount);

  return (
    <div className="relative">
      <Link href="/cart" className="w-10 h-10 flex items-center justify-center text-gray-500 hover:scale-105 transition-colors">
        <CartIcon />
        {cartCount ? (
          <span className="bg-red-600 absolute top-0 right-0 h-5 w-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        ) : null}
      </Link>
    </div>
  );
}

export default GoToCartButton;
