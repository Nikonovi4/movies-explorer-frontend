import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="notFound">
      <div className="notFound__main">
        <h2 className="notFound__code">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <NavLink to="/movies" className="initial__link">
        Назад
      </NavLink>
    </main>
  );
};
export default NotFound;
