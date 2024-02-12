import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const announceSlice = createSlice({
  name: "announcement",
  initialState: {
    announceText: "",
  },
  reducers: {
    addAnnounce: (state, action: PayloadAction<string>) => {
      state.announceText = action.payload;
    },
  },
});

export const { addAnnounce } = announceSlice.actions;
export default announceSlice.reducer;
