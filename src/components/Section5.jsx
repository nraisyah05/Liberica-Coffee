import coffeeBeans from '../assets/biji.jpg'

const Section5 = () => (
  <section id="section5" className="section panel product" aria-labelledby="product-title">
    <p className="eyebrow">04 / PRODUK PILIHAN</p>
    <h2 id="product-title">Kenali produk ini</h2>
    <div className="product-layout">
      <img className="product-photo" src={coffeeBeans} alt="Buah kopi, biji kopi sangrai, dan biji kopi kering di dalam karung" width="750" height="500" loading="lazy" decoding="async" />
      <div className="product-copy">
        <h3>Kopi Liberika Meranti</h3>
        <p className="product-description">Kopi khas Kepulauan Meranti, Riau, dengan karakter earthy, woody, dan sedikit fruity.</p>
      </div>
    </div>
  </section>
)

export default Section5
