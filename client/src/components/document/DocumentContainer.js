import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// import { useParams } from "react-router-dom";

export default function DocumentContainer() {
  // const params = useParams();
  // console.log("params in doc comp", params);
  const state = useSelector(reduxState => {
    return {
      productState: reduxState.product
    };
  });

  const {
    document_name,
    name_on_invoice,
    device_name,
    purchase_date,
    warranty_start_date,
    warranty_end_date,
    warranty_doc_image,
    other_image
  } = state.productState.currentProduct;

  return (
    <div className="thedocumentpage">
      <div className="documentdetails">
        <h2>The Document Details</h2>
        <h5>
          THE NAME OF DOCUMENT: <i>{document_name}</i>
        </h5>
        <h5>
          NAME ON INVOICE: <i>{name_on_invoice}</i>{" "}
        </h5>
        <h5>
          DEVICE NAME: <i>{device_name}</i>{" "}
        </h5>
        <h5>
          PURCHASE DATE: <i>{moment(purchase_date).format("MMMM Do YYYY")}</i>{" "}
        </h5>
        <h5>
          WARRANTY START DATE:{" "}
          <i>{moment(warranty_start_date).format("MMMM Do YYYY")} </i>
        </h5>
        <h5>
          WARRANTY END DATE:{" "}
          <i>{moment(warranty_end_date).format("MMMM Do YYYY")} </i>
        </h5>
      </div>
      <div className="docwarrantyimage">
        <img src={warranty_doc_image} alt={`the ${device_name} document`} />
      </div>
      {other_image && (
        <div className="docwarrantyimage">
          <img src={other_image} alt={`the ${device_name} document`} />
        </div>
      )}
    </div>
  );
}
