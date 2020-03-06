import React, { useEffect } from "react";
import ProductFormContainer from "./ProductFormContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function ProductContainer() {
  const params = useParams(); // used to get params from the App.js where Route was defined
  // console.log("the params", params);

  const dispatch = useDispatch();

  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  return (
    <div className="productcontainer">
      <h2>The product container component</h2>
      <div>
        {state.productState.products.length > 0 &&
          state.productState.products.map(product => (
            <Link to={`/${params.room_name}/${product.document_name}`}>
              <div className="productListing">
                <h4>{product.device_name}</h4>
                <h6>{product.warranty_start_date}</h6>
                <h6>{product.warranty_end_date}</h6>
              </div>
            </Link>
          ))}
      </div>
      <ProductFormContainer />
    </div>
  );
}
