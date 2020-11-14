import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
    const inputs = [
        { inputName: "Email" },
        { inputName: "Пароль" },
        { inputName: "Имя" }
    ];
    return (
        <section className="popup">
            <div className="popup__container">
                <button className="popup__button"></button>
                <h2 className="popup__title">Вход</h2>
                <form className="form">
                    <fieldset className="form__field">
                        {inputs.map((e, i) => {
                            return (
                                <div className="form__input-container">
                                    <h2 className="form__title" key={i}>{e.inputName}</h2>
                                    <input className="form__input" key={i} />
                                </div>
                            )
                        })}
                    </fieldset>
                    <button className="form__button">Войти</button>
                </form>
                <p className="popup_subtitle">или&ensp;
                    <a className="popup__link" href="/">Зарегистрироваться</a>
                </p>
            </div>
        </section>

    );
}

export default PopupWithForm;
