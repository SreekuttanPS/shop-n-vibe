"use client";

import { ReactNode, useState } from "react";

import CheckoutForm from "@/Components/Checkout/CheckoutForm";
import useToastStore from "@/zustand/toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
  renderCheckoutButton: (onClick: () => void, isLoading: boolean) => ReactNode;
  estimatedTotal: number;
};

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;
const stripePublishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(stripePublishable || "");

export default function CheckoutModal({ renderCheckoutButton, estimatedTotal }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const toastError = useToastStore((state) => state?.toastError);

  const onCheckout = () => {
    setIsOpen(true);
    setIsLoading(true);
    fetch(`${baseUrl}/api/payments/create-payment-intent`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ amount: estimatedTotal }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response?.clientSecret) {
          setClientSecret(response?.clientSecret);
        } else {
          toastError("Error occured, Please try again!");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toastError(err?.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {renderCheckoutButton(onCheckout, isLoading)}

      {isOpen && (
        <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
          {isLoading ? (
            <div className="w-90 mt-10">
              <div className="bg-[#fefefe] p-6 rounded-2xl shadow-xl space-y-5 border border-zinc-300">
                <div className="p-4 h-auto bg-white rounded-xl border border-gray-300 focus-within:ring-2 ring-black transition">Loading...</div>
              </div>
            </div>
          ) : null}
          {!isLoading && clientSecret ? (
            <Elements stripe={stripePromise || ""} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          ) : null}
        </div>
      )}
    </>
  );
}
