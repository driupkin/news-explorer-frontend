import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import validator from 'validator';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { user, errors } from '../../utils/constants';
import * as NewsApi from '../../utils/NewsApi';
import * as MainApi from '../../utils/MainApi';

function App() {

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePass, setErrorMessagePass] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageInvalid, setErrorMessageInvalid] = useState('');

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [HeaderButtonName, setHeaderButtonName] = useState('Авторизоваться');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [sevedCards, setSevedCards] = useState([]);
  const [isPreloderOpen, setIsPreloderOpen] = useState();
  const [openCards, setOpenCards] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isSevedNews, setIsSevedNews] = useState(false);

  // useEffect(() => {
  //   setOpenCards(true);
  //   const articles = localStorage.getItem('articles')
  //   setFoundCards(JSON.parse(articles));
  // }, []);

  useEffect(() => {
    if (tokenCheck()) {
      getAllContent();
    }
  }, [])

  useEffect(() => {
    function closeAllPopupsByOverlay(e) {
      if (e.target.classList.contains('popup_opened'))
        closeAllPopups();
    }
    document.addEventListener('mousedown', closeAllPopupsByOverlay);

    function closeAllPopupsByEsc(e) {
      if (e.key === 'Escape')
        closeAllPopups();
    }
    document.addEventListener('keydown', closeAllPopupsByEsc);

    return () => {
      document.removeEventListener('mousedown', closeAllPopupsByOverlay);
      document.removeEventListener('keydown', closeAllPopupsByEsc);
    }
  });

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(false);
    setInfoTooltipOpen(false);
  }
  // поиск новостей
  function searchCards(keyWord) {
    NewsApi.getNews(keyWord)
      .then(news => {
        const foundCards = news.articles;
        return foundCards;
      })
      .then(foundCards => {
        if (foundCards.length === 0) {
          setNotFound(true);
          setOpenCards(false);
          // Возможно нужен выход в catch
        }
        console.log(foundCards);
        localStorage.setItem('articles', JSON.stringify(foundCards));
        localStorage.setItem('keyWord', keyWord);
        setIsPreloderOpen(false);
        setOpenCards(true);
        return setFoundCards(foundCards);
      })
  };

  function handleSearch(keyWord) {
    setOpenCards(false);
    setNotFound(false);
    setIsPreloderOpen(true);
    searchCards(keyWord);
  }
  // валидация форм
  function validateInput(fildName, input) {
    switch (fildName) {
      case 'email':
        setIsValidEmail(validator.isEmail(input));
        !isValidEmail && setErrorMessageEmail(errors.email);
        break;
      case 'password':
        setIsValidPass(input.match('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])'));
        !isValidPass && setErrorMessagePass(errors.password);
        break;
      case 'name':
        setIsValidName(input.length > 2);
        !isValidName && setErrorMessageName(errors.name);
        break;
      default:
        break;
    }
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    return jwt;
  }

  function handleSignin(email, password) {
    MainApi.authorize(email, password)
      .then(data => {
        if (data.token) {
          MainApi.getUser(tokenCheck(), 'users/me')
            .then((res) => {
              if (res) {
                setHeaderButtonName(res.name);
                console.log(res)
              }
            })
          setIsAuthorized(true);
          closeAllPopups();
        }
      })
      .catch((err) => {
        setErrorMessageInvalid(err);
      });

    return;
  }

  function handleSignup(email, password, name) {
    MainApi.register(email, password, name)
      .then(data => {
        if (data) {
          setInfoTooltipOpen(true);
          setIsSignupPopupOpen(false);
        }
      })
      .catch((err) => {
        setErrorMessageInvalid(err);
      });
    return;
  }

  function getAllContent() {
    if (tokenCheck()) {
      MainApi.getContent(tokenCheck(), 'articles')
        .then(cards => {
          setSevedCards(cards);
          setHeaderButtonName(user.name);
          setIsAuthorized(true);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
  }
  // сохранение и удаление карточек
  function handleCardIconClick(card) {
    const keyWord = localStorage.getItem('keyWord');
    MainApi.addCard(card, keyWord, tokenCheck(), 'articles')
      .then(card => console.log('Избранная', card))
  }

  function openPopapSign() {
    if (isLoginPopupOpen) {
      setIsLoginPopupOpen(false);
      setIsSignupPopupOpen(true);
    } else {
      setIsLoginPopupOpen(true);
      setIsSignupPopupOpen(false);
      setInfoTooltipOpen(false);
    }
  }

  return (
    <div className="root">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header
              openPopapSign={() => setIsLoginPopupOpen(true)}
              buttonName={HeaderButtonName}
              isAuthorized={isAuthorized}
            />
            <Main
              isAuthorized={isAuthorized}
              searchByKeyword={handleSearch}
              cards={foundCards}
              isPreloderOpen={isPreloderOpen}
              isFound={notFound}
              cardsListOpen={openCards}
              onCardIconClick={handleCardIconClick}
            />
          </Route>
          {/* <ProtectedRoute exact path="/saved-news"
            component={Header}
            openPopapSign={() => setIsLoginPopupOpen(true)}
            buttonName={HeaderButtonName}
            isSevedNews={isSevedNews}
            isAuthorized={true} >
          </ProtectedRoute> */}
          <ProtectedRoute exact path="/saved-news"
            component={SavedNews}
            user={user}
            cards={sevedCards}
            isSevedNews={isSevedNews}
            isAuthorized={true}
            cardsListOpen={true} >
          </ProtectedRoute>
        </Switch>
        <Signin
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
          inputValidation={validateInput}
          errorMessageEmail={errorMessageEmail}
          errorMessagePass={errorMessagePass}
          errorMessageInvalid={errorMessageInvalid}
          isValidEmail={isValidEmail}
          isValidPass={isValidPass}
          onChangeData={handleSignin}
          openPopapSign={openPopapSign}
        />
        <Signup
          onClose={closeAllPopups}
          isOpen={isSignupPopupOpen}
          inputValidation={validateInput}
          errorMessageEmail={errorMessageEmail}
          errorMessagePass={errorMessagePass}
          errorMessageName={errorMessageName}
          errorMessageInvalid={errorMessageInvalid}
          isValidEmail={isValidEmail}
          isValidPass={isValidPass}
          isValidName={isValidName}
          onChangeData={handleSignup}
          openPopapSign={openPopapSign}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          openPopapSign={openPopapSign}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
