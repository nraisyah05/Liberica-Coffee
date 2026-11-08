import React from 'react';

const Section2 = () => {
  return (
    <section id="section2" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Kenali karakter secangkir Liberika</h1>
          
          <div className="tags">
            <button className="tag-btn">Buah nangka</button>
            <button className="tag-btn">Kayu</button>
          </div>
          
          <div className="text-content">
            <p>
              Kopi Liberika memiliki profil rasa yang kompleks dengan aroma yang 
              mengingatkan pada buah nangka, asam yang rendah, dan body yang tebal. 
              Cita rasanya dipengaruhi oleh tanah vulkanik dan iklim tropis Indonesia.
            </p>
          </div>
          
          <div className="dark-section">
            <h2>Liberika dari tanah Riau</h2>
            <p>
              Ditanam di tanah gambut dan mineral yang kaya, kopi Liberika Riau 
              menghasilkan kualitas terbaik dengan rasa yang khas dan tidak bisa 
              ditemukan di varietas kopi lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
