import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signin = ({ setLoginUser }) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signin = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:5000/signin", user).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          setLoginUser(res.data.user);
          window.location.href = "/Profile";
        } else {
          alert(res.data.message);
          window.location.href = "/Profile";
        }
      });
    }
  };  

  return (
    <>
      <div className="Signin w-2/4 m-auto rounded-3xl mt-7">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl ml-8 mt-7">Signin</h1>
        </div>
        <div className="flex gap-2 mt-12 justify-center items-center">
          <img className="w-10" srcSet={Logo} alt="Logo"></img>
          <h1 className="text-3xl font-bold">CipherSchools</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-medium text-2xl mt-4">Hey, Welcome!</h1>
          <h3 className="text-lg">
            Please provide your email and password to signin
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center">
          <input
            className="p-4 w-3/4 rounded-xl bg-gray mt-12"
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="Email ID"
            onChange={handleChange}
          ></input>
          <input
            className="p-4 w-3/4 rounded-xl bg-gray mt-4"
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          ></input>
        </div>
        <ul className="flex justify-end mr-20 mt-2">
          <li className="text-orange text-lg mr-2">
            <a href="">Forgot Password ?</a>
          </li>
        </ul>
        <div className="flex justify-center ">
          <button
            className="bg-orange text-white font-medium rounded-xl p-3 w-3/4 mt-4"
            onClick={signin}
          >
            Signin
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <h3 className="text-lg">Don't have an account ?</h3>
          <a className="text-orange text-lg " href="/Signup">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Signin;
