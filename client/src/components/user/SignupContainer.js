import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendSignup } from "../../store/user/action";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    country: "",
    name: "",
    phone: 0
  });
  // console.log("the signup state--", signupData);

  const state = useSelector(reduxState => {
    return {
      userState: reduxState.user
    };
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setSignupData(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendSignup(signupData));
    setSignupData({
      email: "",
      password: "",
      country: "",
      name: "",
      phone: 0
    });
  };

  if (state.userState.newUser)
    return (
      <div className="loginhomeredirect">
        <h2>You are registered now!</h2>
        <Link to="/">GO TO HOME</Link>
        <br />
        <Link to="/login">GO TO LOGIN</Link>
      </div>
    );
  return (
    <div>
      <h2>Please SignUp here!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={signupData.email}
            placeholder="Your email"
            onChange={handleChange}
          />{" "}
        </Form.Group>
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control
          type="text"
          name="password"
          value={signupData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Form.Label>NAME</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={signupData.name}
          placeholder="Password"
          onChange={handleChange}
        />
        <Form.Label>COUNTRY</Form.Label>
        <Form.Control
          type="text"
          name="country"
          value={signupData.country}
          placeholder="Password"
          onChange={handleChange}
        />
        <Form.Label>PHONE</Form.Label>
        <Form.Control
          type="phone"
          name="phone"
          value={signupData.phone}
          placeholder="Password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignupContainer;
