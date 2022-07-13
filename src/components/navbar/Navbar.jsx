import React from "react";
import { Link } from "react-router-dom";
import styling from "./Navbar.module.css";
import image from "../../assets/wedding-dinner.png";
const Navbar = () => {
  return (
    <div>
      <nav className={styling.container}>
        <Link to="/">
          <img
            src={image}
            alt="food"
            style={{ width: "60px" }}
            className={styling.img}
          />
        </Link>
        <div className={styling.inner}>
          <Link to="/about" className={styling.link}>
            About
          </Link>
          <a
            href="https://github.com/birkan-dogan"
            target="_blank"
            className={styling.link}
          >
            GitHub
          </a>
          <Link to="/" className={styling.link}>
            LogOut
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
