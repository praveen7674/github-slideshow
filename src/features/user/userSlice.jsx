import { createSlice } from "@reduxjs/toolkit";

const initialUserValue = {
  playlist: "",
  username: "",
  password: "",
  playlist_url: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialUserValue },
  reducers: {
    LogIn: (state = initialUserValue, action) => {
      state.value = action.payload;
    },
    LogOut: (state) => {
      state.value = initialUserValue;
    },
  },
});

export const { LogIn, LogOut } = userSlice.actions;

export default userSlice.reducer;
