import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav className={`navigation 
        ${props.header ? 'navigation_header' : ''}
        ${props.isOpen ? 'navigation_header_opened' : ''}`}>
            {props.children}
        </nav>
    )
}

export default Navigation;
