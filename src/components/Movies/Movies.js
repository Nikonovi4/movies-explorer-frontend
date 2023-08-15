import Header from "../Header/Header";
import BurgerIqon from "../BurgerIqon/BurgerIqon";
import Searcher from "../Searcher/Searcher";
import MovieCard from "../MovieCard/MovieCard";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import images from "../../utils/imagesList";
import Footer from "../Footer/Footer";
import SaveButton from "../SaveButton/SaveButton";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Movies = ({ openBurgerMenu, isOpenMenu }) => {
  return (
    <section className="movies">
      <header className="movie__background">
        <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
        <Header>
          <HeaderMenu />
          <BurgerIqon openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
        </Header>
      </header>
      <main className="movie__background">
        <Searcher />
        <ul className="movies__cards">
          {images?.map((movie, i) => (
            <MovieCard data={movie} key={i}>
              <SaveButton />
            </MovieCard>
          ))}
        </ul>
        <section className="buttonplace">
          <button className="movies__moreBtn">Ещё</button>
        </section>
      </main>
      <footer className="movie__background">
        <Footer />
      </footer>
    </section>
  );
};

export default Movies;
