import React from 'react';
import liberikaImg from '../assets/liberika.jpg';

const Section1 = () => {
  return (
    <section id="section1" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">KOPI LIBERIKA</h1>
          <p className="subtitle">Aroma khas, rasa yang berkarakter.</p>
          
          <div className="illustration">
            <img src={liberikaImg} alt="Kopi Liberika" className="product-img" />
          </div>
          
          <div className="text-content">
            <h2>Apa itu kopi Liberika?</h2>
            <p>
              Kopi Liberika adalah varietas kopi yang berasal dari Afrika Barat namun 
              tumbuh subur di Indonesia, khususnya di Provinsi Riau. Kopi ini memiliki 
              karakteristik unik yang membedakannya dari varietas Arabika dan Robusta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
