"use client";
import useCarousel from "@/app/hooks/useCarousel";
import { useAppSelector } from "@/app/redux/store";
import styles from "./imageCarousel.module.css";

import Carousel from "nuka-carousel";

import React from "react";
import Image from "next/image";

const ImagesCarousel = () => {
  useCarousel();
  const banners = useAppSelector((store) => store.carousel.banners);

  return (
    <div className={styles.carousel}>
      <Carousel className={styles.carousel}>
        {banners.map((banner) => (
          <Image
            key={banner.analyticsListId}
            src={banner.image.default}
            alt="banner"
            width="925"
            height="358"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
