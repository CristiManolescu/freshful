import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductProps {
  image: {
    extralarge: {
      default: string;
    };
    large: {
      default: string;
    };
    thumbnail: {
      default: string;
    };
  };
  name: string;
  originalPrice: number;
  price: number;
  currency: string;
  brand: string;
  tags: [
    {
      iconPng: string;
      text: string;
    }
  ];
  banner: {
    text: string;
  };
  unitPriceLabel: string;
}

interface ProductState {
  products: ProductProps[];
  title: string;
}

const initialState: ProductState = { products: [], title: "" };

const productSlice = createSlice({
  name: "menuButton",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductProps[]>) => {
      state.products = [...action.payload];
    },
    addProductTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { addProduct, addProductTitle } = productSlice.actions;
export default productSlice.reducer;
