import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="content">
            <section className="search">
                <div className="search__container">
                    <div className="search__title">Что творится в мире?</div>
                    <div className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</div>
                    <fieldset className="search__field">
                        <input className="search__string" />
                        <button className="search__button">Искать</button>
                    </fieldset>
                </div>
            </section>
        </main>
    );
}

export default Main;
