import React, { useState } from 'react';

import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

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
        ${props.isSevedNews ? 'header_theme_white' : ''}
        ${isOpen ? `header_menu_opened ${props.isSevedNews ? 'header_theme_white_opened' : ''}` : ''}
        `}>
            <a
                className={`header__logo ${props.isSevedNews ? 'header__logo_theme_white' : ''}`}
                href="/"
            />
            <Navigation
                header={true}
                isOpen={isOpen} >
                <div
                    className={`header__links-container 
                ${props.isSevedNews ? 'header__links-container_theme_white' : ''}`}>
                    <a
                        href="/"
                        className={`header__link ${props.isSevedNews
                            ? 'header__link_theme_white'
                            : 'header__link_undeline'}`
                        }>Главная</a>
                    {props.isAuthorized
                        ? <a
                            href="/saved-news"
                            className={
                                `header__link 
                        ${props.isSevedNews
                                    ? 'header__link_theme_white header__link_undeline'
                                    : ''}`
                            }>Сохранённые статьи</a>
                        : ''}
                    <button
                        className={`header__button ${props.isSevedNews ? 'header__button_theme_white' : ''}`}
                        onClick={handelOpenPopap}
                    >{props.buttonName}
                        <div
                            className={
                                `header__button-icon 
                            ${props.isAuthorized ? 'header__button-icon_authorized' : ''}
                            ${props.isSevedNews ? 'header__button-icon_theme_white' : ''}`
                            }>
                        </div>
                    </button>
                </div>
            </Navigation>
            <button
                className={`header__button-popup 
            ${isOpen ? 'header__button-popup_opened' : ''}
            ${props.isSevedNews ? 'header__button-popup_theme_white' : ''}`}
                onClick={handleOpenMenu} />
        </header>
    )
}

export default Header;