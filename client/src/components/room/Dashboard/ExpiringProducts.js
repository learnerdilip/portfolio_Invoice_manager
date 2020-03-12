import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

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

  // console.log("the length--------", state.expiringProductsList);

  if (!state.expiringProductsList.length)
    return (
      <div>
        <h3>
          You currently have no warranty expiring products due in next 30 days!{" "}
        </h3>
      </div>
    );
  return (
    <Card className="expiringproductdashboard">
      <h3>The products with expiring warranty are:</h3>
      <ul>
        {state.expiringProductsList.map(item => (
          <h5 className="expirationwarning">
            Your <b>{item.deviceName}</b> has{" "}
            <b style={{ color: "orange" }}>{item.warrantyLeft} days</b> left for
            expiration
          </h5>
        ))}
      </ul>
    </Card>
  );
}
