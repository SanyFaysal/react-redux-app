import { applyMiddleware, createStore } from "redux";
import bookingReducer from "./booking/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  bookingReducer,
  composeWithDevTools(applyMiddleware())
);
