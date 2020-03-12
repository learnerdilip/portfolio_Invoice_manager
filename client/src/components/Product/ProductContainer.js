import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteProduct } from "../../store/product/action";
import ProductForm from "./ProductForm";
import moment from "moment";
import ProductEditForm from "./ProductEditForm";
import { ProgressBar } from "react-bootstrap";
import Card, { CardBody } from "react-bootstrap/Card";

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

  return (
    <div className="productcontainer">
      <h2>YOUR PRODUCTS LIST</h2>
      <div>
        {state.productState.products.length > 0 &&
          state.productState.products.map(product => {
            const maxmoment =
              moment.duration(
                moment(product.warranty_end_date).diff(
                  moment(product.warranty_start_date)
                )
              )._milliseconds /
              (1000 * 60 * 60 * 24);

            const nowmoment =
              moment.duration(
                moment(product.warranty_end_date).diff(new moment())
              )._milliseconds /
              (1000 * 60 * 60 * 24);

            const percentageOver = Math.floor(
              ((maxmoment - nowmoment) * 100) / maxmoment
            );

            return (
              <Card>
                <Card.Body className="productListing">
                  <div className="editdelbuttons">
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "white",
                        boxShadow: "gray 0px 0px 2px"
                      }}
                      onClick={() => {
                        dispatch({
                          type: "UPDATE_CURRENT_PRODUCT",
                          payload: product
                        });
                        handleDelete(product.id);
                      }}
                    >
                      <i class="fa fa-trash"></i>
                    </Button>

                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "white",
                        boxShadow: "gray 0px 0px 2px"
                      }}
                      onClick={() => {
                        dispatch({
                          type: "UPDATE_CURRENT_PRODUCT",
                          payload: product
                        });
                        handleEdit(product.id);
                      }}
                    >
                      <i class="fa fa-edit"></i>
                    </Button>
                  </div>
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
                  <h5
                    style={
                      (nowmoment < 30 && { color: "red" }) ||
                      (nowmoment >= 30 && { color: "green" })
                    }
                    className="warrantydays"
                  >{`Your warranty will expire in ${Math.floor(
                    nowmoment
                  )} days`}</h5>
                  <ProgressBar
                    // max={maxmoment}
                    now={percentageOver}
                    label={`${percentageOver}%`}
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
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <Button className="addButton" onClick={() => seeForm()}>
        <i class="fa fa-plus"></i>
      </Button>
      {editData && <ProductEditForm data={editData} />}
      {form && <ProductForm />}
    </div>
  );
}
