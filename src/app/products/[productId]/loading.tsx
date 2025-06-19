import CartIcon from "@/assets/svg/CartIcon";
import CreditCardIcon from "@/assets/svg/CreditCardIcon";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-6">
        <div className="w-60 h-80 bg-gray-200"></div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-12  hidden md:block h-8 w-50 bg-gray-200"></h2>
          <div className="mt-3 font-medium text-gray-900 w-35 h-6 bg-gray-200"></div>
          <div className="flex flex-row gap-4 mt-5">
            <button className="flex flex-row item-center justify-center gap-2 text-gray-200 px-4 py-2 rounded-full font-medium text-sm shadow-md bg-primary whitespace-nowrap cursor-wait">
              <CartIcon /> Add to cart
            </button>
            <button className="text-gray-200 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-wait">
              <div className="flex items-center gap-2">
                <div>
                  <CreditCardIcon />
                </div>
                Buy Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
