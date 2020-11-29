import React, { useEffect, useState } from 'react';
import validator from 'validator';

function FormValidator() {
    
        switch (fildName) {
            case ["email"]: console.log('привет')
                setIsValidInput(validator.isEmail(props.input.email));
                setErrorMessege(errors.email);
                break;
            default:
                break;
        }
}