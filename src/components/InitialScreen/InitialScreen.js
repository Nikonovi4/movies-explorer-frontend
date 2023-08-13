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
    <div className="initial">
      <img alt="logo" src={Logo} className="initial__logo" />
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
    </div>
  );
};

export default InitialScreen;
