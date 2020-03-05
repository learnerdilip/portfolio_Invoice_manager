import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const createRoom = roomFormData => async dispatch => {
  const response = await axios.post(`${baseUrl}/room`, roomFormData);
  dispatch(roomCreated(response.data));
};
const roomCreated = data => {
  return {
    type: "ROOM_CREATED",
    payload: data
  };
};

export const getRooms = () => async dispatch => {
  const response = await axios.get(`${baseUrl}/rooms`);
  dispatch(roomsFetched(response.data));
};
const roomsFetched = rooms => {
  return {
    type: "ROOMS_FETCHED",
    payload: rooms
  };
};
