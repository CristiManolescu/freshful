"use client";
import React from "react";

import useOffers from "@/app/hooks/useOffers";
import { useAppSelector } from "@/app/redux/store";

import OfferCard from "../OfferCard/page";
import styles from "./offers.module.css";

const Offers = () => {
  useOffers();
  const offers = useAppSelector((store) => store.offer.offers);
  if (offers.length === 0) return null;

  return (
    <div className={styles.main}>
      {offers.map((offer) => (
        <OfferCard key={offer.code} {...offer} />
      ))}
    </div>
  );
};

export default Offers;
