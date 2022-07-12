import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
