import InitialScreen from "../InitialScreen/InitialScreen";

const Login = ({
  handleChange,
  errors,
  handleLogin,
  isValid,
  submitErrors
}) => {

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLogin();
  };



  return (
    <InitialScreen
      titleText="Рады видеть!"
      naviText="Регистрация"
      buttonText="Войти"
      footerText="Ещё не зарегистрированы?"
      link="/signup"
      errors={errors}
      isValid={isValid}
      onSubmit={handleSubmitLogin}
    >
      <form className="inputs">
        <label className="input__label">
          E-mail
          <input
            type="email"
            required
            name="email"
            className="input input_email"
            minLength="4"
            maxLength="40"
            placeholder="Ваш e-mail"
            onChange={handleChange}
          />
        </label>
        <label className="input__label">
          Пароль
          <input
            type="password"
            required
            name="password"
            className="input input_password"
            minLength="6"
            maxLength="40"
            placeholder="Введите пароль"
            onChange={handleChange}
          />
          <span className="errorSubmit">{submitErrors}</span>
        </label>
      </form>
    </InitialScreen>
  );
};

export default Login;
