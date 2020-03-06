import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/index";
import ReduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, enhancer); // replace by the below line for local storage
// const store = createStore(reducer, enhancer);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
