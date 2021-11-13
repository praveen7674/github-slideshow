// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   password: "password",
//   play_url: "play_url",

//   initialState: {
//     user: null,
//     Password: null,
//     Play_url: null,
//   },

//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//       state.Password = action.payload;
//       state.Play_url = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.Password = null;
//       state.Play_url = null;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => state.user.user;
// export const selectPlay_url = (state) => state.play_url.play_url;
// export const selectPassword = (state) => state.password.password;
// export default userSlice.reducer;
