import './App.css';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState();
  const [HeaderButtonName, setHeaderButtonName] = useState('Авторизоваться');
  const [isAuthorized, setIsAuthorized] = useState();

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
  }

  return (
    <div className="root">
      <div className="page">
        <Header
          onClick={() => setIsLoginPopupOpen(true)}
          buttonName={HeaderButtonName}
        />
        <Main />
        <Footer />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isLoginPopupOpen}
          isAuthorized={isAuthorized}
        />
        {/* <Route path="/"></Route>
        <Route path="/saved-news"></Route> */}
      </div>
    </div>
  );
}

export default App;
