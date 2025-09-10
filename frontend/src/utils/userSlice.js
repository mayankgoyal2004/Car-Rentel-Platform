import { createSlice } from "@reduxjs/toolkit";

// Load user from sessionStorage if available
const storedUser = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: storedUser,  // 👈 hydrate state
  reducers: {
    addUser: (state, action) => {
      sessionStorage.setItem("user", JSON.stringify(action.payload)); // 👈 persist
      return action.payload;
    },
    removeUser: () => {
      sessionStorage.removeItem("user"); // 👈 clear
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
