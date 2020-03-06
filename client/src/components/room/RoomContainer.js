import React, { useEffect, useState } from "react";
import RoomFormContainer from "./RoomFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/room/action";
import { updateRoomProduct } from "../../store/product/action";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardBody } from "react-bootstrap/Card";

export default function RoomContainer(props) {
  const dispatch = useDispatch();

  const state = useSelector(reduxState => {
    return {
      rooms: reduxState.room.rooms
    };
  });

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const loadRoomProducts = (roomId, room) => {
    dispatch(updateRoomProduct(roomId));
    dispatch({
      type: "UPDATE_CURRENT_ROOM",
      payload: room
    });
  };

  return (
    <div>
      <h2>Welcome to your Home!</h2>
      <RoomFormContainer />
      <div className="theroomslist">
        {state.rooms.length > 0 &&
          state.rooms.map(room => (
            <Card className="roomcards">
              <Card.Body>
                <Link
                  onClick={() => loadRoomProducts(room.id, room)}
                  to={`/room/${room.room_name}`}
                >
                  {" "}
                  <Card.Text>{room.room_name}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
