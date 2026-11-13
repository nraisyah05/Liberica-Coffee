import React from 'react';
import logo from '../assets/logo.png';

const Section1 = () => {
  return (
    <section id="section1" className="section">
      <div className="container">
        <div className="header">
          <img src={logo} alt="Kedai 1866 Logo" className="logo-img" />
        </div>
        <div className="content">
          <h1 className="title">KEDAI 1866</h1>
          <p className="subtitle">Kopi & Kuliner</p>
          
          <div className="text-content">
            <h2>Local Coffee, Local Story</h2>
            <p>
              Menghadirkan cita rasa kopi Liberika asli Kepulauan Meranti, Riau. 
              Tumbuh di tanah gambut yang kaya mineral, dengan aroma yang kuat, body yang tebal, 
              serta karakter earthy, woody, dan sedikit fruity. Hangat, otentik, 
              dan kaya karakter dalam setiap cangkir.
            </p>
            <p>
              Setiap biji kopi yang kami sajikan telah melalui proses seleksi ketat dari petani lokal, 
              kemudian disangrai dengan presisi untuk mengeluarkan karakter terbaik. 
              Tanah gambut unik Meranti menciptakan profil rasa yang kompleks dan berbeda 
              dari varietas kopi lainnya - sebuah warisan Nusantara yang kami lestarikan 
              melalui setiap cangkir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
