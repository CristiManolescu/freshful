import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OffersProps {
  carouselImage: {
    default: string;
  };
  code: string;
  datesShort: string;
  name: string;
}
[];

interface OffersState {
  offers: OffersProps[];
}

const initialState: OffersState = { offers: [] };

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    addOffer: (state, action: PayloadAction<OffersProps>) => {
      state.offers = [...action.payload];
    },
  },
});

export const { addOffer } = offersSlice.actions;
export default offersSlice.reducer;
