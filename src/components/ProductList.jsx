import React from "react";
import SingleProduct from "./SingleProduct";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {productList.map((item) => (
        <div key={item.id}>
          <SingleProduct product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
