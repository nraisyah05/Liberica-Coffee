import React, { useEffect } from 'react'
import './App.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section5 from './components/Section5'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Section1 />
      <Section2 />
      <Section5 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default App
