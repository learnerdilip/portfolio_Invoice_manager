import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ExpiringProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch();
  }, []);
  const state = useSelector(reduxState => {
    return {
      expiringProductsList: reduxState.room.expiringProductIds
    };
  });

  if (!state.expiringProductsList)
    return (
      <div>
        <h3>
          You currently have no warranty expiring products due in next 30 days!{" "}
        </h3>
      </div>
    );
  return (
    <div className="expiringproductdashboard">
      <h3>The product IDs for expiring warranty are:</h3>
      <ul>
        {state.expiringProductsList.map(item => (
          <li>
            ITEM ID: {item.productID} has {item.warrantyLeft} days left for
            expiration
          </li>
        ))}
      </ul>
    </div>
  );
}

/***
 * things I need:
 * 1. product name,
 * 2. room name
 * **/
