import React, { useEffect } from "react";
import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "../../index.css";
import Lending from "../Lending/Lending";
import Movies from "../Movies/Movies";
import SavedMovie from "../SavedMovie/SavedMovie";
import Profile from "../Profile/Profile";
import Registration from "../Registratin/Registratin";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MovieApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {
  checkShortMovie,
  checkMovieName,
  checkUserMovies,
} from "../../utils/finderFunction/finderFuncion";
import {
  LARGE_SCREEN_ADDENDUM,
  MIDDLE_SCREEN_ADDENDUM,
  SMALL_SCREEN_ADDENDUM,
  LARGE_SCREEN_INITIAL_CARDS,
  MIDDLE_SCREEN_INITIAL_CARDS,
  SMALL_SCREEN_INITIAL_CARDS,
  isDesktopSize,
  isTabletSize,
} from "../../utils/config";
import { useMediaQuery } from "@react-hook/media-query";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const historyResearch = JSON.parse(localStorage.getItem("savaedResearch"));
  const isDesktop = useMediaQuery(isDesktopSize);
  const isTablet = useMediaQuery(isTabletSize);
  const location = useLocation();

  //______________________Стейты________________________

  // Стейт хранения фильмов с сервервера Я
  const [cards, setCards] = useState(historyResearch?.moviesList || []);
  //Хранение отфильтрованных фильмов, которые отображаются на гл странице
  const [renderMovies, setRenderMovies] = useState(
    historyResearch?.filteredMovies || []
  );
  //статус открытия бургер меню
  const [isOpenMenu, setOpenMenu] = useState(false);

  //значения введеные в инпуты
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    searcher: "",
  });
  // ошибки валидации с инпутов
  const [errors, setErrors] = useState({});
  //статус валидации заначений инпутов
  const [isValid, setIsValid] = useState(false);
  //информация о пользователе
  const [userInfo, setCurrentUser] = useState({});
  //статус аудентификации
  const [isLogin, setLogin] = useState(false);
  //ошибки отправки инпутов
  const [submitErrors, setSubmitErrors] = useState("");
  //состояние чекбокса
  const [checkedCheckbox, setCheckedCheckbox] = useState(
    historyResearch?.checkedCheckbox || false
  );
  //состояние чекбокса в сохраненых фильмах
  const [checkedCheckboxSavedMovie, setCheckedCheckboxSavedMovie] =
    useState(false);
  //значение сабмита поиска
  const [submitRequestValue, setSubmitRequestValue] = useState(
    historyResearch?.researchText || ""
  );
  // фильмы сохраненые пользователем()
  const [savingMovieList, setSavingMovieList] = useState([]);
  //сохраненные фильмы, прошедшие фильтрацию
  const [renderSavedMovies, setRenderSavedMovies] = useState([]);
  //значкеие сабмита формы поиска схораненных фильмов
  const [submitRequestValueOnSavingMovie, setSubmitRequestValueOnSavingMovie] =
    useState("");
  //статус прелоудера
  const [isPreloaderVision, setPreloaderVision] = useState(false);
  //отборажение подсказки
  const [isVisibleMessage, setVisibleMessage] = useState("error_invisible");


  //______________________юзЭффекты________________________

  /// эффект для выгрузки фильмов с Я сервера
  useEffect(() => {
    if (isLogin && !!submitRequestValue) {
      setPreloaderVision(true);
      moviesApi
        .getAllCards()
        .then((items) => {
          setCards(items);
        })
        .catch((error) => console.log(`Произошла ${error}: ${error.message}`))
        .finally(() => {
          setPreloaderVision(false);
        });
    }
  }, [isLogin, submitRequestValue]);

  /// эффект для отрисовки главное страницы
  useEffect(() => {
    if (isLogin) {
      const filterMovies = cards?.filter(
        (movie) =>
          !!submitRequestValue &&
          checkShortMovie(movie) === checkedCheckbox &&
          checkMovieName(movie, submitRequestValue)
      );
      setRenderMovies(filterMovies);
      saveResearch(cards, submitRequestValue, filterMovies, checkedCheckbox);
    }
  }, [submitRequestValue, checkedCheckbox, cards, isLogin]);

  ///эффект для выгрузки сохраненных фотографий
  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavingMovieList(movies);
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.message}`));
  }, []);

  /// эффект для фильтрации сохраненных фильмов
  useEffect(() => {
    if (isLogin) {
      const filterSavedMovie = savingMovieList.filter(
        (movie) =>
          checkShortMovie(movie) === checkedCheckboxSavedMovie &&
          checkMovieName(movie, submitRequestValueOnSavingMovie) &&
          checkUserMovies(movie, userInfo)
      );

      setRenderSavedMovies(filterSavedMovie);
    }
  }, [
    checkedCheckboxSavedMovie,
    savingMovieList,
    submitRequestValueOnSavingMovie,
    userInfo,
    isLogin,
  ]);

  /// эффект для сброса ошибок на инпутах
  useEffect(() => {
    setErrors({});
    setVisibleMessage("error_invisible");
    setSubmitErrors("");
  }, [location]);

  ///эффект для проверки токена
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //______________________Функции________________________

  //Регистрация
  const handleRegister = () => {
    const { name, email, password } = values;
    mainApi
      .rerister(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setPreloaderVision(true);
        setErrors({});
        setSubmitErrors();
        setIsValid(false);
      })
      .catch((err) => {
        setSubmitErrors(err);
      })
      .finally(() => {
        setPreloaderVision(false);
      });
  };

  // Вход
  const handleLogin = () => {
    const { email, password } = values;

    mainApi
      .login(email, password)
      .then((data) => {
        setPreloaderVision(true);
        setCurrentUser(data.user);
        setLogin(true);
        setErrors({});
        setSubmitErrors();
      })
      .then(() => {
        navigate("/movies");
        setIsValid(false);
      })
      .catch((err) => {
        setSubmitErrors(`Произошла ${err}: ${err.message}`);
      })
      .finally(() => setPreloaderVision(false));
  };

  //Проверка токена
  const checkToken = () => {
    mainApi
      .getInfo()
      .then((data) => {
        if (data) {
          setLogin(true);
          navigate(location.pathname, { replace: true });
          setCurrentUser(data);
        } else {
          setLogin(false);
        }
      })
      .catch((err) => {
        setLogin(false);
        console.log(`Произошла ${err}: ${err.message}`);
      });
  };

  //изменение данных пользователя
  const handleEditUserInfo = () => {
    const { name, email } = values;
    mainApi
      .editProfile(name || userInfo.name, email || userInfo.email)
      .then((data) => {
        setCurrentUser(data);
        setPreloaderVision(true);
      })
      .catch((err) => {
        setSubmitErrors(err);
      })
      .finally(() => {
        setPreloaderVision(false);
      });
  };

  //открытие бургер меню
  const openBurgerMenu = () => {
    isOpenMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  //валидация инпутов
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  //сохранение параметров поиска
  const saveResearch = (
    moviesList,
    researchText,
    filteredMovies,
    checkedCheckbox
  ) => {
    localStorage.setItem(
      "savaedResearch",
      JSON.stringify({
        moviesList,
        researchText,
        filteredMovies,
        checkedCheckbox,
      })
    );
  };

  //сохранение фильма
  const handleSavedMovie = (movie) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    } = movie;

    mainApi
      .saveMovie(
        country,
        director,
        duration,
        year,
        description,
        `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        id,
        nameRU,
        nameEN
      )
      .then(({ movie }) => {
        setSavingMovieList([movie, ...savingMovieList]);
        console.log(savingMovieList);
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.message}`));
  };

  //удаление фильма
  const handleDeleteMovie = (movie) => {
    const movieId = movie._id;

    mainApi
      .deleteSaveedMovie(movieId)
      .then(
        setSavingMovieList((state) => state.filter((c) => c._id !== movie._id))
      )
      .catch((error) => console.log(`Произошла ${error}: ${error.message}`));
  };

  //удаление фильмов через главную страницу
  const unLikeMovie = (data) => {
    const movie = savingMovieList.find((movie) => movie.movieId === data.id);
    const movieId = movie._id;
    mainApi
      .deleteSaveedMovie(movieId)
      .then(
        setSavingMovieList((state) => state.filter((c) => c._id !== movie._id))
      )
      .catch((error) => console.log(`Произошла ${error}: ${error.message}`));
  };

  //определение есть ли фильм в сохраненных
  const isLiked = (data) => {
    return savingMovieList.some((movie) => movie.nameRU === data.nameRU);
  };

  //выход пользователя
  const handleLogout = () => {
    localStorage.removeItem("savaedResearch");
    mainApi
      .logout()
      .then(() => {
        navigate("/");
        setLogin(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const initialCardCount = isDesktop
    ? LARGE_SCREEN_INITIAL_CARDS
    : isTablet
    ? MIDDLE_SCREEN_INITIAL_CARDS
    : SMALL_SCREEN_INITIAL_CARDS;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);
  const roundedVisibleCardCount = visibleCardCount;

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LARGE_SCREEN_ADDENDUM);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MIDDLE_SCREEN_ADDENDUM);
    }

    setVisibleCardCount(visibleCardCount + SMALL_SCREEN_ADDENDUM);
  };

  return (
    <section className="main">
      <Preloader isPreloaderVision={isPreloaderVision} />
      <CurrentUserContext.Provider value={userInfo}>
        <Routes>
          <Route
            path="/"
            element={
              <Lending
                isLogin={isLogin}
                openBurgerMenu={openBurgerMenu}
                isOpenMenu={isOpenMenu}
              />
            }
          />
          <Route
            path="/signup"
            element={
              !isLogin ? (
                <Registration
                  handleChange={handleChange}
                  errors={errors}
                  isValid={isValid}
                  handleRegister={handleRegister}
                  submitErrors={submitErrors}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signin"
            element={ !isLogin ?
              (<Login
                handleChange={handleChange}
                errors={errors}
                handleLogin={handleLogin}
                isValid={isValid}
                submitErrors={[submitErrors]}
              />
              ) : (
                <Navigate to='/' />
              )
            }
          />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLogin={isLogin}
                element={Movies}
                openBurgerMenu={openBurgerMenu}
                isOpenMenu={isOpenMenu}
                handleChange={handleChange}
                renderMovies={renderMovies}
                setCheckedCheckbox={setCheckedCheckbox}
                checkedCheckbox={checkedCheckbox}
                onSearchMovie={setSubmitRequestValue}
                submitRequestValue={submitRequestValue}
                values={values}
                calculateCardCount={calculateCardCount}
                roundedVisibleCardCount={roundedVisibleCardCount}
                handleSavedMovie={handleSavedMovie}
                isLiked={isLiked}
                unLikeMovie={unLikeMovie}
                errors={errors}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLogin={isLogin}
                element={SavedMovie}
                openBurgerMenu={openBurgerMenu}
                isOpenMenu={isOpenMenu}
                handleChange={handleChange}
                checkedCheckboxSavedMovie={checkedCheckboxSavedMovie}
                setCheckedCheckboxSavedMovie={setCheckedCheckboxSavedMovie}
                onSearchMovie={setSubmitRequestValueOnSavingMovie}
                renderSavedMovies={renderSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLogin={isLogin}
                element={Profile}
                openBurgerMenu={openBurgerMenu}
                isOpenMenu={isOpenMenu}
                userInfo={userInfo}
                handleChange={handleChange}
                isValid={isValid}
                handleEditUserInfo={handleEditUserInfo}
                handleLogout={handleLogout}
                values={values}
                isVisibleMessage={isVisibleMessage}
                setVisibleMessage={setVisibleMessage}
              />
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </section>
  );
}

export default App;
