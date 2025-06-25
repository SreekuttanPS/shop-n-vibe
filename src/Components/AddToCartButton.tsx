"use client";
import CartCheckedIcon from "@/assets/svg/CartCheckedIcon";
import CartIcon from "@/assets/svg/CartIcon";
import { Product } from "@/helpers/sharedTypes";
import useCartStore from "@/zustand/cart";
import useToastStore from "@/zustand/toast";
import React from "react";

type Props = {
  product: Product;
  buttonText?: string;
  className?: string;
};

const defaultClassName =
  "text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md bg-primary whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110";

function AddToCartButton({ product, buttonText = "Add to cart", className = defaultClassName }: Props) {
  const addToCart = useCartStore((state) => state?.addToCart);
  const cartData = useCartStore((state) => state?.cart?.cartData?.[product?._id]);
  const toastSuccess = useToastStore((state) => state?.toastSuccess);

  const onAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent the event from bubbling up
    e.preventDefault(); // stops the Link from triggering
    addToCart(product);
    toastSuccess("Successfully added to Cart!");
  };
  return (
    <button className={className} onClick={onAddToCart}>
      <div className="flex items-center gap-2">
        {cartData ? (
          <>
            <CartCheckedIcon /> Add more?
          </>
        ) : (
          <>
            <CartIcon /> {buttonText}
          </>
        )}
      </div>
    </button>
  );
}

export default AddToCartButton;
