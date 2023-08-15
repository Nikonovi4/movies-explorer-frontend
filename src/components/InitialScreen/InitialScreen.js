import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const InitialScreen = ({
  titleText,
  naviText,
  buttonText,
  footerText,
  children,
  errorMessage,
  link
}) => {
  return (
    <section className="initial">
      <header>
      <NavLink to="/">
      <img alt="logo" src={Logo} className="initial__logo" />
      </NavLink>
      </header>
      <main>
      <form className="initial__form">
        <fieldset className="initial__fieldset">
          <div className="initial__inputBlock">
            <legend className="initial__title">{titleText}</legend>
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
      </main>
    </section>
  );
};

export default InitialScreen;
