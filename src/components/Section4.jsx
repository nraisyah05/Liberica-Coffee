import React from 'react';

const Section4 = () => {
  return (
    <section id="section4" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Pilih ukuran kemasan</h1>
          
          <div className="cards-container">
            <div className="card">
              <div className="card-header">
                <span className="weight">100 gram</span>
              </div>
              <div className="card-body">
                <span className="price">Rp50.000</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <span className="weight">250 gram</span>
              </div>
              <div className="card-body">
                <span className="price">Rp105.000</span>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <span className="weight">500 gram</span>
              </div>
              <div className="card-body">
                <span className="price">Rp183.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
