import React from 'react';
import './Preloader.css';

function Preloader() {
    return (
        <section className="preloader">
            <i className="circle-preloader"></i>
            <h2 className="preloader__title">Ничего не найдено</h2>
            <p className="preloader__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
        </section>
    );
}

export default Preloader;