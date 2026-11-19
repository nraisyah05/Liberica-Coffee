import coffeeCherries from '../assets/liberika.jpg'
import coffeeComparison from '../assets/liberika2.jpg'

const Section1 = () => (
  <>
    <section id="section1" className="hero section section-focus" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">KENALI KOPI KHAS NUSANTARA</p>
        <h1 id="hero-title">KOPI<br />LIBERIKA</h1>
        <p className="hero-subtitle">Aroma khas, rasa yang berkarakter.</p>
      </div>
      <img className="hero-photo" src={coffeeCherries} alt="Buah kopi merah yang tumbuh pada cabang di antara dedaunan hijau" width="1080" height="607" fetchPriority="high" decoding="async" />
      <p className="hero-caption">Semua minuman kopi di Kedai 1866 menggunakan kopi Liberika. Dari kopi hitam hingga kopi susu, nikmati karakter khas Liberika dalam setiap sajian.</p>
    </section>
    <section id="tentang" className="section section-focus panel about" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow" data-reveal="right">01 / TENTANG LIBERIKA</p>
        <h2 id="about-title" data-reveal="right">Apa itu kopi Liberika?</h2>
        <p data-reveal="right">Liberika adalah salah satu jenis kopi dari spesies Coffea liberica. Tanamannya dapat tumbuh tinggi dengan daun lebar dan biji yang relatif besar serta bentuk yang tidak beraturan.</p>
        <p data-reveal="right">Di Indonesia, Liberika tumbuh antara lain di wilayah Riau dan Jambi. Karakter uniknya membuat kopi ini menarik untuk dikenali lebih dekat.</p>
      </div>
      <figure className="coffee-comparison" data-reveal="left">
        <img src={coffeeComparison} alt="Perbandingan tampilan biji kopi Arabica, Liberica, dan Robusta" width="1920" height="1080" loading="lazy" decoding="async" />
        <figcaption>Kenali bentuk biji kopi Arabika, Liberika, dan Robusta.</figcaption>
      </figure>
    </section>
  </>
)

export default Section1
