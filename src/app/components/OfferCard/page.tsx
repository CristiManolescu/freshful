import React from "react";
import styles from "./offerCard.module.css";
import Image from "next/image";

interface OfferProps {
  carouselImage: {
    default: string;
  };
  code: string;
  datesShort: string;
  name: string;
}

const OfferCard = ({ name, datesShort, carouselImage }: OfferProps) => {
  return (
    <div className={styles.menu}>
      <Image
        className={styles.image}
        src={carouselImage.default}
        alt={name}
        height="132"
        width="119"
      />
      <div className={styles.data}>
        <div className={styles.name}>{name}</div>
        <hr className={styles.hr} />
        <div className={styles.dates}>{datesShort}</div>
      </div>
    </div>
  );
};

export default OfferCard;
