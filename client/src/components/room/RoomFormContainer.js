import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../store/room/action";

export default function RoomFormContainer() {
  const dispatch = useDispatch();
  const [roomData, setRoomData] = useState({ roomName: "" });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createRoom(roomData));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setRoomData({ [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ROOM NAME*</label>
        <input
          type="text"
          name="roomName"
          value={roomData.roomName}
          onChange={handleChange}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
