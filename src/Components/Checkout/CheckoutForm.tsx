import SuccessIcon from "@/assets/svg/Success";
import useCartStore from "@/zustand/cart";
import useToastStore from "@/zustand/toast";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CheckoutForm = ({ clientSecret, closeModal, clearClientSecret }: { clientSecret: string; closeModal: () => void; clearClientSecret: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const router = useRouter();

  const toastError = useToastStore((state) => state?.toastError);
  const toastSuccess = useToastStore((state) => state?.toastSuccess);
  const resetCart = useCartStore((state) => state?.resetCart);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (elements && clientSecret) {
        const result = await stripe?.confirmPayment({
          elements,
          confirmParams: {
            return_url: window.location.href,
          },
          redirect: "if_required",
        });

        const status = result?.paymentIntent?.status;

        if (status === "succeeded") {
          toastSuccess("Payment succeeded! 🎉");
          setIsPaymentSuccess(true);
          setTimeout(() => {
            resetCart();
            clearClientSecret();
            router.push("/");
          }, 10000);
        }

        if (result?.error) {
          toastError(result.error.message || "Payment failed. Please try again!");
          clearClientSecret();
        }
      } else {
        toastError("Something went wrong");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toastError(err?.message || "Something went wrong, Please try again!");
      clearClientSecret();
    }
  };

  const onNavigateToHome = () => {
    resetCart();
    clearClientSecret();
  };

  return (
    <div className="w-90 mt-10 p-2 bg-[#fefefe] rounded-2xl border border-zinc-300 shadow-xl">
      {!isPaymentSuccess ? (
        <form className="p-6 space-y-5 overflow-y-auto max-h-[70vh] custom-scroll" onSubmit={handleSubmit}>
          <div className="w-full flex justify-end mb-0">
            <button className="cursor-pointer" onClick={closeModal}>
              Close
            </button>
          </div>
          <PaymentElement />
          <button
            type="submit"
            className="w-full flex justify-center text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Pay Now
          </button>
        </form>
      ) : (
        <div className="p-6 space-y-5 overflow-y-auto custom-scroll">
          <div className="w-full flex justify-end mb-0">
            <Link href={"/"} className="cursor-pointer" onClick={onNavigateToHome}>
              Stupid Me
            </Link>
          </div>
          <div className="min-h-50 flex flex-col justify-center items-center">
            <SuccessIcon />
            The payment was a success. But You got scammed anyway. Cuz it is a test payment LOL!
            <br />
            You will be redirected to home automatically tho. Hehehehe.
          </div>
          <Link
            href={"/"}
            className="w-full flex justify-center text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            onClick={onNavigateToHome}
          >
            I got Scammed!
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
