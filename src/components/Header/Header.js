import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import BurgerIqon from "../BurgerIqon/BurgerIqon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LendingMenu from "../LendingMenu/LendingMenu";
import { useLocation } from "react-router-dom";

const Header = ({ children, isLogin, openBurgerMenu, isOpenMenu }) => {
  let headerContainer = null;
  const location = useLocation();

  if (location.pathname==='/'){
    if (isLogin) {
      headerContainer = (
              <div className="header__container">
                <HeaderMenu />
                <BurgerIqon openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
                <BurgerMenu openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
              </div>
            );
          } else {
            headerContainer = <LendingMenu />;
          }
    } else {
      headerContainer = (
        <div className="header__container">
          <HeaderMenu />
          <BurgerIqon openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
          <BurgerMenu openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
        </div>)
    }
  

  // if (location.pathname === "/") {
  //   if (isLogin) {
  //     headerContainer = (
  //       <div className="header__container">
  //         <HeaderMenu />
  //         <BurgerIqon openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
  //         <BurgerMenu openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
  //       </div>
  //     );
  //   } else {
  //     headerContainer = <LendingMenu />;
  //   }
  // } else {
  //   <div className="header__container">
  //     <HeaderMenu />
  //     <BurgerIqon openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
  //     <BurgerMenu openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
  //   </div>;
  // }

  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <img alt="logo" src={Logo} className="header__logo" />
      </NavLink>
      {headerContainer}
      {/* {children} */}
    </header>
  );
};

export default Header;
