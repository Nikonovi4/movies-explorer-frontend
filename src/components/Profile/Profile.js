import Header from "../Header/Header";
import BurgerIqon from "../BurgerIqon/BurgerIqon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = ({ openBurgerMenu, isOpenMenu, userInfo }) => {
  const [isDisabled, setDisabled] = useState(true);
  const undisabledForm = () => {
    isDisabled ? setDisabled(false) : setDisabled(true);
  };
  return (
    <div className="profile">
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <div className="profile__content">
        <Header
          children={
            <BurgerIqon
              openBurgerMenu={openBurgerMenu}
              isOpenMenu={isOpenMenu}
            />
          }
        />
        <form className="profile__form">
          <fieldset className="profile__fieldset" disabled={isDisabled}>
            <legend className="profile__title">Привет, {userInfo.name}!</legend>
            <div className="profile__block">
              <label className="profile__lable">
                Имя
                <input
                  type="text"
                  required
                  name="input_name"
                  className="profile__input input_name"
                  minLength="4"
                  maxLength="40"
                  value={userInfo.name}
                />
              </label>
            </div>
            <hr className="profile__line" />
            <div className="profile__block">
              <label className="profile__lable">
                E-mail
                <input
                  type="email"
                  required
                  name="input_email"
                  className="profile__input input_email"
                  minLength="4"
                  maxLength="40"
                  value={userInfo.email}
                />
              </label>
            </div>
          </fieldset>
        </form>
        <ul className="profile__buttons">
          <li className="profile__button">
            <button
              className={isDisabled ? "button " : "button button_invisible"}
              onClick={undisabledForm}
            >
              Редактировать
            </button>
          </li>
          <li className="profile__button">
              <NavLink className={isDisabled ? "button button_exit" : "button_invisible"} to="/signin">
              Выйти из аккаунта
              </NavLink>
          </li>
          <li className="profile__button ">
            <button
              className={
                isDisabled
                  ? "submitButton submitButton_invisible"
                  : "submitButton"
              }
              onClick={undisabledForm}
            >
              Сохранить
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
