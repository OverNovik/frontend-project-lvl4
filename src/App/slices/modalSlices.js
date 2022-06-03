import { createSlice } from "@reduxjs/toolkit";

const modalSlices = createSlice({
  name: 'modal',
  initialState: {},
  reducers: {
    temporary: (state) => {
      console.log(state);
    }
  }
})
export const { temporary } = modalSlices.actions;
export default modalSlices.reducer;