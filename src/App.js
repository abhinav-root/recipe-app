import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <RecipeContainer />
    </Provider>
  );
};

export default App;
