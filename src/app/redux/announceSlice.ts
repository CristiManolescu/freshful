import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const announceSlice = createSlice({
  name: "announcement",
  initialState: {
    announceText: "",
    isOpen: true,
  },
  reducers: {
    addAnnounce: (state, action: PayloadAction<string>) => {
      state.announceText = action.payload;
    },
    closeAnnounce: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addAnnounce, closeAnnounce } = announceSlice.actions;
export default announceSlice.reducer;
