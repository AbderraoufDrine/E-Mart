"use client";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import Skelaton from "./Skelaton";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartEndpoint from "../../../../utils/cartEndpoint";
import { CartContext } from "../../../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const handleClick = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullname,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      cartEndpoint
        .addToCart(data)
        .then((res) => {
          console.log(res.data.data);
          setCart((prev) => [
            ...prev,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    toast.success("Added to Cart!");
  };
  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px] mt-5">
            {product?.attributes?.description[0]?.children[0].text}
          </h2>
          <h2 className="flex items-center gap-2 mt-2 text-[11px] text-gray-500">
            {product?.attributes?.instantDelivery ? (
              <>
                <BadgeCheck className="text-green-500 h-5 w-5" />
                Eligible For Instant Delivery
              </>
            ) : (
              <>
                <AlertOctagon />
                Illegible For Instant Delivery
              </>
            )}
          </h2>
          <h2 className="text-[32px] text-primary mt-3">
            ${product?.attributes?.price}
          </h2>
          <button
            className="flex gap-2 bg-primary hover:bg-teal-600 p-3 rounded-lg text-white"
            onClick={handleClick}
          >
            <ShoppingCart />
            Add To Cart
          </button>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                width: 300,
              },
              success: {
                iconTheme: {
                  primary: "#00897B",
                },
              },
            }}
          />
        </div>
      ) : (
        <Skelaton />
      )}
    </div>
  );
};

export default ProductInfo;
