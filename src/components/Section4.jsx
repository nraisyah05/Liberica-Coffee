const questions = [
  ['Apa bedanya Liberika dengan Arabika?', 'Liberika berasal dari spesies yang berbeda dan umumnya memiliki biji lebih besar serta profil aroma yang khas.'],
  ['Apakah rasa Liberika selalu seperti nangka?', 'Tidak. Catatan rasa dapat berbeda tergantung asal, proses, sangrai, dan teknik seduh.'],
  ['Bagaimana menyimpan kopi?', 'Simpan dalam wadah tertutup rapat, di tempat sejuk dan kering, jauh dari sinar matahari langsung.'],
]

const Section4 = () => (
  <>
    <section id="section4" className="section panel faq" aria-labelledby="faq-title">
      <p className="eyebrow">08 / TANYA JAWAB</p>
      <h2 id="faq-title">Pertanyaan yang sering muncul</h2>
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>
        ))}
      </div>
    </section>
    <footer id="kontak" className="section panel site-footer">
      <div className="footer-layout">
        <div className="footer-top">
          <div className="footer-copy">
            <p className="eyebrow">SECANGKIR CERITA DARI RIAU</p>
            <h2>Kenali. Nikmati. Dukung kopi lokal.</h2>
          </div>
          <div className="footer-contact-stack">
            <div className="footer-address-row">
            <a className="footer-icon-link" href="https://www.instagram.com/kedai.1866?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Kedai 1866 (@kedai.1866)" title="Instagram @kedai.1866">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
              <div className="location-heading">
                <h3>Ikuti keseharian kami</h3>
                <a className="footer-instagram-handle" href="https://www.instagram.com/kedai.1866?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@kedai.1866</a>
              </div>
            </div>
            <div className="footer-address-row">
              <a className="footer-icon-link" href="https://share.google/jzuQrcdnslIYMBZzX" target="_blank" rel="noopener noreferrer" aria-label="Lokasi Kedai 1866 di Google Maps" title="Buka lokasi di Google Maps">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </a>
              <div className="location-heading">
                <h3 id="location-title">Temukan Kedai 1866</h3>
                <address>Jl. Marsan Sejahtera, Sidomulyo Barat, Tuah Madani, Pekanbaru, Riau 28294</address>
              </div>
            </div>
          </div>
        </div>
        <div className="location-map">
          <iframe title="Peta lokasi Kedai 1866, Jalan Marsan Sejahtera, Pekanbaru" src="https://maps.google.com/maps?q=Kedai%201866&output=embed&hl=id" width="1200" height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </footer>
  </>
)

export default Section4
