import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Siginin(props) {

    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });

    function handleChangeData(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues({ [name]: value });
    }



    const inputs = [
        {
            inputName: "Email",
            inputType: "email",
            value: inputValues.email,
            name: "email"
        },
        {
            inputName: "Пароль",
            inputType: "text",
            value: inputValues.password,
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
        />
    )
}

export default Siginin;