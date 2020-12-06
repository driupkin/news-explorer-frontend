import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {

    function handelOpenPopap() {
        props.openPopapSign();
    }

    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__button"
                    onClick={props.onClose}
                />
                <h2 className="popup__title">{props.title}</h2>
                <form className="form" onSubmit={props.onSubmit}>
                    <fieldset className="form__field">
                        <div className="form__input-container">
                            {props.children}
                        </div>
                    </fieldset>
                    <span className='form__error'>{props.errorMessageInvalid}</span>
                    <button className={`form__button form__button_${props.modName}
                    ${props.isValid
                            ? ''
                            : 'form__button_inactive'}`}>{props.buttonName}</button>
                </form>
                <div className={`popup__subtitle-container popup__subtitle-container_${props.modName}`}>
                    <p className={`popup__subtitle popup__subtitle_${props.modName}`}>или&ensp;</p>
                    <button
                        className={`popup__link popup__link_${props.modName}`}
                        onClick={handelOpenPopap}
                    >{props.linkName}</button>
                </div>
            </div>
        </section>

    );
}

export default PopupWithForm;
