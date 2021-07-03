import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootRedcuer from "./rootReducer";

const store = createStore(rootRedcuer, applyMiddleware(logger, thunk));

export default store;
