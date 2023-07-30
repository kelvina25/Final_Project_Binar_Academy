import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule: [],
  passenger: {},
  filter: [],
};

const searchSlicer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    setSearch: (state, action) => {
      state.filter = action.payload;
    },
    setPassenger: (state, action) => {
      state.passenger = action.payload;
    },
  },
});

export const { setSchedule, setSearch, setPassenger } = searchSlicer.actions;

export default searchSlicer.reducer;
