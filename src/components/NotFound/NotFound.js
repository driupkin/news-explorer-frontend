import React from 'react';
import './NotFound.css';

function NotFound(props) {

    return (
        <section className={`not-found ${props.isOpen ? 'not-found_opened' : ''}`}>
            <div className="not-found__image"></div>
            <h2 className="not-found__title">Ничего не найдено</h2>
            <p className="not-found__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
        </section>
    )
}

export default NotFound;