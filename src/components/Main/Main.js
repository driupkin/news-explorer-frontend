import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';

function Main() {
    return (
        <main className="content">
            <SearchForm />
            <Preloader />
            <About />
        </main>
    );
}

export default Main;
