import Header from "../Header/Header";
import Searcher from "../Searcher/Searcher";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Footer/Footer";
import SaveButton from "../SaveButton/SaveButton";

const Movies = ({
  openBurgerMenu,
  isOpenMenu,
  handleChange,
  renderMovies,
  setCheckedCheckbox,
  checkedCheckbox,
  onSearchMovie,
  submitRequestValue,
  values,
  calculateCardCount,
  roundedVisibleCardCount,
  handleSavedMovie,
  isLiked,
  unLikeMovie,
}) => {
  const handleClick = () => {
    calculateCardCount();
  };

  const classNameButton = () => {
    return roundedVisibleCardCount >= renderMovies.length
      ? "movies__moreBtn_invisible"
      : "movies__moreBtn";
  };

  return (
    <section className="movies">
      <header className="movie__background">
        <Header openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
      </header>
      <main className="movie__background">
        <Searcher
          handleChange={handleChange}
          setCheckedCheckbox={setCheckedCheckbox}
          checkedCheckbox={checkedCheckbox}
          onSearchMovie={onSearchMovie}
          submitRequestValue={submitRequestValue}
          values={values}
        />
        <span
          className={
            !!submitRequestValue ? "monie__hint_invisible" : "movie__hint"
          }
        >
          Нужно ввести ключевое слово
        </span>
        <span
          className={
            !!submitRequestValue && !renderMovies.length
              ? "movie__hint"
              : "monie__hint_invisible"
          }
        >
          Ничего не найдено
        </span>
        <ul className="movies__cards">
          {renderMovies
            ?.slice(0, roundedVisibleCardCount)
            .map((movie, movieId) => (
              <MovieCard data={movie} key={movieId}>
                <SaveButton
                  data={movie}
                  handleSavedMovie={handleSavedMovie}
                  isLiked={isLiked}
                  unLikeMovie={unLikeMovie}
                />
              </MovieCard>
            ))}
        </ul>
        <section className="buttonplace">
          <button className={classNameButton()} onClick={handleClick}>
            Ещё
          </button>
        </section>
      </main>
      <footer className="movie__background">
        <Footer />
      </footer>
    </section>
  );
};

export default Movies;
