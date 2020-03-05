import React, { useEffect, useState } from "react";
import RoomFormContainer from "./RoomFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/room/action";
import { updateRoomProduct } from "../../store/product/action";
import { Link } from "react-router-dom";

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
      <h2>The ROOM CONTAINER</h2>
      <RoomFormContainer />
      <div>
        {state.rooms.length > 0 &&
          state.rooms.map(room => (
            <Link
              onClick={() => loadRoomProducts(room.id, room)}
              to={`/room/${room.room_name}`}
            >
              <div className="roomcards">{room.room_name}</div>
            </Link>
          ))}
      </div>
    </div>
  );
}
