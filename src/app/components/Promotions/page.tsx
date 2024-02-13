import React from "react";
import ImagesCarousel from "../ImagesCarousel/page";
import Offers from "../Offers/page";

import styles from "./promotions.module.css";

const Promotions = () => {
  return (
    <div className={styles.main}>
      <ImagesCarousel />
      <Offers />
    </div>
  );
};

export default Promotions;
