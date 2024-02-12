import Announcement from "../Announcement/page";
import SearchMenu from "../SearchMenu/page";
import HorizontalMenu from "../HorizontalMenu/page";

const Header = () => {
  return (
    <header>
      <Announcement />
      <SearchMenu />
      <HorizontalMenu />
    </header>
  );
};

export default Header;
