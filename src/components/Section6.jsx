import React, { useState } from 'react';

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apa bedanya Liberika dengan Arabika?",
      answer: "Liberika memiliki aroma yang lebih kuat dengan sentuhan buah nangka, body yang lebih tebal, dan tingkat kafein yang berbeda dibandingkan Arabika yang lebih halus dan kompleks."
    },
    {
      question: "Apakah rasa Liberika seperti nangka?",
      answer: "Ya, salah satu karakteristik unik Liberika adalah aroma yang mengingatkan pada buah nangka, namun tetap dengan rasa kopi yang khas dan tidak sepenuhnya seperti buah."
    },
    {
      question: "Bagaimana menyimpan kopi?",
      answer: "Simpan kopi di tempat yang kering, sejuk, dan kedap udara. Hindari paparan sinar matahari langsung dan kelembapan untuk menjaga kualitas rasa."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="section6" className="section">
      <div className="container">
        <div className="header">
          <span className="brand">RASA NUSANTARA</span>
        </div>
        <div className="content">
          <h1 className="title">Pertanyaan yang sering muncul</h1>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="dark-section">
            <h2>Kenali. Nikmati. Dukung kopi lokal.</h2>
            <p className="contact-info">
              Hubungi kami: liberika@rasanusantara.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
