import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./pages/characters/filterSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
