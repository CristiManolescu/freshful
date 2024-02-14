"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HOMEPAGE_API } from "../utils/APIs";
import { addProduct, addProductTitle } from "../redux/productSlice";
import { useAppSelector } from "../redux/store";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((store) => store.product.products);

  useEffect(() => {
    products.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOMEPAGE_API);
    const json = await data.json();
    dispatch(addProductTitle(json.slots[3].title));
    dispatch(addProduct(json.slots[3].products));
  };
};

export default useProducts;
