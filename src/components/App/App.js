import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm />
        {/* <Route path="/"></Route>
        <Route path="/saved-news"></Route> */}
      </div>
    </div>
  );
}

export default App;
