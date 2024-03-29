import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <div>
      <Image
        src={product?.attributes?.image?.data?.attributes?.url}
        alt="img"
        width={400}
        height={400}
        className="rounded-lg w-[80%] h-[90%] object-cover"
      />
    </div>
  );
};

export default ProductBanner;
