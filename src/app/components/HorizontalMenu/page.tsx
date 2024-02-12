import HorizontalLeft from "../HorizontalLeft/page";
import styles from "./horizontalMenu.module.css";

const HorizontalMenu = () => {
  return (
    <div className={styles.main}>
      <HorizontalLeft />
      <div>Meniu Dreapta</div>
    </div>
  );
};

export default HorizontalMenu;
