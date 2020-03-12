import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const createProduct = productFormData => async (dispatch, getState) => {
  const userToken = getState().user.token;
  const config = { Authorization: `Bearer ${userToken}` };
  const response = await axios.post(`${baseUrl}/product`, productFormData, {
    headers: config
  });
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
  console.log("the products received-----", response);
  dispatch(productsFetched(response.data));
};
const productsFetched = data => {
  return {
    type: "ROOM_PRODUCTS_FETCHED",
    payload: data
  };
};

export const deleteProduct = productId => async dispatch => {
  const response = await axios.delete(
    `${baseUrl}/product?productId=${productId}`
  );
  // console.log("--the delete respose-----", response.data);
  dispatch(updateDeletedProduct(response.data));
};
const updateDeletedProduct = data => {
  return {
    type: "UPDATE_DELETED_PRODUCT",
    payload: data
  };
};

export const updateProductDetails = productEdit => async dispatch => {
  // console.log("the  data to be edited", productEdit);
  const response = await axios.put(`${baseUrl}/product`, productEdit);
  console.log("the response aftger edit", response.data);
  dispatch({
    type: "UPDATE_EDIT_PRODUCT",
    payload: response.data
  });
};
