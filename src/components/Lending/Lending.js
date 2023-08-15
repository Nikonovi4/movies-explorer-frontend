import Promo from "../Promo/Promo";
import NaviBar from "../NaviBar/NaviBar";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import LendingMenu from "../LendingMenu/LendingMenu";

const Lending = () => {
  return (
    <>
      <header className="lending__background">
        <Header children={<LendingMenu />} />
      </header>
      <main>
        <Promo promoText="Учебный проект студента факультета Веб&#8209;разработки." />
        <NaviBar />
        <AboutProject />
        <Techs />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Lending;
