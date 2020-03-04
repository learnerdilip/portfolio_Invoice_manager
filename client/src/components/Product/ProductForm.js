import React, { useState } from "react";

export default function ProductForm() {
  const [productData, setProductData] = useState({
    documentName: "",
    nameOnInvoice: "",
    deviceName: "",
    purchaseDate: null,
    warrantyStartDate: null,
    warrantyEndDate: null,
    warrantyDocument: "",
    miscellaneousImage: ""
  });

  const [loading, setLoading] = useState(false);

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
    productData.warrantyDocument(file.url);
    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProductData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  console.log("-----the State-------", productData);

  return (
    <div>
      <form>
        <label>Document Name</label>
        <input
          type="text"
          placeholder="Document Name"
          name="documentName"
          value={productData.documentName}
          onChange={handleChange}
        />
        <label>Name on Invoice *</label>
        <input
          type="text"
          placeholder="Name on Invoice"
          name="nameOnInvoice"
          value={productData.nameOnInvoice}
          onChange={handleChange}
        />
        <label>Device Name</label>
        <input
          type="text"
          placeholder="The device name"
          name="deviceName"
          value={productData.deviceName}
          onChange={handleChange}
        />
        <label>Purchase Date *</label>
        <input
          type="date"
          name="purchaseDate"
          value={productData.purchaseDate}
          onChange={handleChange}
        />
        <label>warranty start date *</label>
        <input
          type="date"
          name="warrantyStartDate"
          value={productData.warrantyStartDate}
          onChange={handleChange}
        />
        <label>warranty end date *</label>
        <input
          type="date"
          name="warranty_end_date"
          value={productData.warrantyEndDate}
          onChange={handleChange}
        />
        <label>warranty Document Image to be stored *</label>
        <input
          type="file"
          name="warranty_document_image"
          onChange={handleFileSelect}
        />{" "}
        {loading && <h5>Loading...</h5>}
        <label>Any other associated image</label>
        <input type="file" name="other_image" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
