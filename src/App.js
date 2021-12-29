import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const id = "26959aad";
  const key = "689cae94065ce2844d3737c778d90916";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana"); // we choose banana by default at the first page

  useEffect(() => {
    getRecipes();
  }, [query]); //

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value); //we put this function to consume data,
    // console.log(search); //so what ever we put in search bar we gonna get that setSearch
  };

  const getSearch = (e) => {
    e.preventDefault(); //Stop page refresh
    setQuery(search); // Get result from query whatever we put in search
    setSearch(""); //Back to empty input every time we excute our request
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
