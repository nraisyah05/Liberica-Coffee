import React from 'react';

const Section4 = () => {
  return (
    <section id="section4" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">HUBUNGI KAMI</span>
        </div>
        <div className="content">
          <h1 className="title">Kunjungi Kedai 1866</h1>
          <p className="subtitle">Kami menantikan kedatangan Anda</p>
          
          <div className="contact-section">
            <a 
              href="https://www.instagram.com/kedai.1866?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card instagram-card"
            >
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="contact-text">
                <h2>Instagram</h2>
                <p>@kedai.1866</p>
              </div>
              <div className="contact-arrow">→</div>
            </a>
            
            <a 
              href="https://share.google/JtO8lJkPOKj9mIEe6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card maps-card"
            >
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h2>Lokasi</h2>
                <p>Buka di Google Maps</p>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          </div>
          
          <div className="dark-section">
            <h2>Terima Kasih</h2>
            <p>
              Terima kasih telah mendukung kopi lokal Indonesia. 
              Dengan memilih Kopi 1866, Anda turut membantu petani lokal 
              dan melestarikan warisan kopi Liberika Nusantara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
