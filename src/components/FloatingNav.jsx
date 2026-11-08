import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const sections = [
    { id: 'section1', label: '1', tooltip: 'Perkenalan' },
    { id: 'section2', label: '2', tooltip: 'Karakter' },
    { id: 'section3', label: '3', tooltip: 'Detail Produk' },
    { id: 'section4', label: '4', tooltip: 'Pilihan' },
    { id: 'section5', label: '5', tooltip: 'Penyajian' },
    { id: 'section6', label: '6', tooltip: 'FAQ' },
    { id: 'section7', label: '7', tooltip: 'Ulasan' },
    { id: 'section8', label: '8', tooltip: 'Pesan' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="floating-nav">
      <div className="nav-container">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.tooltip}
          >
            <span className="nav-label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
