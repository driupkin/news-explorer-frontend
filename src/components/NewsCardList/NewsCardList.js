import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <div>
            {/* если длинна массива, переданных карточек = 0 - ничего не отрисовываем */}
            {props.isOpen
                ? <section className={`elements ${props.isSevedNews ? 'elements_nopadding' : ''}`}>
                    {props.children}
                    <div className="elements__container">
                        {props.cards.map((card, i) => (
                            <NewsCard
                                isAuthorized={props.isAuthorized}
                                isSevedNews={props.isSevedNews}
                                card={card}
                                key={i}
                            />
                        ))}
                    </div>
                    <button className={`elements__button ${props.isSevedNews ? 'elements__button_none' : ''}`}>Показать еще</button>
                </section>
                : ''
            }
        </div>
    )
}

export default NewsCardList;
