import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onChangeData(...props.values);
    }

    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__button"
                    onClick={props.onClose}
                />
                <h2 className="popup__title">{props.tiltle}</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <fieldset className="form__field">
                        {props.inputs.map((e, i) => {
                            return (
                                <div className="form__input-container" key={i} >
                                    <h2 className="form__title">{e.inputName}</h2>
                                    <input
                                        value={e.value || ''}
                                        className="form__input"
                                        type={e.inputType}
                                        onChange={props.onChange}
                                        name={e.name}
                                    />
                                    <span
                                        className='form__input-error'
                                        id={`${e.name}-input-error`}
                                    >{!props.isValidInput && e.name === props.input
                                        ? props.errorMessege
                                        : ''}</span>
                                </div>
                            )
                        })}
                    </fieldset>
                    <button className={`form__button ${props.isValid ? '' : 'form__button_inactive'}`}>{props.buttonName}</button>
                </form>
                <p className="popup_subtitle">или&ensp;
                    <a className="popup__link" href={props.link}>{props.linkName}</a>
                </p>
            </div>
        </section>

    );
}

export default PopupWithForm;
