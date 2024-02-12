import Menu from "../Menu/Menu";
import Promotions from "../Promotions/page";
import styles from "./mainComponent.module.css";

const MainComponent = () => {
  return (
    <div className={styles.main}>
      {" "}
      <Menu />
      <Promotions />
    </div>
  );
};

export default MainComponent;
