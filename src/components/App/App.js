import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SavedNews from '../SavedNews/SavedNews';

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
    keyWord: "Новая Ладога",
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
    keyWord: "Ладога 4",
    date: "2 августа, 2019",
    title: "Национальное достояние – парки",
    paragraph: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
    subtitle: "Дзен",
  }
]

  const user = { name: "Стасон" }

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState();
  const [HeaderButtonName, setHeaderButtonName] = useState('Авторизоваться');
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isCardsVisible, setIsCardsVisible] = useState();
  const [foundCards, setFoundCards] = useState([]);

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

  function handleSearch(keyWord) {
    const foundCards = cards.filter((card) => {
      console.log(keyWord);

      // setIsCardsVisible(true);
      return card.keyWord === keyWord;

    }); console.log(foundCards);
    return setFoundCards(foundCards);
  }

  return (
    <div className="root">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header
              onClick={() => setIsLoginPopupOpen(true)}
              buttonName={HeaderButtonName}
              isAuthorized={isAuthorized}
            />
            <Main
              searchByKeyword={handleSearch}
              isCardsVisible={isCardsVisible}
              cards={foundCards}
            />
          </Route>
          <Route path="/saved-news">
            <Header
              onClick={() => setIsLoginPopupOpen(true)}
              buttonName={HeaderButtonName}
              isSevedNews={true}
              isAuthorized={isAuthorized}
            />
            <SavedNews
              user={user}
              cards={cards}
              isSevedNews={true}
              isCardsVisible={true}
            />
          </Route>
        </Switch>
        <Footer />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
          isAuthorized={isAuthorized}
        />
      </div>
    </div>
  );
}

export default App;
