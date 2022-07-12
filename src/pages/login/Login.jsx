import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import image from "../../assets/meal2.svg";
import styling from "./Login.module.css";
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    setIsAuthenticated(true);
  };
  if (isAuthenticated) {
    return <Outlet />;
  }
  return (
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
