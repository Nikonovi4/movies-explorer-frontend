import InitialScreen from "../InitialScreen/InitialScreen";
import { EMAIL_REG } from "../../utils/config";

const Registration = ({
  handleChange,
  errors,
  isValid,
  handleRegister,
  submitErrors,
  isDesable
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <InitialScreen
      titleText="Добро пожаловать!"
      naviText="Войти"
      buttonText="Зарегистрироваться"
      footerText="Уже зарегистрированы?"
      link="/signin"
      errors={errors}
      isValid={isValid}
      onSubmit={handleSubmit}
      isDesable={isDesable}
    >
      <div className="inputs">
        <label className="input__label">
          Имя
          <input
            type="text"
            required
            name="name"
            className="input input_name"
            minLength="4"
            maxLength="40"
            placeholder="Ваше имя"
            onChange={handleChange}
          />
        </label>
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
            pattern={EMAIL_REG}
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
            placeholder="Ваш пароль"
            onChange={handleChange}
          />
          <span className="errorSubmit">{submitErrors}</span>
        </label>
      </div>
    </InitialScreen>
  );
};

export default Registration;
