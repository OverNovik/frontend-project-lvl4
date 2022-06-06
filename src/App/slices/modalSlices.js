import { createSlice } from "@reduxjs/toolkit";

const modalSlices = createSlice({
  name: 'modal',
  initialState: {},
  reducers: {
    changeStatus: (state, { payload: status }) => {
      state.status = status;
    },
    updateItem: (state, { payload: item }) => {
      state.item = item;
    }
  }
})
export const { changeStatus, updateItem } = modalSlices.actions;
export default modalSlices.reducer;