import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNews(props) {

    const currentUser = React.useContext(CurrentUserContext);
    // функция отдаёт 2 первых ключевых слова из массива карточек
    const handleKeyWords = () => {
        const keyWords = props.cards.map((card => {
            return card.keyWord;
        }));
        const twoKeyWords = keyWords.splice(0, 2);
        switch (true) {
            case keyWords.length < 2:
                return twoKeyWords.join(', ') + ' и ' + keyWords.length + '-го другого';
            case 1 < keyWords.length < 5:
                return twoKeyWords.join(', ') + ' и ' + keyWords.length + '-м другим';
            case 4 < keyWords.length < 21:
                return twoKeyWords.join(', ') + ' и ' + keyWords.length + '-ти другим';
            default:
                return '';
        }
    }

    return (
        <div>
            <section className="author-data">
                <h2 className="author-data__title">Сохранённые статьи</h2>
                <p className="author-data__articles">{currentUser.name}, у вас {props.cards.length} сохранённых статей</p>
                <p className="author-data__subtitle">По ключевым словам: {handleKeyWords()}</p>
            </section>
            <NewsCardList
                isAuthorized={props.isAuthorized}
                isVisible={props.isCardsVisible}
                isSevedNews={props.isSevedNews}
                cards={props.cards}
                isOpen={props.cardsListOpen}
                onCardIconClick={props.onCardIconClick}
            />
        </div>
    )
}

export default SavedNews;
