import BlockHeader from "../BlockHeader/BlockHeader";

const Techs = () => {
  return (
    <section className="techs block" id="techs">
      <BlockHeader
        blockName={"Технологии"}
        isBlack={"blockHeader__line_black"}
      />
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__graphics">
        <li className="graphics__modul graphics__text">HTML</li>
        <li className="graphics__modul graphics__text">CSS</li>
        <li className="graphics__modul graphics__text">JS</li>
        <li className="graphics__modul graphics__text">React</li>
        <li className="graphics__modul graphics__text">Git</li>
        <li className="graphics__modul graphics__text">Express.js</li>
        <li className="graphics__modul graphics__text">MongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
