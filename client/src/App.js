import React from "react";
import "./App.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import HomePageContainer from "./components/HomePageContainer";
import LoginContainer from "./components/user/LoginContainer";
import SignupContainer from "./components/user/SignupContainer";
import ProductContainer from "./components/Product/ProductContainer";
import DocumentContainer from "./components/document/DocumentContainer";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Heading />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/room/:room_name" component={ProductContainer} />
        <Route
          path="/room/:room_name/:document_name"
          component={DocumentContainer}
        />
      </Switch>
      <Footer fixed="bottom" />
    </Provider>
  );
}

export default App;
