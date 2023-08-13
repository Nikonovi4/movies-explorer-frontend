import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound__main">
        <h2 className="notFound__code">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <NavLink to="/sign-up" className="initial__link">
        Назад
      </NavLink>
    </div>
  );
};
export default NotFound;
