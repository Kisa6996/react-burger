import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../services/ingredient";
import dataReducer from "./reducers/data";
import burgerReducer from "./reducers/burger";
import orderReducer from "./reducers/order";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  orderReducer,
  burgerReducer,
  dataReducer,
  infoSlice,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
