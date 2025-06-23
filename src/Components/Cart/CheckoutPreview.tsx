"use client";
import React, { useMemo } from "react";

import useCartStore from "@/zustand/cart";

import CheckoutModal from "@/Components/Checkout/CheckoutModal";

import CreditCardIcon from "@/assets/svg/CreditCardIcon";

const CheckoutPreview = ({ className = "" }: { className?: string }) => {
  const cartData = useCartStore((state) => state?.cart?.cartData);
  const cartCount = useCartStore((state) => state?.cart?.cartCount);

  const totalPrice = useMemo(() => {
    let total = 0;
    Object.values(cartData || {}).forEach((item) => {
      total += (item?.product?.price || 0) * (item?.quantity || 1);
    });
    return total;
  }, [cartData]);

  const subTotal = useMemo(() => totalPrice + totalPrice * (3 / 100), [totalPrice]);

  const shippingCharge = useMemo(() => (subTotal > 50 ? 0 : 40), [subTotal]);

  const estimatedTotal = useMemo(() => Number((subTotal + shippingCharge)?.toFixed(2)), [shippingCharge, subTotal]);

  if (!cartCount) {
    return null;
  }

  return (
    <div className={`${className} md:w-[30%] bg-white shadow-md rounded-xl mx-5 h-fit md:sticky md:top-20 p-4`}>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-lg text-gray-900">{cartCount} Items</div>
          <div className="font-bold text-lg text-gray-400">₹{totalPrice?.toFixed(2)}</div>
        </div>
        <div className="border w-[98%] border-gray-300"></div>
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-lg text-gray-900">Subtotal(With 3% Processing fee.)</div>
          <div className="font-bold text-lg text-gray-900">₹{subTotal?.toFixed(2)}</div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-lg text-gray-400">Shipping</div>
          <div className="font-bold text-lg text-gray-400">{shippingCharge ? `₹${shippingCharge}` : "Free"}</div>
        </div>
        <div className="border w-[98%] border-gray-300"></div>
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-lg text-gray-900">Estimated total</div>
          <div className="font-bold text-lg text-gray-900">₹{estimatedTotal}</div>
        </div>
        <CheckoutModal
          estimatedTotal={estimatedTotal}
          renderCheckoutButton={(onBuyNow, isLoading) => (
            <button
              onClick={onBuyNow}
              className="hidden md:block w-[90%] flex justify-center text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-2">
                <div>
                  <CreditCardIcon />
                </div>
                Buy Now
              </div>
            </button>
          )}
        />
        <CheckoutModal
          estimatedTotal={estimatedTotal}
          renderCheckoutButton={(onBuyNow, isLoading) => (
            <div className="md:hidden relative">
              <button
                onClick={onBuyNow}
                className="fixed bottom-0 right-0 left-0 w-full h-15 flex justify-center text-gray-900 px-4 py-2 font-medium text-sm inset-shadow-sm bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                disabled={isLoading}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <CreditCardIcon />
                  </div>
                  Buy Now
                </div>
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default CheckoutPreview;
