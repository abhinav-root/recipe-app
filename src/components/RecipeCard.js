import React from "react";
import { Card, Alert, Badge } from "react-bootstrap";

const RecipeCard = ({ data }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="shadow p-1">
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.label}</Card.Title>
          <Card.Text className="text-secondary">
            <p>
              <span className="text-body">Cuisine </span>
              <span className="fst-italic text-capitalize">
                {data.cuisineType}
              </span>
            </p>
            <p>
              <span className="text-body">Calories </span>
              <span className="fst-italic text-capitalize">
                {Math.round(data.calories)} KCAL
              </span>
            </p>
            <p>
              <span className="text-body">Meal Type </span>
              <span className="fst-italic text-capitalize">
                {data.mealType}
              </span>
            </p>
            <p>
              <span className="text-body">Dish Type </span>
              <span className="fst-italic text-capitalize">
                {data.dishType}
              </span>
            </p>
            <div>
              <h5 className="text-warning text-center">Ingredients</h5>
              <Alert variant="warning" className="fs-6">
                <ul>
                  {data.ingredientLines.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
              </Alert>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
