import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    info: null,
  },
  reducers: {
    addInfo(state, action) {
      state.info = action.payload;
    },
    removeInfo(state) {
      state.info = [];
    },
  },
});

export default infoSlice.reducer;
export const { addInfo, removeInfo} = infoSlice.actions;
