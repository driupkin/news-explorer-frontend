import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';

function Main() {
    return (
        <main className="content">
            <section className="search">
                <div className="search__container">
                    <h1 className="search__title">Что творится в мире?</h1>
                    <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <fieldset className="search__field">
                        <input className="search__string" />
                        <button className="search__button">Искать</button>
                    </fieldset>
                </div>
            </section>
            <section className="preloader">
                <Preloader />
            </section>
            <section className="author">
                <img className="author__avatar" alt="Аватар" src="https://www.cossa.ru/upload/main/a07/b758a5110a809c48845502fcd7e8100f_unnamed-_1_.jpg" />
                <div className="author__about">
                    <h2 className="author__title">Об авторе</h2>
                    <p className="author__subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                    <p className="author__subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                </div>
            </section>
        </main>
    );
}

export default Main;
