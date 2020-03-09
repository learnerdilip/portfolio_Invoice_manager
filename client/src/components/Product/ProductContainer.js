import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteProduct } from "../../store/product/action";
import ProductForm from "./ProductForm";
import Moment from "react-moment";

export default function ProductContainer() {
  const params = useParams(); // used to get params from the App.js where Route was defined
  // console.log("the params", params);
  const dispatch = useDispatch();

  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  const [form, setForm] = useState(false);

  const seeForm = () => {
    setForm(!form);
  };

  const handleDelete = productId => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete productID: ${productId}`
    );
    if (confirmDelete) {
      dispatch(deleteProduct(productId));
    }
  };

  const handleEdit = async productId => {
    const confirmEdit = window.confirm("You are about to Edit");
    if (confirmEdit) {
      // console.log("----product in state--", state.productState.currentProduct);
    }
  };

  return (
    <div className="productcontainer">
      <h2>YOUR PRODUCTS LIST</h2>
      <div>
        {state.productState.products.length > 0 &&
          state.productState.products.map(product => (
            <div>
              <div className="productListing">
                <Button
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_CURRENT_PRODUCT",
                      payload: product
                    });
                    handleDelete(product.id);
                  }}
                >
                  x
                </Button>
                <Button
                  onClick={async () => {
                    dispatch({
                      type: "UPDATE_CURRENT_PRODUCT",
                      payload: product
                    });
                    handleEdit(product.id);
                  }}
                >
                  EDIT
                </Button>
                <h4>{product.device_name}</h4>
                <div className="productdatetext">WARRANTY START DATE:</div>
                <Moment format="YYYY-MM-DD">
                  {product.warranty_start_date}
                </Moment>
                <div>WARRANTY END DATE:</div>
                <Moment format="YYYY-MM-DD">{product.warranty_end_date}</Moment>
                <h5 className="warrantydays">{`Your warranty will expire in ${product.daysRemaining} Days`}</h5>
                <Button>
                  <Link
                    to={`room/${params.room_name}/${product.document_name}`}
                    onClick={async () => {
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
      <Button className="addButton" onClick={() => seeForm()}>
        +
      </Button>
      {form && <ProductForm data={state.productState.currentProduct} />}
    </div>
  );
}
