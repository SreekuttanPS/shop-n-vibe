"use client";
import Image from "next/image";

import useCartStore from "@/zustand/store";
import { capitalizeFirstAndSplit } from "@/helpers/utils";
import RemoveIcon from "@/assets/svg/RemoveIcon";

export default function Cart() {
  const cartData = useCartStore((state) => state?.cart?.cartData);
  const cartDataArray = Object.values(cartData || {});

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 space-y-4">
      {cartDataArray?.map((cartItem) => (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-4 flex md:flex-row flex-col md:justify-between items-center gap-6" key={cartItem?.product?._id}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image src={cartItem?.product?.imageUrl} alt={cartItem?.product?.name} width={150} height={200} className="w-28 h-28 object-contain rounded-lg" />

            <div className="flex flex-col flex-grow md:w-[30%]">
              <h3 className="font-bold text-lg text-gray-900">{cartItem?.product?.name}</h3>
              <p className="text-sm text-gray-500">
                {capitalizeFirstAndSplit(cartItem?.product?.category)}
                <br />
                {cartItem?.product?.rateCount ? `${cartItem?.product?.rateCount} People rated this product` : "No rating available"}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:w-[40%]">
            <div className="flex items-center justify-between gap-2 text-gray-700 text-lg font-medium md:w-[30%]">
              <button className="px-2 text-yellow-500 hover:text-yellow-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-200">-</button>
              <span className="text-black">{cartItem?.quantity}</span>
              <button className="px-2 text-yellow-500 hover:text-yellow-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-200">+</button>
            </div>
            <div className="flex md:flex-row items-center justify-between md:gap-6">
              <div className="text-xl font-bold text-gray-800 whitespace-nowrap">₹{cartItem?.product?.price}</div>
              <button className="text-yellow-500 hover:text-yellow-600 text-xl ml-2 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110">
                <RemoveIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
