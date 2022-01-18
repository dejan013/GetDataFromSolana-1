import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataControls: ['dasdasd'],
  
};

const dataControls = createSlice({
  name: "dataControls",
  initialState,
  reducers: {
    getDataControls: (state, action) => {
      state.dataControls = action.payload;
    },

  },
});

export const { getDataControls } = dataControls.actions;

export default dataControls.reducer;