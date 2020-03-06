import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/product/action";
import { Form } from "react-bootstrap";

export default function ProductForm() {
  const dispatch = useDispatch();
  const state = useSelector(reduxState => {
    return {
      roomState: reduxState.room
    };
  });

  const [productData, setProductData] = useState({
    documentName: "",
    nameOnInvoice: "",
    deviceName: "",
    purchaseDate: null,
    warrantyStartDate: null,
    warrantyEndDate: null,
    warrantyDocument: "",
    miscellaneousImage: "",
    roomId: state.roomState.currentRoom.id
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProduct(productData));
  };

  const handleFileSelect = async e => {
    setLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mhn12bb3");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dq8kqala5/image/upload`,
      { method: "POST", body: data }
    );
    const file = await res.json();
    setProductData(prevState => {
      return { ...prevState, warrantyDocument: file.url };
    });
    // productData.warrantyDocument(file.url);
    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProductData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="userform">
      <Form onSubmit={handleSubmit}>
        <Form.Label>Document Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Document Name"
          name="documentName"
          value={productData.documentName}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Name on Invoice *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name on Invoice"
          name="nameOnInvoice"
          value={productData.nameOnInvoice}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Device Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="The device name"
          name="deviceName"
          value={productData.deviceName}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Purchase Date *</Form.Label>
        <Form.Control
          type="date"
          name="purchaseDate"
          value={productData.purchaseDate}
          onChange={handleChange}
        />
        <br />
        <Form.Label>warranty start date *</Form.Label>
        <Form.Control
          type="date"
          name="warrantyStartDate"
          value={productData.warrantyStartDate}
          onChange={handleChange}
        />
        <br />
        <Form.Label>warranty end date *</Form.Label>
        <Form.Control
          type="date"
          name="warrantyEndDate"
          value={productData.warrantyEndDate}
          onChange={handleChange}
        />
        <br />
        <Form.Label>warranty Document Image to be stored *</Form.Label>
        <Form.Control
          type="file"
          name="warranty_document_image"
          onChange={handleFileSelect}
        />{" "}
        <br />
        {loading && <h5>Loading...</h5>}
        <Form.Label>Any other associated image</Form.Label>
        <Form.Control type="file" name="other_image" />
        <br />
        <button type="submit">SUBMIT</button>
      </Form>
    </div>
  );
}
