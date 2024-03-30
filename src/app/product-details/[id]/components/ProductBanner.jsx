import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <div>
      {product?.attributes?.image?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          alt="img"
          width={400}
          height={225}
          className="rounded-lg w-[90%] h-[90%] object-cover"
        />
      ) : (
        <div className="w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
