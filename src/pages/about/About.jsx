import React from "react";
import image from "../../assets/coding.svg";
import styling from "./About.module.css";

const About = () => {
  return (
    <div className={styling.container}>
      <img src={image} alt="coding" className={styling.img} />
      <h1>
        About Software Developer <span className={styling.span}>Birkan</span>
      </h1>
      <div className={styling.inner}>
        I'm Birkan. <br /> I'm currently learning Full-Stack Development
        Languages. <br />
        I've already known HTML, CSS, JS, ReactJS ,SQLite, Python. <br />
        <a href="mailto: b.561birkan@gmail.com" className={styling.mail}>
          Send email
        </a>{" "}
        :b.561birkan@gmail.com
      </div>
    </div>
  );
};

export default About;
