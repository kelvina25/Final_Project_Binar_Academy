import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airport: [],
  class: [],
  destinationFav: [],
};

const homeSlicer = createSlice({
  name: "home",
  initialState,
  reducers: {
    setAirport: (state, action) => {
      state.airport = action.payload;
    },

    setClass: (state, action) => {
      state.class = action.payload;
    },
    setDestinationFav: (state, action) => {
      state.destinationFav = action.payload;
    },
  },
});

export const { setDestinationFav, setClass, setAirport } = homeSlicer.actions;


export default homeSlicer.reducer;
