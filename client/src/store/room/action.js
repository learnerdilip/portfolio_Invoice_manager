import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const createRoom = roomFormData => async (dispatch, getState) => {
  const userToken = getState().user.token;
  const config = { Authorization: `Bearer ${userToken}` };
  const response = await axios.post(`${baseUrl}/room`, roomFormData, {
    headers: config
  });
  dispatch(roomCreated(response.data));
};
const roomCreated = data => {
  return {
    type: "ROOM_CREATED",
    payload: data
  };
};

export const getRooms = () => async (dispatch, getState) => {
  const userToken = getState().user.token;
  const config = { Authorization: `Bearer ${userToken}` };
  const response = await axios.get(`${baseUrl}/rooms`, { headers: config });
  console.log("---the response for rooms fetched----", response);

  dispatch(roomsFetched(response.data));
};
const roomsFetched = rooms => {
  return {
    type: "ROOMS_FETCHED",
    payload: rooms
  };
};
