import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    names: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.gptMovies = movieResults;
      state.names = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
