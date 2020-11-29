import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Siginin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        const name = e.target.name;
        const value = e.target.value;
        setEmail(value);
        props.inputValidation(name, value);
    }

    function handleChangePassword(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPassword(value);
        props.inputValidation(name, value);
    }

    return (
        <PopupWithForm
            tiltle={'Вход'}
            inputName={''}
            buttonName={'Войти'}
            linkName={'Зарегистрироваться'}
            link={'/siginup'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            isValid={props.isValid}
        >
            <h2 className="form__title">Email</h2>
            <input
                value={email}
                className="form__input"
                type="email"
                onChange={handleChangeEmail}
                name="email"
            />
            <span
                className='form__input-error'
            >{!props.isValidInput 
            ? props.errorMessege 
            : ''}</span>
            <h2 className="form__title">Пароль</h2>
            <input
                value={password}
                className="form__input"
                type="password"
                onChange={handleChangePassword}
                name="password"
            />
            <span
                className='form__input-error'
            >{!props.isValidInput 
            ? props.errorMessege 
            : ''}</span>
        </PopupWithForm>
    )
}

export default Siginin;