import CartListing from "@/Components/Cart/CartListing";
import CheckoutPreview from "@/Components/Cart/CheckoutPreview";

export default function Cart() {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <CheckoutPreview className="md:hidden" />
      <CartListing />
      <CheckoutPreview className="hidden md:block" />
    </div>
  );
}
