import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {

    const [keyWord, setKeyWord] = useState('');

    function handeleKeyWordchange(e) {
        setKeyWord(e.target.value);
    }

    function handleReqNews(e) {
        e.preventDefault();
        props.searchWord(keyWord);
        setKeyWord('');
    }


    return (
        <section className="search">
            <div className="search__container">
                <h1 className="search__title">Что творится в мире?</h1>
                <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form className="search__form" onSubmit={handleReqNews}>
                    <fieldset className="search__field">
                        <input
                            value={keyWord}
                            onChange={handeleKeyWordchange}
                            className="search__string"
                            placeholder="Введите тему новости"
                            type="text"
                            required minLength="2"
                            maxLength="200"
                        />
                        <button
                            type="submit"
                            className="search__button"
                        onClick={props.onClick}
                        >Искать</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
