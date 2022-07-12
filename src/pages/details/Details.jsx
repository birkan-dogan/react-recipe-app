import React from "react";
import { useNavigate } from "react-router-dom";
import styling from "./Details.module.css";

const Details = ({ foodList }) => {
  const navigate = useNavigate();
  console.log(foodList);
  return (
    <div className={styling.container1}>
      {foodList?.map((food, index) => {
        const {
          recipe: { image, label },
        } = food;
        return (
          <div key={index} className={styling.inner}>
            <img src={image} alt={label} className={styling.images} />
            <h1 className={styling.h1}>{label}</h1>
            <button
              className={styling.btn}
              onClick={() => navigate(`/details/${index}`)}
            >
              View More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
