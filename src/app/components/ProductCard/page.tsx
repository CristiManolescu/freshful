import React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";

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
  brand: string;
  originalPrice: number;
  price: number;
  currency: string;
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

const ProductCard = ({
  image,
  name,
  originalPrice,
  price,
  currency,
  brand,
  tags,
  banner,
  unitPriceLabel,
}: ProductProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.productPhoto}>
        <Image
          alt="productPhoto"
          src={image.thumbnail.default}
          height="234"
          width="234"
        />
        {tags.length > 0 && (
          <Image
            className={styles.romanianFlag}
            src={tags[0].iconPng}
            alt={tags[0].text}
            height="24"
            width="24"
          />
        )}
      </div>
      <div className={styles.data}>
        <div className={styles.title}>
          <span className={styles.brand}>{brand}</span>
          <span>{name}</span>
        </div>
        <div className={styles.pricing}>
          <span className={styles.banner}>{banner.text}</span>
          <span className={styles.originalPrice}>
            <del>{`${originalPrice} ${currency}`}</del>
          </span>
          <span className={styles.actualPrice}>{`${price} ${currency}`}</span>
        </div>
        <div className={styles.cart}>
          <span className={styles.unit}>{unitPriceLabel}</span>
          <button className={styles.button}>Adauga in cos</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
