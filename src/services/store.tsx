import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./ingredient";
import dataReducer from "./reducers/data";
import burgerReducer from "./reducers/burger";
import orderReducer from "./reducers/order";
import profileReducer from "./reducers/profile";
import { combineReducers } from "redux";
import userReducer from "./reducers/token";
const rootReducer = combineReducers({
  userReducer,
  orderReducer,
  burgerReducer,
  dataReducer,
  infoSlice,
  profileReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
