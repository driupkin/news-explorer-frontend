import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main>
        </Main>
        <Footer />
        {/* <Route path="/"></Route>
        <Route path="/saved-news"></Route> */}
      </div>
    </div>
  );
}

export default App;
