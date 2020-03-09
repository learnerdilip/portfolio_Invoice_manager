import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

export default function DocumentContainer() {
  // const params = useParams();
  // console.log("params in doc comp", params);
  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  return (
    <div className="thedocumentpage">
      <div className="documentdetails">
        <h2>The Document Details</h2>
        <h5>
          THE NAME OF DOCUMENT:{" "}
          {state.productState.currentProduct.document_name}
        </h5>
        <h5>
          NAME ON INVOICE: {state.productState.currentProduct.name_on_invoice}{" "}
        </h5>
        <h5>DEVICE NAME: {state.productState.currentProduct.device_name} </h5>
        <h5>
          PURCHASE DATE: {state.productState.currentProduct.purchase_date}{" "}
        </h5>
        <h5>
          WARRANTY START DATE:{" "}
          {state.productState.currentProduct.warranty_start_date}{" "}
        </h5>
        <h5>
          WARRANTY END DATE:{" "}
          {state.productState.currentProduct.warranty_end_date}{" "}
        </h5>
      </div>
      <div className="docwarrantyimage">
        <img
          src={state.productState.currentProduct.warranty_doc_image}
          alt={`the ${state.productState.currentProduct.device_name} document`}
        />
      </div>
      {state.productState.currentProduct.other_image && (
        <div className="docwarrantyimage">
          <img
            src={state.productState.currentProduct.other_image}
            alt={`the ${state.productState.currentProduct.device_name} document`}
          />
        </div>
      )}
    </div>
  );
}

// id: 2
// document_name: "car invice"
// name_on_invoice: "nobody"
// device_name: "car"
// purchase_date: "2020-12-31T00:00:00.000Z"
// warranty_start_date: "2020-12-31T00:00:00.000Z"
// warranty_end_date: "2022-01-02T00:00:00.000Z"
// warranty_doc_image: "http://res.cloudinary.com/dq8kqala5/image/upload/v1583480835/oundxbxltmjdfvaozo6k.jpg"
// other_image: ""
// createdAt: "2020-03-06T07:47:19.894Z"
// updatedAt: "2020-03-06T07:47:19.894Z"
// roomId: 2
