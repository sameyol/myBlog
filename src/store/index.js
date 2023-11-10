import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools({
  // Specify options if needed
});

const store = configureStore({
  reducer: {
    user: userReducer,
    // Other reducers can be added here if applicable
  },
  middleware: [...getDefaultMiddleware(), /* Add your custom middleware here */],
  enhancers: [composedEnhancers],
});

export default store;
