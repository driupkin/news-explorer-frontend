import React, { useEffect, useState } from 'react';
import moment from 'moment/min/moment-with-locales';
import { CardsContext } from '../../context/CardsContext';
import './NewsCard.css';

function NewsCard(props) {

    const currentCard = React.useContext(CardsContext);
    const [onHover, setOnHover] = useState();
    const isFavor = currentCard.some(i => i.url === props.card.url);

    function handelIconClick() {
        props.onCardIconClick(props.card);
    }

    // перевод даты в формат по макету
    function getDate() {
        const date = new Date(props.card.publishedAt);
        return moment(date).subtract(1, "days").locale('ru').format('d MMMM, yyyy');
    }

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
                    type='button'
                    name='icon'
                    onClick={handelIconClick}
                    onMouseOut={() => setOnHover(false)}
                    onMouseOver={() => setOnHover(true)}
                    className={`card__icon 
                    ${props.isSevedNews
                            ? 'card__trash-icon'
                            : `card__fevor-icon ${(isFavor && props.isAuthorized)
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
                <div className="card__date">{`${getDate()}`}</div>
                <h2 className="card__title">{props.card.title}</h2>
                <p className="card__paragraph">{props.card.description}</p>
                <a
                    className="card__subtitle"
                    target="blank"
                    href={`${props.card.url}`}
                >{props.card.source.name}</a>
            </div>
        </div>
    )
}

export default NewsCard;
