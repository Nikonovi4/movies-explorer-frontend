const MovieCard = ({ data, children }) => {
  return (
    <section className="movieCard">
      <img className="movieCard__iqon" alt="иконка" src={data.link} />
      <div className="movieCard__info">
        <div className="movieCard__status">
          <h3 className="movieCard__name">{data.name}</h3>
          {children}
        </div>
        <p className="movieCard__duration">{data.duration}</p>
      </div>
    </section>
  );
};

export default MovieCard;