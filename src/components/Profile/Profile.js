import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const Profile = ({
  openBurgerMenu,
  isOpenMenu,
  handleChange,
  isValid,
  handleEditUserInfo,
  handleLogout,
  values,
  isVisibleMessage,
  setVisibleMessage,
}) => {
  const [isEditing, setEditing] = useState(false);
  const editingForm = () => {
    isEditing ? setEditing(false) : setEditing(true);
  };

  const currentUser = useContext(CurrentUserContext);

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();
    handleEditUserInfo();
    setVisibleMessage("error");
  };

  const submitButtonClass = () => {
    if (!isEditing) {
      return "submitButton submitButton_invisible";
    } else if (disableButton()) {
      return "submitButton";
    } else {
      return "submitButton submitButton_disable";
    }
  };

  const disableButton = () => {
    return (
      isValid &&
      (values.name !== currentUser.name || values.email !== currentUser.email)
    );
  };

  return (
    <section className="profile">
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <div className="profile__content">
        <Header openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
        <form className="profile__form" onSubmit={handleSubmitUserInfo}>
          <fieldset className="profile__fieldset" disabled={!isEditing}>
            <legend className="profile__title">
              Привет, {currentUser.name}!
            </legend>
            <div className="profile__block">
              <label className="profile__lable">
                Имя
                <input
                  type="text"
                  name="name"
                  className="profile__input input_name"
                  minLength="4"
                  maxLength="40"
                  defaultValue={currentUser.name}
                  onChange={handleChange}
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
                  name="email"
                  className="profile__input input_email"
                  minLength="4"
                  maxLength="40"
                  defaultValue={currentUser.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>
          <span className={isVisibleMessage}>
            Данные пользователя успешно сохранены!
          </span>
          <div className="profile__button ">
            <button
              className={submitButtonClass()}
              onClick={editingForm}
              type="submit"
              disabled={!disableButton()}
            >
              Сохранить
            </button>
          </div>
        </form>
        <ul className="profile__buttons">
          <li className="profile__button">
            <button
              className={!isEditing ? "button " : "button button_invisible"}
              onClick={editingForm}
            >
              Редактировать
            </button>
          </li>
          <li className="profile__button">
            <NavLink
              className={!isEditing ? "button button_exit" : "button_invisible"}
              to="/signin"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
