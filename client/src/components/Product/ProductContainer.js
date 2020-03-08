import React, { useEffect } from "react";
import ProductFormContainer from "./ProductFormContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteProduct } from "../../store/product/action";
import { Alert } from "react-bootstrap";

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
    const confirmDelete = window.confirm(
      `Are you sure you want to delete productID: ${productId}`
    );
    if (confirmDelete) {
      dispatch(deleteProduct(productId));
    }
  };

  const handleEdit = productId => {
    console.log("the pdt to edit----", productId);
    const confirmEdit = window.confirm("You are about to Edit");
    if (confirmEdit) {
      //
    }
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
