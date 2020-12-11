import React from 'react';
import './Preloader.css';

function Preloader(props) {
    return (
        <div>
            <section className={`preloader ${props.isPreloderOpen ? 'preloader_opened' : ''}`}>
                <i className="circle-preloader"></i>
                <p className="preloader__subtitle">Идет поиск новостей...</p>
            </section>
        </div>
    );
}

export default Preloader;
