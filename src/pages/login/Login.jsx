import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import image from "../../assets/meal2.svg";
import Navbar from "../../components/navbar/Navbar";
import styling from "./Login.module.css";
const Login = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    setShowNav(true);
  };

  return showNav ? (
    <Outlet />
  ) : (
    <div className={styling.container}>
      <div>
        <img src={image} alt="login" className={styling.img} />
        <h1>`B1rkan` Recipe</h1>
        <form className={styling.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="UserName" className={styling.input} />
          <input
            type="password"
            placeholder="PassWord"
            className={styling.input}
          />
          <button className={styling.btn} onClick={handleClick}>
            LogIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
