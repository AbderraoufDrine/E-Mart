import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <Link href={`/product-details/${product.id}`}>
      <div className="hover:border p-1 hover:shadow-md rounded-lg border-teal-400 cursor-pointer">
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          alt="banner"
          width={400}
          height={350}
          className="rounded-t-lg h-[200px] w-[100%] object-cover"
        />
        <div className="flex justify-between p-3 items-center bg-gray-50 rounded-t-lg">
          <div>
            <h2 className="text-[12px] font-medium line-clamp-1">
              {product?.attributes?.title}
            </h2>
            <h2 className="text-[10px] text-gray-400 flex gap-1 items-center">
              <List className="w-4 h-4" />
              {product?.attributes?.category}
            </h2>
          </div>
          <h2> {product?.attributes?.price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
