import BlockHeader from "../BlockHeader/BlockHeader";

const AboutProject = () => {
  return (
    <section className="aboutProject block" id="about_project">
      <BlockHeader blockName={"О проекте"} />
      <div className="aboutProject__textBlock">
        <div>
          <h3 className="aboutProject__subtitle subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="abotProject__text text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="aboutProject__subtitle subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="abotProject__text text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="abotProject__graph">
        <figure className="abotProject__back">
          <p className="back__text">1 неделя</p>
          <figcaption className="aboutProject__coment">Back-end</figcaption>
        </figure>
        <figure className="abotProject__front">
          <p className="front__text">4 недели</p>
          <figcaption className="aboutProject__coment">Front-end</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutProject;
