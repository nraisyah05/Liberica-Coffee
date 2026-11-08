import React from 'react';

const Section5 = () => {
  return (
    <section id="section5" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Seduh sesuai seleramu</h1>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Siapkan</h3>
                <p>Takar 10-15 gram kopi Liberika untuk setiap 200ml air</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Tuang air</h3>
                <p>Gunakan air dengan suhu 90-95°C untuk hasil terbaik</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Nikmati</h3>
                <p>Diamkan selama 4-5 menit sebelum disajikan</p>
              </div>
            </div>
          </div>
          
          <div className="dark-section">
            <h2>Cerita produk yang bisa ditelusuri</h2>
            <p>
              Setiap biji kopi memiliki cerita. Dari petani lokal hingga ke tangan Anda, 
              kami memastikan kualitas dan keaslian produk kami tetap terjaga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
