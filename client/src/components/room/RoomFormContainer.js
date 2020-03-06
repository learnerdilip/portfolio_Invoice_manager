import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../store/room/action";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    <div className="roomform">
      <Form onSubmit={handleSubmit}>
        <Form.Label>ROOM NAME*</Form.Label>
        <Form.Control
          type="text"
          name="roomName"
          value={roomData.roomName}
          onChange={handleChange}
        />
        <Button variant="warning" type="submit">
          Enter
        </Button>
      </Form>
    </div>
  );
}
