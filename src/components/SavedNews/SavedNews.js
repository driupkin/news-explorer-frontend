import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
    return (
        <div>
            <section className="author">
                <h2 className="author__title">Сохранённые статьи</h2>
            </section>
            <NewsCardList
                isSevedNews={props.isSevedNews}
                cards={props.cards}
            />
        </div>
    )
}

export default SavedNews;
