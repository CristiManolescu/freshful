import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ButtonsProps {
  title: string;
  url: string;
  icon: string;
  iconPng: string;
  count: number;
}
[];

interface ButtonsState {
  buttons: ButtonsProps[];
}

const initialState: ButtonsState = { buttons: [] };

const buttonsMenuSlice = createSlice({
  name: "menuButton",
  initialState,
  reducers: {
    addButtons: (state, action: PayloadAction<ButtonsProps>) => {
      state.buttons = [...action.payload];
    },
  },
});

export const { addButtons } = buttonsMenuSlice.actions;
export default buttonsMenuSlice.reducer;
