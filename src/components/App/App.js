import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import validator from 'validator';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { errors } from '../../utils/constants';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { CardsContext } from '../../context/CardsContext';
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
  const [currentUser, setCurrentUser] = useState({
    email: '',
    name: ''
  });

  const history = useHistory();

  useEffect(() => {
    setOpenCards(true);
    const articles = localStorage.getItem('articles')
    if (articles) {
      setOpenCards(true);
      setFoundCards(JSON.parse(articles));
    }
  }, []);

  useEffect(() => {
    if (tokenCheck()) {
      getAllContent();
      setIsAuthorized(true);
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
        }
        console.log(foundCards);
        localStorage.setItem('articles', JSON.stringify(foundCards));
        localStorage.setItem('keyWord', keyWord);
        setIsPreloderOpen(false);
        setOpenCards(true);
        return setFoundCards(foundCards);
      })
      .catch((err) => {
        console.log(err);
      });
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
          getCurrentUser();
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
    MainApi.getContent(tokenCheck(), 'articles')
      .then(cards => {
        getCurrentUser();
        setSevedCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  function getCurrentUser() {
    MainApi.getUser(tokenCheck(), 'users/me')
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setHeaderButtonName(res.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/');
    setHeaderButtonName('Авторизоваться');
    setIsAuthorized(false);
  }
  // сохранение и удаление карточек
  function handleCardIconClick(card) {
    if (sevedCards.some(i => i.url === card.url)) { // удаляем
      const newCards = sevedCards.filter(i => i.url === card.url);
      handleDelCard(newCards[0]);
    } else { // сохраняем
      const keyWord = localStorage.getItem('keyWord'); console.log(keyWord);
      MainApi.addCard(card, keyWord, tokenCheck(), 'articles')
        .then(() => {
          getAllContent();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDelCard(card) {
    MainApi.deleteCard(tokenCheck(), 'articles', card._id)
      .then(() => {
        const newCards = sevedCards.filter(item => item._id === card._id ? '' : item);
        setSevedCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={sevedCards}>
        <div className="root">
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Header
                  openPopapSign={() => setIsLoginPopupOpen(true)}
                  buttonName={HeaderButtonName}
                  isAuthorized={isAuthorized}
                  signOut={signOut}
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
              <ProtectedRoute path="/saved-news"
                component={SavedNewsPage}
                isPopapOpen={() => setIsLoginPopupOpen(true)}
                isAuthorized={isAuthorized}
              >
                <Header
                  openPopapSign={() => setIsLoginPopupOpen(true)}
                  buttonName={HeaderButtonName}
                  isSevedNews={true}
                  isAuthorized={isAuthorized}
                  signOut={signOut} />
                <SavedNews
                  cards={sevedCards}
                  isSevedNews={true}
                  isAuthorized={isAuthorized}
                  cardsListOpen={true}
                  onCardIconClick={handleDelCard}
                />
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
      </CardsContext.Provider>
    </CurrentUserContext.Provider >
  );
}

export default App;
