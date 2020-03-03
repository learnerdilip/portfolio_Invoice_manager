import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import HomePageContainer from "./components/HomePageContainer";
import LoginContainer from "./components/user/LoginContainer";
import SignupContainer from "./components/user/SignupContainer";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </Provider>
  );
}

export default App;
