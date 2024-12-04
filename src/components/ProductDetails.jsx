import React from "react";
import ProductCard from "./ProductCard";

const ProductDetails = (props) => {
  return (
    <div>
      <ProductCard productData={props.productData} />
    </div>
  );
};

export default ProductDetails;
