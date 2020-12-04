import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        props.isValidEmail && props.isValidPass
            ? setIsValid(true)
            : setIsValid(false);
    }, [props.isValidEmail, props.isValidPass]);

    function handleChangeData(e) {
        const name = e.target.name;
        const value = e.target.value;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
        props.inputValidation(name, value);
    }
    return (
        <PopupWithForm
            title={'Вход'}
            inputName={''}
            buttonName={'Войти'}
            linkName={'Зарегистрироваться'}
            link={'/siginup'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            isValid={isValid}
            onChangeData={props.handleSignin}
            openPopapSign={props.openPopapSign}
        >
            <h2 className="form__title">Email</h2>
            <input
                value={email}
                className="form__input"
                type="email"
                onChange={handleChangeData}
                name="email"
                placeholder="Введите почту"
            />
            <span
                className='form__input-error'
            >{!props.isValidEmail && props.errorMessageEmail
                ? props.errorMessageEmail
                : ''}</span>
            <h2 className="form__title">Пароль</h2>
            <input
                value={password}
                className="form__input"
                type="password"
                onChange={handleChangeData}
                name="password"
                placeholder="Введите пароль"
            />
            <span
                className='form__input-error'
            >{!props.isValidPass && props.errorMessagePass
                ? props.errorMessagePass
                : ''}</span>
        </PopupWithForm>
    )
}

export default Signin;