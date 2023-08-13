import Arrow from "../../images/arrow.svg";
import Photo from "../../images/photo.png";
import BlockHeader from "../BlockHeader/BlockHeader";

const Portfolio = () => {
  return (
    <div className="portfolio block" id="portfolio">
      <BlockHeader blockName="Студент" />
      <div className="information">
        <img className="infomation__photo" alt="фото" src={Photo} />
        <div className="information__text">
          <h2 className="information__mame">Виталий</h2>
          <p className="information__about text">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="information__story text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="portfolio__link"
            href="https://github.com/Nikonovi4"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <p className="portfolio__text">Портфолио</p>
      <ul className="linkbar">
        <li className="linkbar__link">
          <p className="link__name">Статичный сайт</p>
          <a href="/" className="link">
            <img alt="стрелка" src={Arrow} className="link__iqon" />
          </a>
        </li>
        <hr className="linkbar__line"></hr>
        <li className="linkbar__link">
          <p className="link__name">Адаптивный сайт</p>
          <a href="/movies" className="link">
            <img alt="стрелка" src={Arrow} className="link__iqon" />
          </a>
        </li>
        <hr className="linkbar__line"></hr>
        <li className="linkbar__link">
          <p className="link__name">Одностраничное приложение</p>
          <a href="/" className="link">
            <img alt="стрелка" src={Arrow} className="link__iqon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
