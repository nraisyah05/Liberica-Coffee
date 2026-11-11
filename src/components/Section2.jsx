import React from 'react';

const Section2 = () => {
  return (
    <section id="section2" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">MENGENAL KEDAI 1866</span>
        </div>
        <div className="content">
          <h1 className="title">Mengenal Kopi Meranti</h1>
          
          <div className="tags">
            <button className="tag-btn">Earthy</button>
            <button className="tag-btn">Woody</button>
            <button className="tag-btn">Fruity</button>
          </div>
          
          <div className="text-content">
            <p>
              Kedai 1866 hadir dengan spesialisasi kopi Liberika khas Kepulauan Meranti, Riau. 
              Kopi Liberika tumbuh di tanah gambut yang unik, menciptakan karakter rasa 
              yang tidak bisa ditemukan pada varietas Arabika atau Robusta.
            </p>
            <p>
              Setiap cangkir Kopi 1866 adalah perjalanan rasa - dari aroma yang kuat 
              hingga body yang tebal, menghadirkan pengalaman otentik yang kaya karakter.
            </p>
          </div>
          
          <div className="dark-section">
            <h2>Komitmen Kami</h2>
            <p>
              Kami percaya setiap cangkir kopi memiliki cerita. Di Kedai 1866, 
              kami berkomitmen untuk menghadirkan kopi Liberika berkualitas terbaik 
              dari petani lokal, mendukung ekonomi daerah, dan melestarikan warisan 
              kopi Nusantara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
