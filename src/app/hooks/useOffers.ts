"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HOMEPAGE_API } from "../utils/APIs";
import { addOffer } from "../redux/offersSlice";
import { useAppSelector } from "../redux/store";
// import { useAppSelector } from "../redux/store";

const useOffers = () => {
  const dispatch = useDispatch();
  const offers = useAppSelector((store) => store.carousel.banners);

  useEffect(() => {
    offers.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOMEPAGE_API);
    const json = await data.json();
    dispatch(addOffer(json.slots[2].promotions));
  };
};

export default useOffers;
