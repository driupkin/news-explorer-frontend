import React from 'react';
import './Preloader.css';

function Preloader(props) {
    return (
        <div>
            {/* {props.cards.length === 0
                ? <section className="preloader">
                    <div className="preloader__image"></div>
                    <h2 className="preloader__title">Ничего не найдено</h2>
                    <p className="preloader__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
                </section> */}
            <section className={`preloader ${props.isPreloderOpen ? 'preloader_opened' : ''}`}>
                <i className="circle-preloader"></i>
                <p className="preloader__subtitle">Идет поиск новостей...</p>
            </section>
        </div>
    );
}

export default Preloader;
