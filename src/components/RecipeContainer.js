import React from "react";
import { useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import RecipeCard from "./RecipeCard";
import { Container, Row, Col } from "react-bootstrap";

const RecipeContainer = () => {
  const data = useSelector((state) => state.recipe);
  return (
    <Container>
      <h1 className="display-4 text-secondary text-uppercase text-center mb-5">
        find your favorite recipes
      </h1>
      {data.loading ? (
        <h1 className="text-center">
          <ScaleLoader loading color="#F5A623" size="20" />
        </h1>
      ) : data.recipes.length > 1 ? (
        <Container>
          <Row className="my-auto g-5">
            {data.recipes.map(function (recipe) {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  key={recipe.recipe.label + recipe.recipe.calories}
                >
                  <RecipeCard data={recipe.recipe} />
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
      )}
    </Container>
  );
};

export default RecipeContainer;
