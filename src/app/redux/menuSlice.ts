import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuProps {
  name: string;
  slug: string;
  children: [
    {
      name: string;
      slug: string;
      iconPng: string;
      image: number;
      gridImage: string;
    }
  ];
  iconPng: string;
  image: number;
  gridImage: string;
}
[];

interface MenuState {
  menus: MenuProps[];
}

const initialState: MenuState = { menus: [] };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenus: (state, action: PayloadAction<MenuProps>) => {
      state.menus = [...action.payload];
    },
  },
});

export const { addMenus } = menuSlice.actions;
export default menuSlice.reducer;
