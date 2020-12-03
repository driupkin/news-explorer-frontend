import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import validator from 'validator';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Siginin from '../Siginin/Siginin';

function App() {

  const cards = [
    {
      keyWord: "Ладога",
      date: "2 августа, 2019",
      title: "Национальное достояние – парки",
      paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      subtitle: "Дзен",
    },
    {
      keyWord: "Новая Ладога длинное слово",
      date: "2 августа, 2019",
      title: "Национальное достояние – парки",
      paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      subtitle: "Дзен",
    },
    {
      keyWord: "Ладога",
      date: "2 августа, 2019",
      title: "Национальное достояние – парки",
      paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      subtitle: "Дзен",
    },
    {
      keyWord: "Ладога",
      date: "2 августа, 2019",
      title: "Национальное достояние – парки",
      paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      subtitle: "Дзен",
    },
    {
      keyWord: "Ладога",
      date: "2 августа, 2019",
      title: "Национальное достояние – парки",
      paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      subtitle: "Дзен",
    }
  ]

  const [isValid, setIsValid] = useState();
  const [isValidInput, setIsValidInput] = useState();
  const [errorMessege, setErrorMessege] = useState('');
  const errors = {
    email: "Неправильный формат email",
    password: "Парольне соответствует требованиям",
    name: "Слишком короткое имя"
  }

  const user = { name: "Стасон" }

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState();
  const [HeaderButtonName, setHeaderButtonName] = useState('Авторизоваться');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [isPreloderOpen, setIsPreloderOpen] = useState();

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
    return setFoundCards(foundCards);
  };

  function handleSearch(keyWord) {
    setIsPreloderOpen(true);
    setTimeout(searchCards, 5000, keyWord);
  }

  function validateInput(fildName, input) {
    switch (fildName) {
      case 'email':
        setIsValidInput(validator.isEmail(input));
        setErrorMessege(errors.email);
        break;
      case 'password':
        setIsValidInput(input.length > 2);
        setErrorMessege(errors.password);
        break;
      default:
        break;
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
              buttonName={HeaderButtonName}
              isSevedNews={true}
              isAuthorized={isAuthorized}
            />
            <SavedNews
              user={user}
              cards={cards}
              isSevedNews={true}
              isAuthorized={isAuthorized}
            />
          </Route>
        </Switch>
        <Siginin
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
          inputValidation={validateInput}
          isValidInput={isValidInput}
          errorMessege={errorMessege}
          isValid={isValid}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
