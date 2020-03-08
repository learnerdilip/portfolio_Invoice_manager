import React, { useEffect } from "react";
import ProductFormContainer from "./ProductFormContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteProduct } from "../../store/product/action";

export default function ProductContainer() {
  const params = useParams(); // used to get params from the App.js where Route was defined
  // console.log("the params", params);

  const dispatch = useDispatch();

  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  const handleDelete = productId => {
    console.log("the product to be deleted:", productId);
    dispatch(deleteProduct(productId));
  };

  const handleEdit = productId => {
    console.log("the pdt to edit----", productId);
  };

  return (
    <div className="productcontainer">
      <h2>The product container component</h2>
      <div>
        {state.productState.products.length > 0 &&
          state.productState.products.map(product => (
            <div>
              <div className="productListing">
                <Button onClick={() => handleDelete(product.id)}>x</Button>
                <Button onClick={() => handleEdit(product.id)}>EDIT</Button>
                <h4>{product.device_name}</h4>
                <h6>{product.warranty_start_date}</h6>
                <h6>{product.warranty_end_date}</h6>
                <Button>
                  <Link
                    to={`room/${params.room_name}/${product.document_name}`}
                    onClick={() => {
                      dispatch({
                        type: "UPDATE_CURRENT_PRODUCT",
                        payload: product
                      });
                    }}
                  >
                    OPEN
                  </Link>
                </Button>
              </div>
            </div>
          ))}
      </div>
      <ProductFormContainer />
    </div>
  );
}
