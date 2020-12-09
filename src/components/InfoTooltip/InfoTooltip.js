import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip(props) {

    return (
        <PopupWithForm
            modName="info"
            linkName="Войти"
            isOpen={props.isOpen}
            onClose={props.onClose}
            title="Пользователь успешно зарегистрирован!"
            openPopapSign={props.openPopapSign}
        />
    );
}

export default InfoTooltip;