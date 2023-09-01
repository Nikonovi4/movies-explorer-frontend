import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = ({
  openBurgerMenu,
  isOpenMenu,
  userInfo,
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



  const handleSubmitUserInfo = (e) => {
    e.preventDefault();
    handleEditUserInfo();
    setVisibleMessage("error")
  };

  const submitButtonClass = () => {
    if (!isEditing) {
      return "submitButton submitButton_invisible";
    } else if (isDesableButton()) {
      return "submitButton";
    } else {
      return "submitButton submitButton_disable";
    }
  };


const isDesableButton = () => {
 return (isValid && (values.name !== userInfo.name) && (values.email !== userInfo.email))
}

  return (
    <section className="profile">
      <BurgerMenu isOpenMenu={isOpenMenu} openBurgerMenu={openBurgerMenu} />
      <div className="profile__content">
        <Header openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
        <form className="profile__form" onSubmit={handleSubmitUserInfo}>
          <fieldset className="profile__fieldset" disabled={!isEditing}>
            <legend className="profile__title">Привет, {userInfo.name}!</legend>
            <div className="profile__block">
              <label className="profile__lable">
                Имя
                <input
                  type="text"
                  required
                  name="name"
                  className="profile__input input_name"
                  minLength="4"
                  maxLength="40"
                  defaultValue={userInfo.name}
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
                  defaultValue={userInfo.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>
          <span className={isVisibleMessage}>Данные пользователя успешно сохранены!</span>
          <div className="profile__button ">
            <button
              className={submitButtonClass()}
              onClick={editingForm}
              type="submit"
              disabled={!(isDesableButton())}
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
