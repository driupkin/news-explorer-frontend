import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
    return (
<div className="card">
    <div className="card__key-word">{props.card.keyWord}</div>
    <button className={`card__icon ${props.isSevedNews ? 'card__trash-icon' : ''}`} />
    <img 
    className="card__image"
     alt="Изображение новости"
     src="https://a.d-cd.net/77eeb6ds-1920.jpg"
     />
    <div className="card__text">
    <div className="card__date">{props.card.date}</div>
    <h2 className="card__title">{props.card.title}</h2>
    <p className="card__paragraph">{props.card.paragraph}</p>
    <div className="card__subtitle">{props.card.subtitle}</div>
    </div>
</div>
    )
}

export default NewsCard;
