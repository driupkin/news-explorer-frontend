import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <section className={`elements ${props.isVisible ? 'elements_show' : ''}`}>
            {props.cards ? props.cards.map((card, i) => (
                <NewsCard
                    isSevedNews={props.isSevedNews}
                    card={card}
                    key={i}
                />
            )) : ''}

        </section>
    )
}

export default NewsCardList;
