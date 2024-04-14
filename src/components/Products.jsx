"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import productEndpoint from "../utils/productEndpoint";

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
    <div className="px-10 md: md-20" id="prod">
      <h2 className="text-xl my-4">Our Latest Products</h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
