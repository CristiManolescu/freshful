import styles from "./searchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className={styles.component}>
      <input placeholder="Caută ceva fresh...ful" className={styles.input} />
      <IoSearchOutline className={styles.icon} />
    </div>
  );
};

export default SearchBar;
