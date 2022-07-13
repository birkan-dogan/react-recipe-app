import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styling from "./RecipeCard.module.css";
import image from "../../assets/diet.svg";
const RecipeCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const foodList = location.state;
  const { recipe } = foodList;
  // console.log(recipe);
  const [card, setCard] = useState({
    label: "food",
    image: "",
    ingredientLines: [],
  });
  useEffect(() => {
    setCard({
      ...card,
      label: recipe.label,
      image: recipe.image,
      ingredientLines: recipe.ingredientLines,
      totalNutrients: recipe.totalNutrients,
    });
  }, []);

  return (
    <div>
      <div className={styling.container}>
        <div className={styling.headerContainer}>
          <h1 className={styling.h1}>{card.label}</h1>
          <div>
            <img src={image} alt="diet" className={styling.img} />
          </div>
        </div>
        <div className={styling.ingredients}>
          <div>
            <h1>Nutrients</h1>
            <ul className={styling.nutrients}>
              <li>
                {card.totalNutrients?.CA?.label}:
                {Math.ceil(card.totalNutrients?.CA?.quantity)}
                {card.totalNutrients?.CA?.unit}
                {/* {(label, quantity, unit)} */}
              </li>
              <li>
                {card.totalNutrients?.CHOCDF?.label}:
                {Math.ceil(card.totalNutrients?.CHOCDF?.quantity)}
                {card.totalNutrients?.CHOCDF?.unit}
              </li>
              <li>
                {card.totalNutrients?.CHOLE?.label}:
                {Math.ceil(card.totalNutrients?.CHOLE?.quantity)}
                {card.totalNutrients?.CHOLE?.unit}
              </li>
              <li>
                {card.totalNutrients?.ENERC_KCAL?.label}:
                {Math.ceil(card.totalNutrients?.ENERC_KCAL?.quantity)}
                {card.totalNutrients?.ENERC_KCAL?.unit}
              </li>
              <li>Calories:{card.calories?.value}</li>
              <li>
                {card.totalNutrients?.PROCNT?.label}:
                {Math.ceil(card.totalNutrients?.PROCNT?.quantity)}
                {card.totalNutrients?.PROCNT?.unit}
              </li>
              <li>
                {card.totalNutrients?.FAT?.label}:
                {Math.ceil(card.totalNutrients?.FAT?.quantity)}
                {card.totalNutrients?.FAT?.unit}
              </li>
            </ul>
          </div>
          <img src={card.image} alt={card.label} />
          <ul className={styling.list}>
            {card.ingredientLines?.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
