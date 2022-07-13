import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import RecipeCard from "../pages/home/RecipeCard";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/details/recipecard" element={<RecipeCard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
