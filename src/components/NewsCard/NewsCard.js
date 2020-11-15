import React from 'react';
import './NewsCard.css';

function NewsCard() {
    return (
<div className="card">
    <button className="card__fevor-icon" />
    <img className="card__image" alt="Изображение новости" />
    <div className="card__text">
        <div className="card__date"></div>
        <h2 className="card__title"></h2>
        <p className="card__paragraph"></p>
    </div>
</div>
    )
}

export default NewsCard;
