"use client";
import Image from "next/image";

import useCartStore from "@/zustand/cart";
import { capitalizeFirstAndSplit } from "@/helpers/utils";
import RemoveIcon from "@/assets/svg/RemoveIcon";
import { Product } from "@/helpers/sharedTypes";
import useToastStore from "@/zustand/toast";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [showAlert, setShowAlert] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState("");
  const cartData = useCartStore((state) => state?.cart?.cartData);
  const decrementQuantity = useCartStore((state) => state?.decrementProductQuantity);
  const addToCart = useCartStore((state) => state?.addToCart);
  const removeFromCart = useCartStore((state) => state?.removeFromCart);
  const cartDataArray = Object.values(cartData || {});

  const toastSuccess = useToastStore((state) => state?.toastSuccess);
  const toastError = useToastStore((state) => state?.toastError);

  const closeModal = () => {
    setShowAlert(false);
  };

  const onDecrement = (productId: string, count: number) => {
    if (count > 1) {
      toastError("Successfully removed from Cart!");
      decrementQuantity(productId);
    } else {
      setDeletingProduct(productId);
      setShowAlert(true);
    }
  };

  const onIncrement = (product: Product, count: number, stock: number) => {
    if (count >= stock) {
      toastError("Stock limit reached!");
    } else {
      toastSuccess("Successfully added to Cart!");
      addToCart(product);
    }
  };

  const onModalSuccess = (productId: string) => {
    removeFromCart(productId);
    toastSuccess("Successfully removed from Cart!");
    setDeletingProduct("");
    closeModal();
  };

  const onRemoveFromCart = (productId: string) => {
    setDeletingProduct(productId);
    setShowAlert(true);
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center p-4 space-y-4">
      {cartDataArray?.map((cartItem) => (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-4 flex md:flex-row flex-col md:justify-between items-center gap-6" key={cartItem?.product?._id}>
          <Link href={`products/${cartItem?.product?._id}`} className="flex flex-col md:flex-row items-center gap-6">
            <Image src={cartItem?.product?.imageUrl} alt={cartItem?.product?.name} width={150} height={200} className="w-28 h-28 object-contain rounded-lg" />

            <div className="flex flex-col flex-grow md:w-[30%]">
              <h3 className="font-bold text-lg text-gray-900">{cartItem?.product?.name}</h3>
              <p className="text-sm text-gray-500">
                {capitalizeFirstAndSplit(cartItem?.product?.category)}
                <br />
                {cartItem?.product?.rateCount ? `${cartItem?.product?.rateCount} People rated this product` : "No rating available"}
              </p>
            </div>
          </Link>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:w-[40%]">
            <div className="flex items-center justify-between gap-2 text-gray-700 text-lg font-medium md:w-[30%]">
              <button
                onClick={() => onDecrement(cartItem?.product?._id, cartItem.quantity)}
                className="px-2 text-yellow-500 hover:text-yellow-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-200"
              >
                -
              </button>
              <span className="text-black">{cartItem?.quantity}</span>
              <button
                onClick={() => onIncrement(cartItem?.product, cartItem?.quantity, cartItem?.product?.stock)}
                className="px-2 text-yellow-500 hover:text-yellow-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-200"
              >
                +
              </button>
            </div>
            <div className="flex md:flex-row items-center justify-between md:gap-6">
              <div className="text-xl font-bold text-gray-800 whitespace-nowrap">₹{cartItem?.product?.price}</div>
              <button
                onClick={() => onRemoveFromCart(cartItem?.product?._id)}
                className="text-yellow-500 hover:text-yellow-600 text-xl ml-2 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110"
              >
                <RemoveIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      {showAlert ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl transition-all duration-300">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 scale-200 px-2 cursor-pointer" onClick={closeModal}>
              &times;
            </button>
            <div className="py-8">
              <h3 className="font-bold text-lg text-gray-900 text-center">Remove from Cart?</h3>
              <div className="flex justify-center gap-4 mt-8">
                <button className="bg-green-300 rounded-full px-2 py-1 shadow-md cursor-pointer hover:scale-105 hover:bg-green-400" onClick={closeModal}>
                  No, Go back
                </button>
                <button
                  className="bg-red-300 rounded-full px-2 py-1 shadow-md cursor-pointer hover:scale-105 hover:bg-red-400"
                  onClick={() => onModalSuccess(deletingProduct)}
                >
                  Yes, Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
