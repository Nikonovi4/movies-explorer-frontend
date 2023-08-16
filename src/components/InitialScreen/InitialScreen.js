import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const InitialScreen = ({
  titleText,
  naviText,
  buttonText,
  footerText,
  children,
  errorMessage,
  link,
}) => {
  return (
    <section className="initial">
      <header className="initial__header">
        <NavLink to="/">
          <img alt="logo" src={Logo} className="initial__logo" />
        </NavLink>
        <h2 className="initial__title">{titleText}</h2>
      </header>
      <form className="initial__form">
        <fieldset className="initial__fieldset">
          <div className="initial__inputBlock">
            {children}
            <p className="error">{errorMessage}</p>
          </div>
          <div className="initial__buttonBblock">
            <button className="initial__button" type="submit">
              {buttonText}
            </button>
            <p className="initial__text">
              {footerText}
              <NavLink to={link} className="initial__link">
                {naviText}
              </NavLink>
            </p>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default InitialScreen;
