import React from 'react';
import liberika2 from '../assets/liberika2.jpg';

const Section5 = () => {
  return (
    <section id="section5" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">MENGENAL KOPI LIBERIKA</span>
        </div>
        <div className="content">
          <h1 className="title">Kopi Liberika dari Meranti</h1>
          
          <div className="text-content">
            <h2>Asal Usul</h2>
            <p>
              Kopi Liberika yang kami hadirkan berasal dari Kepulauan Meranti, Riau. 
              Tanah gambut yang kaya mineral di wilayah ini menciptakan kondisi unik 
              untuk pertumbuhan kopi Liberika, menghasilkan karakter rasa yang tidak 
              bisa ditemukan di daerah lain.
            </p>
          </div>

          <div className="illustration">
            <img src={liberika2} alt="Kopi Liberika Meranti" className="product-img" />
          </div>
          
          <div className="text-content">
            <h2>Perbedaan dengan Arabica dan Robusta</h2>
            <div className="comparison-table">
              <div className="comparison-item">
                <h3>Arabica</h3>
                <p>Tumbuh di dataran tinggi (1000-2000 mdpl), rasa halus dan kompleks, asam yang tinggi, body ringan. Cocok untuk specialty coffee.</p>
              </div>
              <div className="comparison-item">
                <h3>Robusta</h3>
                <p>Tumbuh di dataran rendah (0-800 mdpl), rasa pahit dan kuat, kafein tinggi, body tebal. Tahan terhadap hama dan penyakit.</p>
              </div>
              <div className="comparison-item">
                <h3>Liberika</h3>
                <p>Tumbuh di tanah gambut dan dataran rendah, rasa earthy, woody, dan sedikit fruity, body tebal, aroma yang kuat dan unik. Spesialisasi Kepulauan Meranti.</p>
              </div>
            </div>
          </div>
          
          <div className="text-content">
            <h2>Ciri Khas Kopi Liberika</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <h3>Tanah Gambut</h3>
                <p>Tumbuh di tanah gambut kaya mineral yang memberikan karakter unik</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌲</span>
                <h3>Earthy & Woody</h3>
                <p>Profil rasa yang khas dengan nuansa tanah dan kayu</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🍃</span>
                <h3>Sedikit Fruity</h3>
                <p>Aroma buah yang halus sebagai sentuhan khas</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💪</span>
                <h3>Body Tebal</h3>
                <p>Tekstur kopi yang tebal dan kaya di lidah</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👃</span>
                <h3>Aroma Kuat</h3>
                <p>Aroma yang tegas dan membedakan dari varietas lain</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🇮🇩</span>
                <h3>Khas Indonesia</h3>
                <p>Varietas kopi lokal yang eksklusif dari Nusantara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
