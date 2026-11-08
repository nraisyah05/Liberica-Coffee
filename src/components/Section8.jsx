import React from 'react';

const Section8 = () => {
  return (
    <section id="section8" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Pesan Sekarang</h1>
          
          <div className="order-section">
            <div className="order-info">
              <h2>Kontak Kami</h2>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">liberika@rasanusantara.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">WhatsApp:</span>
                <span className="contact-value">+62 812 3456 7890</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Alamat:</span>
                <span className="contact-value">Jl. Kopi Liberika No. 88, Pekanbaru, Riau</span>
              </div>
            </div>
            
            <div className="social-links">
              <h2>Ikuti Kami</h2>
              <div className="social-icons">
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="dark-section">
            <h2>Terima Kasih</h2>
            <p>
              Terima kasih telah mendukung kopi lokal Indonesia. 
              Dengan memilih Kopi Liberika, Anda turut membantu petani lokal 
              dan melestarikan warisan kopi Nusantara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
