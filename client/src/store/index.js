import { combineReducers } from "redux";
import user from "./user/reducer";
import product from "./product/reducer";
import room from "./room/reducer";

export default combineReducers({
  // your reducers will go here
  user,
  room,
  product
});
