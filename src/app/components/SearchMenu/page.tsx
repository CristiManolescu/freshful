import Image from "next/image";
import { logo } from "@/app/utils/contants";
import styles from "./searchMenu.module.css";
import SearchBar from "../SearchBar/page";

const SearchMenu = () => {
  return (
    <div className={styles.main}>
      <Image src={logo} width="200" height="50" alt="logo" />
      <SearchBar />
      <div>usermenu</div>
    </div>
  );
};

export default SearchMenu;
