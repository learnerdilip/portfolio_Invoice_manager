import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteProduct } from "../../store/product/action";
import ProductForm from "./ProductForm";
import moment from "moment";
import ProductEditForm from "./ProductEditForm";
import { ProgressBar } from "react-bootstrap";

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
  const [editData, setEditData] = useState(null);

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
    const confirmEdit = await window.confirm("You are about to Edit");
    if (confirmEdit) {
      const pdtTochange = state.productState.products.filter(
        prod => prod.id === productId
      );
      // console.log("---the pdt to change---", pdtTochange[0]);
      const editableItem = pdtTochange[0];
      setEditData(editableItem);
    }
  };

  const maxmoment = moment
    .duration(
      moment(state.productState.currentProduct.warranty_end_date).diff(
        moment(state.productState.currentProduct.warranty_start_date)
      )
    )
    .get("days");

  const nowmoment = moment
    .duration(
      moment(state.productState.currentProduct.warranty_end_date).diff(
        new moment()
      )
    )
    .get("days");

  console.log(
    "--the current REDS prod list-----",
    state.productState,
    "AND MAXMOMENT",
    maxmoment,
    "nowMOMENT",
    nowmoment,
    `%age:`,
    Math.floor(((maxmoment - nowmoment) * 100) / maxmoment)
  );
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
                  onClick={() => {
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
                <div className="productdatetext"></div>
                <div>
                  WARRANTY START DATE:
                  {moment(product.warranty_start_date).format("MMMM Do YYYY")}
                </div>
                <div>
                  WARRANTY END DATE:
                  {moment(product.warranty_end_date).format("MMMM Do YYYY")}
                </div>
                <h5 className="warrantydays">{`Your warranty will expire in ${moment
                  .duration(
                    moment(product.warranty_end_date).diff(new moment())
                  )
                  .get("days")} days`}</h5>
                <ProgressBar
                  max="100"
                  now={Math.floor(((maxmoment - nowmoment) * 100) / maxmoment)}
                ></ProgressBar>
                <br />
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
      <Button className="addButton" onClick={() => seeForm()}>
        + PRODUCT
      </Button>
      {editData && <ProductEditForm data={editData} />}
      {form && <ProductForm />}
    </div>
  );
}
