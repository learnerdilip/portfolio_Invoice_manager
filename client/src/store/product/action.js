import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const createProduct = productFormData => async dispatch => {
  console.log("---the product form data sent-----", productFormData);
  const response = await axios.post(`${baseUrl}/product`, productFormData);
  // console.log("product creation response data---", response.data);
  dispatch(productCreated(response.data));
};
const productCreated = data => {
  return {
    type: "PRODUCT_CREATED",
    payload: data
  };
};

export const updateRoomProduct = roomId => async dispatch => {
  const response = await axios.get(`${baseUrl}/products?roomId=${roomId}`);
  dispatch(productsFetched(response.data));
};
const productsFetched = data => {
  return {
    type: "ROOM_PRODUCTS_FETCHED",
    payload: data
  };
};
