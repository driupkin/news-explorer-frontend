import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Main />
        <Footer />
        {/* <Route path="/"></Route>
        <Route path="/saved-news"></Route> */}
      </div>
    </div>
  );
}

export default App;
