import { createSlice } from "@reduxjs/toolkit";

const chatSlices = createSlice({
  name: 'Chat',
  initialState: [],
  reducers: {
    temporary: (state, action) => {
      state = action.payload;
    }
  }
})

export const { temporary } = chatSlices.actions;
export default chatSlices.reducer;