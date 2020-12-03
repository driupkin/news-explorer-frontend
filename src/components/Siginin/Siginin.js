import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Siginin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fildName, setFildName] = useState('');

    console.log(fildName);

    function handleChangeData(e) {
        const name = e.target.name; console.log(name);
        const value = e.target.value;
        switch (name) {
            case 'email':
                setEmail(value);
                setFildName(name);
                break;
            case 'password':
                setPassword(value);
                setFildName(name);
                break;
            default:
                break;
        }
        // name === 'email' && setEmail(value) && setFildName(name);
        // name === 'password' && setPassword(value) && setFildName(name);
        props.inputValidation(name, value);
    }

    const inputs = [
        {
            inputName: "Email",
            inputType: "email",
            value: email,
            name: "email"
        },
        {
            inputName: "Пароль",
            inputType: "text",
            value: password,
            name: "password"
        },
    ];

    return (
        <PopupWithForm
            tiltle={'Вход'}
            inputs={inputs}
            buttonName={'Войти'}
            linkName={'Зарегистрироваться'}
            link={'/siginup'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onChange={handleChangeData}
            input={fildName}
            isValidInput={props.isValidInput}
            errorMessege={props.errorMessege}
            isValid={props.isValid}
        />
    )
}

export default Siginin;