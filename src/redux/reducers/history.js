import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historys: [],
  historyDetails: null,
};

const historySlicer = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.historys = action.payload;
    },
    setHistoryDetails: (state, action) => {
      state.historyDetails = action.payload;
    },
  },
});

export const { setHistory, setHistoryDetails } = historySlicer.actions;

export default historySlicer.reducer;
