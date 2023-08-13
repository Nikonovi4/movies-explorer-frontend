const BurgerIqon = ({ isOpenMenu, openBurgerMenu }) => {
  return (
    <div className="burger__iqon" onClick={openBurgerMenu}>
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
    </div>
  );
};

export default BurgerIqon;
