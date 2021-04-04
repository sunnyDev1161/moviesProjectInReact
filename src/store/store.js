import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "../reducers/index";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootreducer,
  applyMiddleware(...middleware)
  // compose(
  //   applyMiddleware(...middleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
export default store;
