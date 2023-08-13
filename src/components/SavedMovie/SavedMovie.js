import Header from "../Header/Header";
import BurgerIqon from "../BurgerIqon/BurgerIqon";
import Searcher from "../Searcher/Searcher";
import MovieCard from "../MovieCard/MovieCard";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import images from "../../utils/imagesList";
import Footer from "../Footer/Footer";
import DeleteButton from "../DeleteButton/DeleteButton";

const SavedMovie = ({ openBurgerMenu, isOpenMenu }) => {
  return (
    <>
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <div className="movie__background">
        <Header
          children={
            <BurgerIqon
              openBurgerMenu={openBurgerMenu}
              isOpenMenu={isOpenMenu}
            />
          }
        />
        <Searcher />
        <ul className="movies__cards">
          {images?.map((movie, i) => (
            <MovieCard data={movie} key={i}>
              <DeleteButton />
            </MovieCard>
          ))}
        </ul>
        <div className="buttonplace">
          <button className="movies__moreBtn">Ещё</button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SavedMovie;
