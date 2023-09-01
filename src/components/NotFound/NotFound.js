import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const goBack = () => {
    navigate(-1, { replace: true });
  }

  const navigate = useNavigate();
  return (
    <main className="notFound">
      <div className="notFound__main">
        <h2 className="notFound__code">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      {/* <button className="initial__link" type="button" aria-label="Назад" onClick={goBack}/> */}
      <p className="initial__link" onClick={goBack}>Назад</p>
    </main>
  );
};
export default NotFound;
