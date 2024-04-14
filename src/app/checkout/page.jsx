"use client";
import React, { Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

const Checkout = () => {
  const searchParams = useSearchParams();
  const options = {
    mode: "payment",
    currency: "cad",
    amount: Number(searchParams.get("amount")) * 100,
  };

  return (
    <Suspense>
      <Elements stripe={stripePromise} options={options}>
        <Suspense>
          <CheckoutForm amount={Number(searchParams.get("amount"))} />
        </Suspense>
      </Elements>
    </Suspense>
  );
};

export default Checkout;
