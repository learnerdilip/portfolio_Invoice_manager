import React, { useEffect } from "react";
import ProductFormContainer from "./ProductFormContainer";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/product/action";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductContainer() {
  const params = useParams();
  console.log("THESE ARE THE PARAMS", params);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  // console.log("--the product state---", state.productState);

  return (
    <div className="productcontainer">
      <h2>The product container component</h2>
      <div>
        {state.productState.products.length > 0 &&
          state.productState.products.map(product => {
            return (
              <div>
                <h4>{product.document_name}</h4>
                <h6>{product.warranty_start_date}</h6>
                <h6>{product.warranty_end_date}</h6>
              </div>
            );
          })}
      </div>
      <ProductFormContainer />
    </div>
  );
}
