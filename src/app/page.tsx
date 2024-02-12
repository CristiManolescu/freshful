import MainComponent from "./components/MainComponent/page";
import Products from "./components/Products/page";

import styles from "./page.module.css";

const Home = () => {
  return (
    <main>
      <MainComponent />
      <Products />
    </main>
  );
};

export default Home;
