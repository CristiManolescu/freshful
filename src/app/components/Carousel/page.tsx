"use client";
import useCarousel from "@/app/hooks/useCarousel";
import { useAppSelector } from "@/app/redux/store";
import React from "react";

const Carousel = () => {
  useCarousel();
  const banners = useAppSelector((store) => store.carousel.banners);
  console.log(banners);
  return <div>Carousel</div>;
};

export default Carousel;
