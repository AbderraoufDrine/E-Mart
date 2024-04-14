import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Suspense, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useUser } from "@clerk/nextjs";
import orderEndpoint from "../../../utils/orderEndpoint";
import cartEndpoint from "../../../utils/cartEndpoint";
const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();

  const createOrder = () => {
    let productIds = [];
    cart.forEach((prod) => {
      productIds.push(prod?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };
    orderEndpoint.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((prod) => {
          cartEndpoint.deleteCartItem(prod?.id).then((res) => {});
        });
      }
    });
  };
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    createOrder();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/confirmed",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <Suspense>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="w-[80%]md: w-[40%] mt-12">
          <PaymentElement />
          <button className="w-full p-2 mt-4 text-white rounded-md bg-primary">
            Submit
          </button>
        </div>
      </form>
    </Suspense>
  );
};

export default CheckoutForm;
