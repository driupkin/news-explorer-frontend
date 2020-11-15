import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <section className="elements">
            {props.cards.map((card, i) => (
                <NewsCard
                    isSevedNews={props.isSevedNews}
                    card={card}
                    key={i}
                />
            ))}

        </section>
    )
}

export default NewsCardList;
