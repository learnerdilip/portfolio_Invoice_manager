import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendSignup } from "../../store/user/action";
import { Form, Button } from "react-bootstrap";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    country: "",
    name: "",
    phone: 0
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

  return (
    <div>
      <h2>Please SignUp here!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={signupData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default SignupContainer;
