import Find from "../../images/search-button-image.svg";
import Checkbox from "../Checkbox/Checkbox";

const Searcher = ({
  handleChange,
  setCheckedCheckbox,
  checkedCheckbox,
  onSearchMovie,
  submitRequestValue,
  values
}) => {
  const handleSearchMovie = (e) => {
    e.preventDefault();
    onSearchMovie(e.target.elements["searcher"].value);
  };

 
  return (
    <form className="searcher block" onSubmit={handleSearchMovie}>
      <label className="searcher__lable">
        <input
          type="search"
          placeholder="Фильм"
          className="searcher__input"
          name="searcher"
          onChange={handleChange}
          defaultValue={submitRequestValue}
        />
        <button type="submit" className="searcher__button">
          <img src={Find} alt="кнопка поиска фильмов" />
        </button>
      </label>
      <div className="searcher__checkbox">
        <Checkbox
          setCheckedCheckbox={setCheckedCheckbox}
          checkedCheckbox={checkedCheckbox}
        />
        <p className="checkbox__text">Короткометражки</p>
      </div>
      
      <hr className="searcher__line" />
    </form>
  );
};

export default Searcher;
