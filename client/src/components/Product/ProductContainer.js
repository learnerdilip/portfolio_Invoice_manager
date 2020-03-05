import React from "react";
import ProductFormContainer from "./ProductFormContainer";
import { useSelector } from "react-redux";

export default function ProductContainer() {
  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });
  return (
    <div>
      <h2>The product container component</h2>
      <p>the product list will appear here later...form is below</p>
      <ProductFormContainer />
    </div>
  );
}
