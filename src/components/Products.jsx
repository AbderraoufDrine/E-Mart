"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import productEndpoint from "@/utils/productEndpoint";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const getLatestProducts = () => {
    productEndpoint.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };
  useEffect(() => {
    getLatestProducts();
  }, []);
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
