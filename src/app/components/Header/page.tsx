"use client";
import Announcement from "../Announcement/page";
import SearchMenu from "../SearchMenu/page";
import HorizontalMenu from "../HorizontalMenu/page";
import { useAppSelector } from "@/app/redux/store";

import styles from "./header.module.css";

const Header = () => {
  const isOpen = useAppSelector((store) => store.announcement.isOpen);
  return (
    <header className={styles.main}>
      {isOpen && <Announcement />}
      <SearchMenu />
      <HorizontalMenu />
    </header>
  );
};

export default Header;
