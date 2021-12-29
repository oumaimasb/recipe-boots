import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import style from "./recipe.module.css";

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className={style.image} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className={style.kcal}>{Math.round(calories)}Kcal</p>
          <ol>
            {ingredients.map((ingredients) => (
              <li>{ingredients.text}</li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
