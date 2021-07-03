import { combineReducers } from "redux";
import recipeReducer from "./recipe/recipeReducer";

const rootRedcuer = combineReducers({
  recipe: recipeReducer,
});

export default rootRedcuer;
