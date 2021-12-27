import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Ingredients from "../Pages/Ingredients";
import style from "../recipe.module.css";

const Recipe = ({ title, image, calories }) => {
  return (
    <Router>
      <div className={style.recipe}>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={style.image} variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p className={style.kcal}>{Math.round(calories)}Kcal</p>
            <div className="btn">
              <Link className={style.button} to="/Ingredients">
                Ingredients
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Switch>
          <Route path="/Ingredients">
            <Ingredients />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Recipe;

// <Button.Link as={Link} to={"/Ingredients"}>
// Ingredients
// </Button.Link>
