import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Signup(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        props.isValidEmail && props.isValidPass && props.isValidName && setIsValid(true);
    }, [props.isValidEmail, props.isValidName, props.isValidPass])

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

    function handleChangeName(e) {
        const name = e.target.name;
        const value = e.target.value;
        setName(value);
        props.inputValidation(name, value);
    }

    return (
        <PopupWithForm
            tiltle={'Регистрация'}
            inputName={''}
            buttonName={'Зарегистрироваться'}
            linkName={'Войти'}
            link={'/signin'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            isValid={isValid}
            onChangeData={props.handleSignin}
        >
            <h2 className="form__title">Email</h2>
            <input
                value={email}
                className="form__input"
                type="email"
                onChange={handleChangeEmail}
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
                onChange={handleChangePassword}
                name="password"
                placeholder="Введите пароль"
            />
            <span
                className='form__input-error'
            >{!props.isValidPass && props.errorMessagePass
                ? props.errorMessagePass
                : ''}</span>
            <h2 className="form__title">Имя</h2>
            <input
                value={name}
                className="form__input"
                type="text"
                onChange={handleChangeName}
                name="name"
                placeholder="Введите имя"
            />
            <span
                className='form__input-error'
            >{!props.isValidName && props.errorMessageName
                ? props.errorMessageName
                : ''}</span>
        </PopupWithForm>
    )
}

export default Signup;