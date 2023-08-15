import Header from "../Header/Header";
import BurgerIqon from "../BurgerIqon/BurgerIqon";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Searcher from "../Searcher/Searcher";
import MovieCard from "../MovieCard/MovieCard";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import images from "../../utils/imagesList";
import Footer from "../Footer/Footer";
import DeleteButton from "../DeleteButton/DeleteButton";

const SavedMovie = ({ openBurgerMenu, isOpenMenu }) => {
  return (
    <section>
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <header className="movie__background">
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
              <DeleteButton />
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

export default SavedMovie;
