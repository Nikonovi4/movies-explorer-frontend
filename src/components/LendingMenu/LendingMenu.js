import { NavLink } from "react-router-dom";

const LendingMenu = () => {
  return (
    <section className="header__menu">
      <NavLink to="/signup" className="header__link">
        Регистрация
      </NavLink>
      <NavLink to="/signin" className="header__link">
        <button className="header__button">Войти</button>
      </NavLink>
    </section>
  );
};

export default LendingMenu;
