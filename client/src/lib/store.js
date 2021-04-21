import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";

import homeReducer, {
  initialSate as homeInitialState,
} from "./home/homeReducer";

const initialState = {
  home: homeInitialState,
};

export const configureStore = () => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const rootReducer = combineReducers({
    home: homeReducer,
  });

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return store;
};
