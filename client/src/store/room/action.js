import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const createRoom = roomFormData => async dispatch => {
  const response = await axios.post(`${baseUrl}/room`, roomFormData);
  console.log("room creation response data---", response.data);
  dispatch(roomCreated(response.data));
};
const roomCreated = data => {
  return {
    type: "ROOM_CREATED",
    payload: data
  };
};
