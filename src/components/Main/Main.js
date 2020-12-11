import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';

function Main(props) {
    return (
        <main className="content">
            <SearchForm
                searchWord={props.searchByKeyword}
            />
            <NotFound isOpen={props.isFound} />
            <NewsCardList
                isAuthorized={props.isAuthorized}
                cards={props.cards}
                isOpen={props.cardsListOpen}
            >
                <h2 className="elements__title">Результаты поиска</h2>
            </NewsCardList>
            <Preloader
                isPreloderOpen={props.isPreloderOpen}
                cards={props.cards}
            />
            <About />
        </main>
    );
}

export default Main;
