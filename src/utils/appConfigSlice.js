import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    langPreference: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.langPreference = action.payload;
    },
  },
});

export const { changeLanguage } = appConfigSlice.actions;
export default appConfigSlice.reducer;
