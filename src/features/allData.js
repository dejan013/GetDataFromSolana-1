import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nftData: "",
  creatorsAccountData: [],
  accountTransactionsHistory: [],
};

const allData = createSlice({
  name: "nft",
  initialState,
  reducers: {
    getNftData: (state, action) => {
      state.nftData = action.payload;
    },
    getCreatorsAccountData: (state, action) => {
      state.creatorsAccountData = action.payload;
    },
    getAccountTransactionsHistory: (state, action) => {
      state.accountTransactionsHistory = action.payload;
    },
  },
});

export const { getNftData, getCreatorsAccountData, getAccountTransactionsHistory } = allData.actions;

export default allData.reducer;
