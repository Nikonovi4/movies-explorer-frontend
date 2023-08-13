import Avatar from "../../images/avatar.svg";
import { NavLink, useLocation } from "react-router-dom";

const BurgerMenu = ({ isOpenMenu, openBurgerMenu }) => {
  const location = useLocation();
  return (
    <div className={`burger__menu ${isOpenMenu ? "burger_opened" : ""}`}>
      <div className="burger__content">
        <ul className="burger__links">
          <li className="burger__point">
            <NavLink
              to="/"
              className={
                location.pathname === "/"
                  ? "burger__link burger__link_active"
                  : "burger__link"
              }
              onClick={openBurgerMenu}
            >
              Главная
            </NavLink>
          </li>
          <li className="burger__point">
            <NavLink
              to="/movies"
              className={
                location.pathname === "/movies"
                  ? "burger__link burger__link_active"
                  : "burger__link"
              }
              onClick={openBurgerMenu}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger__point">
            <NavLink
              to="/saved-movies"
              className={
                location.pathname === "/saved-movies"
                  ? "burger__link burger__link_active"
                  : "burger__link"
              }
              onClick={openBurgerMenu}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/profile"
          className={
            location.pathname === "/profile"
              ? "burger__link burger__link_active userInfo"
              : "burger__link userInfo"
          }
          onClick={openBurgerMenu}
        >
          <p className="user__name">Аккаунт</p>
          <img className="burgerUser__avatar" src={Avatar} alt="аватар" />
        </NavLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
