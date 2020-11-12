import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
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
    );
}

export default SearchForm;
