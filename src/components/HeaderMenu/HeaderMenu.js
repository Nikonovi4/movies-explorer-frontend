import { NavLink, useLocation } from "react-router-dom";
import Avatar from "../../images/avatar.svg";

const HeaderMenu = () => {
  const location = useLocation();
  return (
    <section className="headerMenu">
      <ul className="headerMenu__list">
        <li className="headerMenu__item">
          <NavLink
              to="/movies"
              className={
                location.pathname === "/movies"
                  ? "headerMenu__link headerMenu__link_active"
                  : "headerMenu__link"
              }
            >
              Фильмы
            </NavLink>
        </li>
        <li className="headerMenu__item">
          <NavLink
              to="/saved-movies"
              className={
                location.pathname === "/saved-movies"
                  ? "headerMenu__link headerMenu__link_active"
                  : "headerMenu__link"
              }
            >
              Сохранённые фильмы
            </NavLink>
        </li>
      </ul>
      <div className="headerMenu__userInfo">
        
        <NavLink to="/profile" className="headerMenu__link headerMenu__userInfo">
          <p className="headerMenu__user">Аккаунт</p>
          <img className="user__avatar" src={Avatar} alt="аватар" />
        </NavLink>
      </div>
    </section>
  );
};

export default HeaderMenu;
