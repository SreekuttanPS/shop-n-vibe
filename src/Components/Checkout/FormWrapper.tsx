"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_...");

const FormWrapper = ({}) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default FormWrapper;
