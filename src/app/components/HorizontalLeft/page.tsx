"use client";

import React from "react";
import styles from "./horizontalleft.module.css";
import useButtons from "@/app/hooks/useButtons";
import { useAppSelector } from "@/app/redux/store";

const HorizontalLeft = () => {
  useButtons();
  const buttons = useAppSelector((store) => store.menuButton.buttons);

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.product}>Produse</li>
        {buttons.map((button) => (
          <li className={styles.buttons} key={button.title}>
            {button.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HorizontalLeft;
