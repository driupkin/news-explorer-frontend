import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Navigation from '../Navigation/Navigation';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <Navigation>
                <div className="footer__link-container">
                    <Link to="/"
                        className="footer__link">Главная</Link>
                    <div>
                        <a href="https://yandex.ru/"
                            className="footer__link"
                            target="blank">Яндекс.</a>
                        <a href="https://praktikum.yandex.ru"
                            className="footer__link"
                            target="blank">Практикум</a>
                    </div>
                </div>
                <a href="https://github.com"
                    className="footer__link footer__link_git-icon"
                    target="blank"></a>
                <a href="https://www.facebook.com"
                    className="footer__link footer__link_fb-icon"
                    target="blank"></a>
            </Navigation>
        </footer>
    );
}

export default Footer;