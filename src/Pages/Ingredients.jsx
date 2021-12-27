import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      <Card.Text>
        <ol>
          {ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
      </Card.Text>
    </div>
  );
};

export default Ingredients;
