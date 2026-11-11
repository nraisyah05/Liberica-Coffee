import React from 'react';
import produk1 from '../assets/produk1.jpg';
import produk2 from '../assets/produk2.jpg';
import produk3 from '../assets/produk3.jpg';
import produk4 from '../assets/produk4.jpg';

const Section3 = () => {
  const menuItems = [
    {
      name: 'Kopi Susu',
      price: 'Rp14.000',
      image: produk1,
      desc: 'Kopi Liberika dengan susu segar'
    },
    {
      name: 'Kopi O Liberika',
      price: 'Rp12.000',
      image: produk2,
      desc: 'Kopi hitam murni dari biji Liberika'
    },
    {
      name: 'Kopi Susu Aren Liberika',
      price: 'Rp16.000',
      image: produk3,
      desc: 'Kopi Liberika dengan gula aren asli'
    },
    {
      name: 'Signature Affogato Liberika',
      price: 'Rp19.000',
      image: produk4,
      desc: 'Es krim dengan espresso Liberika panas'
    }
  ];

  return (
    <section id="section3" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">MENU KAMI</span>
        </div>
        <div className="content">
          <h1 className="title">Menu Kopi Liberika</h1>
          <p className="subtitle">100% Kopi Liberika - Tanpa Arabika, Tanpa Robusta</p>
          
          <div className="menu-container">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-img" />
                <div className="menu-info">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-desc">{item.desc}</p>
                  <span className="menu-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
