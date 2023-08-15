import InitialScreen from "../InitialScreen/InitialScreen";

const Registration = () => {
  return (
    <InitialScreen
      titleText="Добро пожаловать!"
      naviText="Войти"
      buttonText="Зарегистрироваться"
      footerText="Уже зарегистрированы?"
      link="/signin"
    >
      <form className="inputs">
        <label className="input__label">
          Имя
          <input
            type="text"
            required
            name="input_name"
            className="input input_name"
            minLength="4"
            maxLength="40"
            placeholder="Ваше имя"
          />
        </label>
        <label className="input__label">
          E-mail
          <input
            type="email"
            required
            name="input_email"
            className="input input_email"
            minLength="4"
            maxLength="40"
            placeholder="Ваш e-mail"
          />
        </label>
        <label className="input__label">
          Пароль
          <input
            type="password"
            required
            name="input_password"
            className="input input_password"
            minLength="6"
            maxLength="40"
            placeholder="Ваш пароль"
          />
          <span className=""></span>
        </label>
      </form>
    </InitialScreen>
  );
};

export default Registration;