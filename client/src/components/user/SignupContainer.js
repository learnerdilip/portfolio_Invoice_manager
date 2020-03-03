import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendSignup } from "../../store/user/action";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    country: "",
    name: "",
    phone: 0
  });

  // useEffect(() => {
  //  dispatch(signupData(signupData));
  // },[])
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
  };

  // const state = useSelector(state => state.userState);
  // console.log("the state", signupData);
  return (
    <div>
      <h2>Please SignUp here!</h2>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={signupData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <label>PASSWORD</label>
        <input
          type="text"
          name="password"
          value={signupData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={signupData.name}
          placeholder="Password"
          onChange={handleChange}
        />
        <label>COUNTRY</label>
        <input
          type="text"
          name="country"
          value={signupData.country}
          placeholder="Password"
          onChange={handleChange}
        />
        <label>PHONE</label>
        <input
          type="phone"
          name="phone"
          value={signupData.phone}
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignupContainer;
