import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "AuthSliceName",
  initialState: { username: null },
  reducers: {
    LoginUser: (state, action) => { state.username = action.payload },
    LogoutUser: (state) => { state.username = null },
  }
});

export const { LoginUser, LogoutUser } = AuthSlice.actions;
export const selectUsername = (state) => state.AuthSliceName.username;
export default AuthSlice.reducer;