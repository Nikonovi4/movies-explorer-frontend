import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const InitialScreen = ({
  titleText,
  naviText,
  buttonText,
  footerText,
  children,
  link,
  errors,
  isValid,
  onSubmit,
  isDesable
}) => {
 

  return (
    <section className="initial">
      <header className="initial__header">
        <NavLink to="/">
          <img alt="logo" src={Logo} className="initial__logo" />
        </NavLink>
        <h2 className="initial__title">{titleText}</h2>
      </header>
      <form className="initial__form" onSubmit={onSubmit}>
        <fieldset className="initial__fieldset">
          <div className="initial__inputBlock">
            {children}

            <p className="error">
              {errors.name ? "Ошибка в заполнение имени: " : ""}
              {[errors.name]}
            </p>
            <p className="error">
              {errors.email ? "Ошибка в заполнение почты: " : ""}
              {[errors.email]}
            </p>
            <p className="error">
              {errors.password ? "Ошибка в заполнение пароля: " : ""}
              {[errors.password]}
            </p>
          </div>
          <div className="initial__buttonBblock">
            <button
              className={
                isValid
                  ? "initial__button"
                  : "initial__button initial__button_disabled"
              }
              type="submit"
              disabled={!isValid}
              
            >
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
