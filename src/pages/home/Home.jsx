import React, { useState } from "react";
import styling from "./Home.module.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");
  const [foodList, setFoodList] = useState([]);
  // console.log(search, drop);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const fetchData = () => {
    fetch(`
    https://api.edamam.com/search?q=${search}&app_id=05ffca8e&app_key=e8a3992fdde40b759ecdb5d9c39147a4&mealType=${drop}
    `)
      .then((res) => res.json())
      .then((data) => setFoodList(data.hits));
    // console.log(foodList);
  };
  return (
    <div>
      <div className={styling.container}>
        <h1>Food App</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search"
              className={styling.input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              name="meal"
              className={styling.drop}
              onClick={(e) => setDrop(e.target.value)}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="teatime">TeaTime</option>
            </select>
            <button className={styling.btn} onClick={fetchData}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
