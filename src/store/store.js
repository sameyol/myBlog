import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginUserReducer, registerUserReducer } from "../reducers/userReducer";

const store = configureStore({
    reducer: {
      registerUserReducer: registerUserReducer,
      loginUserReducer: loginUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling the serializableCheck middleware to work with DevTools
    }),
    // devTools: true,
    // enhancers: [composeWithDevTools()]
    // preloadedState: {
    //   loginUserReducer: { // Correct reducer name
    //     currentUser: currentUser,
    //   },
    // },
  });

export default store;