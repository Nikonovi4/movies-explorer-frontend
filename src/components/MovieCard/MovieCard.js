import { useLocation } from "react-router-dom";
const MovieCard = ({ data, children }) => {
  const location = useLocation();
  const convertDuration = (duration) => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    return `${hours}ч ${minutes}м`;
  };

  return (
    <section className="movieCard">
      <a href={data.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movieCard__iqon"
          alt="иконка"
          src={
            location.pathname === "/saved-movies"
              ? `${data.image}`
              : `https://api.nomoreparties.co${data.image.url}`
          }
        />
      </a>
      <div className="movieCard__info">
        <div className="movieCard__status">
          <h3 className="movieCard__name">{data.nameRU}</h3>
          {children}
        </div>
        <p className="movieCard__duration">{convertDuration(data.duration)}</p>
      </div>
    </section>
  );
};

export default MovieCard;
