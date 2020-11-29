import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import validator from 'validator';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Siginin from '../Siginin/Siginin';
import { cards, user, errors } from '../../utils/constants';

function App() {

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePass, setErrorMessagePass] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');


  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState();
  const [HeaderButtonName, setHeaderButtonName] = useState('Авторизоваться');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [isPreloderOpen, setIsPreloderOpen] = useState();
  const [openCards, setOpenCards] = useState(false);
  const [notFound, setNotFound] = useState(false);

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

  useEffect(() => {
    if (isAuthorized) {
      return setHeaderButtonName(user.name);
    }
  }, [isAuthorized, user.name])

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
  }

  function searchCards(keyWord) {
    const foundCards = cards.filter((card) => {
      return card.keyWord.toLowerCase() === keyWord.toLowerCase();
    });
    setIsPreloderOpen(false);
    setOpenCards(true);
    if (foundCards.length === 0) {
      setNotFound(true);
      setOpenCards(false);
    }
    return setFoundCards(foundCards);
  };

  function handleSearch(keyWord) {
    setOpenCards(false);
    setNotFound(false);
    setIsPreloderOpen(true);
    setTimeout(searchCards, 3000, keyWord);
  }
  // валидация сложноватая, буду упрощать
  function validateInput(fildName, input) {
    switch (fildName) {
      case 'email':
        setIsValidEmail(validator.isEmail(input));
        if (!isValidEmail) {
          setErrorMessageEmail(errors.email);
        }
        break;
      case 'password':
        setIsValidPass(input.match('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])'));
        if (!isValidEmail) {
          setErrorMessagePass(errors.password);
        }
        break;
      case 'name':
        setIsValidName(input.length > 2);
        setErrorMessageName(errors.name);
        break;
      default:
        break;
    }
  }

  function handleSignin() {
    setIsAuthorized(true);
    closeAllPopups();
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
            />
          </Route>
          {/* <Route path="/siginup">
            children={(isLoginPopupOpen) => {
              return (
                <Siginup
                  onClose={closeAllPopups}
                  isOpen={isLoginPopupOpen}
                />
              )
            }}
          </Route> */}
          <Route path="/saved-news">
            <Header
              openPopapSign={() => setIsLoginPopupOpen(true)}
              buttonName={user.name}
              isSevedNews={true}
              isAuthorized={true}
            />
            <SavedNews
              user={user}
              cards={cards}
              isSevedNews={true}
              isAuthorized={isAuthorized}
              cardsListOpen={true}
            />
          </Route>
        </Switch>
        <Siginin
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
          inputValidation={validateInput}
          errorMessageEmail={errorMessageEmail}
          errorMessagePass={errorMessagePass}
          isValidEmail={isValidEmail}
          isValidPass={isValidPass}
          handleSignin={handleSignin}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
