import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {

    const [countCards, setCountCards] = useState(3);

    function showByThreeCards(count) {
        let threeCards;
        if (props.cards.length < 4) {
            return threeCards = props.cards;
        } else {
            return threeCards = props.cards.slice(0, count);
        }
    }

    return (
        <div>
            {props.isOpen
                ? <section className={`elements ${props.isSevedNews ? 'elements_nopadding' : ''}`}>
                    {props.children}
                    <div className="elements__container">
                        {showByThreeCards(countCards).map((card, i) => (
                            <NewsCard
                                isAuthorized={props.isAuthorized}
                                isSevedNews={props.isSevedNews}
                                card={card}
                                key={i}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setCountCards(countCards + 3)}
                        className={`elements__button 
                        ${(props.isSevedNews || props.cards.length <= countCards)
                                ? 'elements__button_none'
                                : ''}`}>Показать еще</button>
                </section>
                : ''
            }
        </div>
    )
}

export default NewsCardList;
