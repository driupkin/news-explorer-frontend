import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard(props) {

    const [onHover, setOnHover] = useState();
    const [isFavor, setIsFavor] = useState(false);
// вр`еменная функция проверки сохранения карточки
    function addFavor() {
        if (isFavor) {
            setIsFavor(false);
        } else {
            setIsFavor(true);
        }
    }

    function getDate() {
      const date = new Date(2020, 12, 4);
      return date;  
    }
    // props.card.publishedAt
    return (
        <div className="card">
            <div className={`card__key-word-container ${props.isSevedNews ? 'card__key-word-container_opened' : ''}`}>
                <h3 className="card__key-word">{props.card.keyWord}</h3>
            </div>
            <div className="card__icon-container">
                <h3
                    className={`card__popup ${(!props.isAuthorized && onHover) ? 'card__popup_opened' : ''}`}
                >{props.isSevedNews ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}</h3>
                <button
                onClick={addFavor}
                    onMouseOut={() => setOnHover(false)}
                    onMouseOver={() => setOnHover(true)}
                    className={`card__icon 
                    ${props.isSevedNews
                            ? 'card__trash-icon'
                            : `card__fevor-icon ${isFavor
                                ? 'card__fevor-icon_active'
                                : ''}`}`}
                />
            </div>
            <img
                className="card__image"
                alt="Изображение новости"
                src={`${props.card.urlToImage}`}
            />
            <div className="card__text">
                <div className="card__date">{`${new Date(2020, 12, 4)}`}</div>
                <h2 className="card__title">{props.card.title}</h2>
                <p className="card__paragraph">{props.card.description}</p>
                <div className="card__subtitle">{props.card.source.name}</div>
            </div>
        </div>
    )
}

export default NewsCard;
