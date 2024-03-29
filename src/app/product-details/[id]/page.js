"use client";
import productEndpoint from "@/utils/productEndpoint";
import React, { useEffect } from "react";

const ProductDetails = ({ params }) => {
  useEffect(() => {
    const returnProduct = () => {
      productEndpoint.getProduct(params?.id).then((res) => {
        console.log(res.data.data);
      });
    };
    returnProduct();
  }, [params?.id]);
  return <div>{params?.id}</div>;
};

export default ProductDetails;
