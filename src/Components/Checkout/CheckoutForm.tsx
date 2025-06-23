import useToastStore from "@/zustand/toast";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FormEvent } from "react";

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();

  const toastError = useToastStore((state) => state?.toastError);
  const toastSuccess = useToastStore((state) => state?.toastSuccess);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (elements && clientSecret) {
        const result = await stripe?.confirmPayment({
          elements,
          confirmParams: {
            return_url: window.location.href, // 👈 give it *something*, doesn't mean it'll redirect
          },
          redirect: "if_required",
        });

        const status = result?.paymentIntent?.status;

        if (status === "succeeded") {
          toastSuccess("Payment succeeded! 🎉");
        }

        if (result?.error) {
          toastError(result.error.message || "Payment failed. Please try again!");
        } else {
          toastSuccess("Payment succeeded!");
        }
      } else {
        toastError("Something went wrong");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toastError(err?.message || "Something went wrong, Please try again!");
    }
  };

  return (
    <div className="w-90 mt-10">
      <form className="bg-[#fefefe] p-6 rounded-2xl shadow-xl space-y-5 border border-zinc-300" onSubmit={handleSubmit}>
        <div className="p-4 h-auto bg-white rounded-xl border border-gray-300 focus-within:ring-2 ring-black transition w-[]">
          {/* <CardElement options={{ style: cardElementStyle }} /> */}
          <PaymentElement />
        </div>

        <button type="submit" className="w-full py-3 bg-black text-white text-lg rounded-xl hover:bg-gray-800 transition">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
