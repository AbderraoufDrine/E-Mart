import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React from "react";
import Skelaton from "./Skelaton";

const ProductInfo = ({ product }) => {
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
          <button className="flex gap-2 bg-primary hover:bg-teal-600 p-3 rounded-lg text-white">
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <Skelaton />
      )}
    </div>
  );
};

export default ProductInfo;
