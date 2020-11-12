import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <Navigation>
                <a href="/" className="header__link" target="blank">Главная</a>
                <a href="/" className="header__link" target="blank">Сохранённые статьи</a>
                <button className="header__button">Имя
                    <div className="header__button-icon"></div>
                </button>

            </Navigation>
        </header>
    )
}

export default Header;