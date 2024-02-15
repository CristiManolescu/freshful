import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BannersProps {
  image: {
    default: string;
    webp: string;
    responsive: string;
    responsiveWebp: string;
  };
  url: string;
  name: string;
  analyticsListId: string;
  analyticsListName: number;
}

interface BannerState {
  banners: BannersProps[];
}

const initialState: BannerState = { banners: [] };

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    addBanners: (state, action: PayloadAction<BannersProps[]>) => {
      state.banners = [...action.payload];
    },
  },
});

export const { addBanners } = carouselSlice.actions;
export default carouselSlice.reducer;
