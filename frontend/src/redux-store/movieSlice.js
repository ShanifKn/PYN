import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    details: {},
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.details[action.payload.data.id] = action.payload;
    },
  },
});

export const { setMovies, setMovieDetails } = movieSlice.actions;

// * actions *//
export const getMovies = () => async (dispatch) => {
  try {
    const response = await api.get("/");
    const data = response.data.data.results;
    dispatch(setMovies(data));
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetails = (id) => async (dispatch, getState) => {
  const state = getState();
  const movie = state.movies.details[id];

  // * if movie is already exist then return *//
  if (movie) {
    return;
  }

  try {
    const response = await api.get(`/movie/${id}`);
    const data = response.data;
    dispatch(setMovieDetails(data));
  } catch (error) {
    console.log(error);
  }
};

export default movieSlice.reducer;
