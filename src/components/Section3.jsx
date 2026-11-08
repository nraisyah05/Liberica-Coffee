import React from 'react';
import liberika2Img from '../assets/liberika2.jpg';

const Section3 = () => {
  return (
    <section id="section3" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Kenali produk ini</h1>
          
          <div className="product-image">
            <img src={liberika2Img} alt="Kopi Liberika Meranti" className="product-img" />
          </div>
          
          <div className="product-info">
            <h2>Kopi Liberika Meranti</h2>
            <p className="product-desc">Bubuk kopi • Sangrai medium • Kemasan 100 g</p>
          </div>
          
          <div className="product-table">
            <div className="table-row">
              <span className="label">Asal</span>
              <span className="value">Riau, Indonesia</span>
            </div>
            <div className="table-row">
              <span className="label">Jenis</span>
              <span className="value">Liberika</span>
            </div>
            <div className="table-row">
              <span className="label">Berat bersih</span>
              <span className="value">100 g</span>
            </div>
            <div className="table-row">
              <span className="label">Bentuk</span>
              <span className="value">Bubuk</span>
            </div>
            <div className="table-row">
              <span className="label">Tingkat sangrai</span>
              <span className="value">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
