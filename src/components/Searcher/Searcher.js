import Find from "../../images/search-button-image.svg";
import Checkbox from "../Checkbox/Checkbox";

const Searcher = () => {
  return (
    <form className="searcher block">
      <label className="searcher__lable">
        <input type="search" placeholder="Фильм" className="searcher__input" />
        <button type="submit" className="searcher__button">
          <img src={Find} alt="кнопка поиска фильмов" />
        </button>
      </label>
      <div className="searcher__checkbox">
        <Checkbox />
        <p className="checkbox__text">Короткометражки</p>
      </div>
      <hr className="searcher__line" />
    </form>
  );
};

export default Searcher;
