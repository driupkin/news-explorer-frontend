import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Signup(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        (props.isValidEmail && props.isValidPass && props.isValidName)
            ? setIsValid(true)
            : setIsValid(false);
    }, [props.isValidEmail, props.isValidName, props.isValidPass]);

    function handleChangeData(e) {
        const name = e.target.name;
        const value = e.target.value;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
        name === 'name' && setName(value);
        props.inputValidation(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onChangeData(email, password, name);
    }

    return (
        <PopupWithForm
            title={'Регистрация'}
            inputName={''}
            buttonName={'Зарегистрироваться'}
            linkName={'Войти'}
            link={'/signin'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            isValid={isValid}
            onSubmit={handleSubmit}
            // onChangeData={props.handleSignup}
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
            <h2 className="form__title">Имя</h2>
            <input
                value={name}
                className="form__input"
                type="text"
                onChange={handleChangeData}
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