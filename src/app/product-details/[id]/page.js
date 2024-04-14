"use client";
import BreadCrumps from "../../../components/BreadCumps";
import productEndpoint from "../../../utils/productEndpoint";
import React, { useEffect, useState } from "react";
import ProductBanner from "./components/ProductBanner";
import ProductInfo from "./components/ProductInfo";
import ProductList from "../../../components/ProductList";
import { usePathname } from "next/navigation";

const ProductDetails = ({ params }) => {
  const path = usePathname();
  const [product, setProduct] = useState({});
  const [similar, setSimilar] = useState([]);

  const getSimilarProducts = (product) => {
    productEndpoint
      .getProductByCategory(product?.attributes.category)
      .then((res) => {
        setSimilar(res.data.data);
      });
  };

  const returnProduct = () => {
    productEndpoint.getProduct(params?.id).then((res) => {
      setProduct(res.data.data);
      getSimilarProducts(res.data.data);
    });
  };

  useEffect(() => {
    returnProduct();
  }, [params?.id]);

  return (
    <div className="px-10 md:px-28 py-8 mt-20 md:mt-0">
      <BreadCrumps path={path} />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0 justify-around">
        <ProductBanner product={product} />
        <ProductInfo product={product} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
        <ProductList productList={similar} />
      </div>
    </div>
  );
};

export default ProductDetails;
