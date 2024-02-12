"use client";
import useMenu from "@/app/hooks/useMenu";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import styles from "./menu.module.css";

const Menu = () => {
  useMenu();
  const menus = useAppSelector((store) => store.menu.menus);

  return (
    <ul className={styles.list}>
      {menus.map((menu) => (
        <li key={menu.name} className={styles.listItems}>
          <Image src={menu.iconPng} width="22" height="22" alt={menu.name} />{" "}
          <span>{menu.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
