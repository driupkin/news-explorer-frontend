import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Siginup(props) {

    const inputs = [
        {
            inputName: "Email",
            inputType: "email",
            value: ""
        },
        {
            inputName: "Пароль",
            inputType: "text",
            value: ""
        },
        {
            inputName: "Имя",
            inputType: "text",
            value: ""
        }
    ];

    return (
        <PopupWithForm
        tiltle={'Регистрация'}
        inputs={inputs}
        buttonName={'Зарегистрироваться'}
        linkName={'Войти'}
        link={'/siginin'}
        isOpen={props.isOpen}
        onClose={props.onClose}
        />
    )
}

export default Siginup;