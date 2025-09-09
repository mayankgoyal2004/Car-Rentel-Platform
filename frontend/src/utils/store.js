import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";


const Store = configureStore({
  reducer: {
    user: UserReducer,
    
  },
});

export default Store;
