import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spinner: false,
};

const controls = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSpinner: (state, action) => {
      state.spinner = action.payload;
    },
  },
});

export const { setSpinner } = controls.actions;

export default controls.reducer;
