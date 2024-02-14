import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import announceSlice from "./announceSlice";
import buttonsMenuSlice from "./buttonsMenuSlice";
import menuSlice from "./menuSlice";
import carouselSlice from "./carouselSlice";
import offersSlice from "./offersSlice";
import searchSlice from "./searchSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    announcement: announceSlice,
    menuButton: buttonsMenuSlice,
    menu: menuSlice,
    carousel: carouselSlice,
    offer: offersSlice,
    search: searchSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
