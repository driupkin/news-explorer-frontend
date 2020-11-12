import React from 'react';
import './Footer.css';
import Navigation from '../Navigation/Navigation';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <Navigation>
                <a href="/" className="footer__link" target="_blank">Главная</a>
                <a href="https://yandex.ru/" className="footer__link" target="_blank">Яндекс.</a>
                <a href="https://praktikum.yandex.ru" className="footer__link" target="_blank">Практикум</a>
                <a href="https://github.com" className="footer__link footer__link_git-icon" target="_blank"></a>
                <a href="https://www.facebook.com" className="footer__link footer__link_fb-icon" target="_blank"></a>
            </Navigation>
        </footer>

    );
}

export default Footer;