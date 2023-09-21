const BurgerIqon = ({ isOpenMenu, openBurgerMenu }) => {
  return (
    <section
      className={`iqon ${isOpenMenu ? "iqon_opened" : ""}`}
      onClick={openBurgerMenu}
    >
      <div
        className={`iqon__line ${
          isOpenMenu ? "line-first_clicked" : "line-first_unclicked"
        }`}
      ></div>
      <div
        className={`iqon__line ${
          isOpenMenu ? "line-second_clicked" : "line-second_unclicked"
        }`}
      ></div>
      <div
        className={`iqon__line ${
          isOpenMenu ? "line-third_clicked" : "line-third_unclicked"
        }`}
      ></div>
    </section>
  );
};

export default BurgerIqon;
