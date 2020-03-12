import axios from "axios";

const baseURL = `http://localhost:4000`;

export const sendSignup = signupData => async dispatch => {
  console.log("the signup data ", signupData);
  const response = await axios.post(`${baseURL}/signup`, signupData);
  dispatch(usersignedup(response.data));
};
const usersignedup = data => {
  console.log("data", data);
  return {
    type: "USER_SIGNEDUP",
    payload: data
  };
};

export const sendLogin = loginData => async dispatch => {
  // console.log("the login data ", loginData);
  const response = await axios.post(`${baseURL}/login`, loginData);
  dispatch(userloggedin(response.data));
};
const userloggedin = data => {
  return {
    type: "USER_LOGGEDIN",
    payload: data
  };
};
