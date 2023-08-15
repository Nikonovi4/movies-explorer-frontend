import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../index.css";
import Lending from "../Lending/Lending";
import Movies from "../Movies/Movies";
import SavedMovie from "../SavedMovie/SavedMovie";
import Profile from "../Profile/Profile";
import Registration from "../Registratin/Registratin";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import userInfo from "../../utils/userInfo";

function App() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const openBurgerMenu = () => {
    isOpenMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route
          path="/movies"
          element={
            <Movies openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovie
              openBurgerMenu={openBurgerMenu}
              isOpenMenu={isOpenMenu}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile openBurgerMenu={openBurgerMenu} isOpenMenu={isOpenMenu} userInfo = {userInfo} />
          }
        />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
