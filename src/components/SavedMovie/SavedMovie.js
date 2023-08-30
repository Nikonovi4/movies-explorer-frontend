import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";
import Searcher from "../Searcher/Searcher";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Footer from "../Footer/Footer";
import DeleteButton from "../DeleteButton/DeleteButton";

const SavedMovie = ({
  openBurgerMenu,
  isOpenMenu,
  handleChange,
  setCheckedCheckbox,
  checkedCheckbox,
  onSearchMovie,
  values,
  renderSavedMovies,
  handleDeleteMovie,
}) => {
  return (
    <>
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <header className="movie__background">
        <Header openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
      </header>
      <main className="movie__background">
        <Searcher
          handleChange={handleChange}
          setCheckedCheckbox={setCheckedCheckbox}
          checkedCheckbox={checkedCheckbox}
          onSearchMovie={onSearchMovie}
          values={values}
        />
        <section>
          <ul className="movies__cards">
            {renderSavedMovies?.map((movie, i) => (
              <MovieCard data={movie} key={i}>
                <DeleteButton
                  data={movie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              </MovieCard>
            ))}
          </ul>
        </section>
      </main>
      <footer className="movie__background">
        <Footer />
      </footer>
    </>
  );
};

export default SavedMovie;
