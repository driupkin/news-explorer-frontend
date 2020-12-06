import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isSevedNews, setIsSevedNews] = useState(false);

    function handleOpenMenu() {
        if (isOpen) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }

    function handelOpenPopap() {
        props.openPopapSign();
        setIsOpen(false);
    }

    return (
        <header className={`header 
        ${isSevedNews ? 'header_theme_white' : ''}
        ${isOpen ? `header_menu_opened ${isSevedNews ? 'header_theme_white_opened' : ''}` : ''}
        `}>
            <Link
                onClick={() => setIsSevedNews(false)}
                to="/"
                className={`header__logo ${isSevedNews ? 'header__logo_theme_white' : ''}`}

            />
            <Navigation
                header={true}
                isOpen={isOpen} >
                <div
                    className={`header__links-container 
                ${isSevedNews ? 'header__links-container_theme_white' : ''}`}>
                    <Link
                        onClick={() => setIsSevedNews(false)}
                        to="/"
                        className={`header__link ${isSevedNews
                            ? 'header__link_theme_white'
                            : 'header__link_undeline'}`
                        }>Главная</Link>
                    {props.isAuthorized
                        ? <Link
                            onClick={() => setIsSevedNews(true)}
                            to="/saved-news"
                            className={
                                `header__link 
                        ${isSevedNews
                                    ? 'header__link_theme_white header__link_undeline'
                                    : ''}`
                            }>Сохранённые статьи</Link>
                        : ''}
                    <button
                        className={`header__button ${isSevedNews
                            ? 'header__button_theme_white'
                            : ''}`}
                        onClick={handelOpenPopap}
                    >{props.buttonName}
                        <span
                            className={
                                `header__button-icon 
                            ${props.isAuthorized ? 'header__button-icon_authorized' : ''}
                            ${isSevedNews ? 'header__button-icon_theme_white' : ''}`
                            }>
                        </span>
                    </button>
                </div>
            </Navigation>
            <button
                className={`header__button-popup 
            ${isOpen ? 'header__button-popup_opened' : ''}
            ${isSevedNews ? 'header__button-popup_theme_white' : ''}`}
                onClick={handleOpenMenu} />
        </header>
    )
}

export default Header;