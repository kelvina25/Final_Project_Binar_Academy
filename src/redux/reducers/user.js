import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: "",
  email: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetProfile: (state) => {
      state.fullName = "";
      state.phoneNumber = "";
      state.email = "";
    },
  },
});

export const { setFullName, setPhoneNumber, setEmail, resetProfile,} = profileSlice.actions;

export default profileSlice.reducer;
