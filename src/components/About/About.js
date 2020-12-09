import React from 'react';
import './About.css';

function About() {
    return (
        <section className="author">
            <img className="author__avatar" alt="Аватар" src="https://www.cossa.ru/upload/main/a07/b758a5110a809c48845502fcd7e8100f_unnamed-_1_.jpg" />
            <div className="author__about">
                <h2 className="author__title">Об авторе</h2>
                <p className="author__subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="author__subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    );
}

export default About;
