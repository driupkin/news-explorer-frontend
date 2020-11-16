import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (<div>
        {props.cards.length !== 0
            ? <section className="elements">
                {props.children}
                <div className="elements__container">
                    {props.cards.map((card, i) => (
                        <NewsCard
                            isSevedNews={props.isSevedNews}
                            card={card}
                            key={i}
                        />
                    ))}

                </div>
            </section>
            : ''}
    </div>
    )
}

export default NewsCardList;
