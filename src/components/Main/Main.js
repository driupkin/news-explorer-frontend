import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main(props) {
    return (
        <main className="content">
            <SearchForm 
            searchWord={props.searchByKeyword}
            />
            <NewsCardList 
            isVisible={props.isCardsVisible}
            cards={props.cards}
            />           
            <Preloader />
            <About />
        </main>
    );
}

export default Main;
