"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HOMEPAGE_API } from "../utils/APIs";
import { addBanners } from "../redux/carouselSlice";
import { useAppSelector } from "../redux/store";

const useCarousel = () => {
  const dispatch = useDispatch();
  const banners = useAppSelector((store) => store.carousel.banners);

  useEffect(() => {
    banners.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOMEPAGE_API);
    const json = await data.json();
    dispatch(addBanners(json.slots[0].banners));
  };
};

export default useCarousel;
