import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_REQUEST_SUCCESS,
  FETCH_RECIPES_REQUEST_FAILURE,
} from "./recipeTypes";

const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_APP_KEY;

export const getRecipes = (keyword) => {
  return (disptach) => {
    disptach(fetchRecipesRequest());
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${appId}&app_key=${appKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        disptach(fetchRecipesRequestSuccess(json.hits));
      })
      .catch((error) => {
        disptach(fetchRecipesRequestFailure(error.msg));
      });
  };
};

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST,
  };
};

export const fetchRecipesRequestSuccess = (data) => {
  return {
    type: FETCH_RECIPES_REQUEST_SUCCESS,
    payload: data,
  };
};

export const fetchRecipesRequestFailure = (error) => {
  return {
    type: FETCH_RECIPES_REQUEST_FAILURE,
    payload: error,
  };
};
