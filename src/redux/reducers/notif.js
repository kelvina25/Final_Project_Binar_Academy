import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifs: [],
};

const notifSlicer = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotif: (state, action) => {
      state.notifs = action.payload;
    },
  },
});

export const { setNotif } = notifSlicer.actions;

export default notifSlicer.reducer;
