import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {},
  reducers: {
    changeValue: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeValue } = filterSlice.actions;

export default filterSlice.reducer;
