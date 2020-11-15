import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className={`header ${props.isSevedNews ? 'header_theme_white' : ''}`}>
            <div className={`header__logo ${props.isSevedNews ? 'header__logo_theme_white' : ''}`}></div>
            <Navigation>
                <a href="/" className={`header__link ${props.isSevedNews ? 'header__link_theme_white' : ''}`}>Главная</a>
                <a
                    href="/saved-news"
                    className={`header__link ${props.isSevedNews ? 'header__link_theme_white' : ''}`}>Сохранённые статьи
                </a>
                <button
                    className={`header__button ${props.isSevedNews ? 'header__button_theme_white' : ''}`}
                    onClick={props.onClick}
                >{props.buttonName}
                    <div
                        className={
                            `header__button-icon 
                            ${props.isAuthorized ? 'header__button-icon_authorized' : ''}
                            ${props.isSevedNews ? 'header__button-icon_theme_white' : ''}`
                        }>
                    </div>
                </button>

            </Navigation>
        </header>
    )
}

export default Header;