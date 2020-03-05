import React, { useEffect, useState } from "react";
import RoomFormContainer from "./RoomFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/room/action";
import { Redirect } from "react-router";
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

  return (
    <div>
      <h2>The ROOM CONTAINER</h2>
      <RoomFormContainer />
      <div>
        {console.log("the state inside room cntr--", state.rooms)}
        {state.rooms.length > 0 &&
          state.rooms.map(room => (
            <Link to={`/room/${room.room_name}`}>
              <div className="roomcards">{room.room_name}</div>
            </Link>
          ))}
      </div>
    </div>
  );
}
