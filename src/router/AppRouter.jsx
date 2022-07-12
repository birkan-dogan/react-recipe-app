import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
