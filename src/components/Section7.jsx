import React from 'react';

const Section7 = () => {
  return (
    <section id="section7" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Ulasan Pelanggan</h1>
          
          <div className="reviews-container">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Kopi Liberika ini benar-benar unik! Aroma nangkanya sangat terasa dan rasa yang khas membuatnya berbeda dari kopi lainnya."
              </p>
              <span className="reviewer">— Andi Pratama</span>
            </div>
            
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Sangat puas dengan kualitasnya. Sangrai medium yang pas dan aroma yang menggugah selera setiap pagi."
              </p>
              <span className="reviewer">— Siti Rahayu</span>
            </div>
            
            <div className="review-card">
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">
                "Pengalaman baru dengan kopi lokal Indonesia. Mendukung petani lokal sambil menikmati kopi berkualitas."
              </p>
              <span className="reviewer">— Budi Santoso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
