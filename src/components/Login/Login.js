import InitialScreen from "../InitialScreen/InitialScreen";

const Login = () => {
  return (
    <InitialScreen
      titleText="Рады видеть!"
      naviText="Регистрация"
      buttonText="Войти"
      footerText="Ещё не зарегистрированы?"
      link="/signup"
    >
      <form className="inputs">
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
            placeholder="Введите пароль"
          />
          <span className=""></span>
        </label>
      </form>
    </InitialScreen>
  );
};

export default Login;
