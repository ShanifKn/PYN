import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

// * redux Configuration *//
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
