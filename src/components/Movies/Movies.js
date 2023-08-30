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
        <ul className="movies__cards">
          {renderMovies?.slice(0, roundedVisibleCardCount).map((movie, i) => (
            <MovieCard data={movie} key={i}>
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
          <button className="movies__moreBtn" onClick={handleClick}>
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
