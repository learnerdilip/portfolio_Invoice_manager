import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendLogin } from "../../store/user/action";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendLogin(loginData));
  };

  return (
    <div>
      <h2>Please Login here!</h2>
      <form onSubmit={handleSubmit}>
        <label>EMAIL*</label>
        <input
          type="email"
          name="email"
          value={setLoginData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <label>PASSWORD*</label>
        <input
          type="text"
          name="password"
          value={setLoginData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginContainer;
