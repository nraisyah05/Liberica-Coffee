const coffeeTypes = [
  { name: 'Arabica', habitat: 'Dataran tinggi', description: 'Tumbuh di dataran tinggi (1.000–2.000 mdpl), rasa halus dan kompleks, keasaman tinggi, serta body ringan. Cocok untuk specialty coffee.' },
  { name: 'Robusta', habitat: 'Dataran rendah', description: 'Tumbuh di dataran rendah (0–800 mdpl), rasa pahit dan kuat, kafein tinggi, serta body tebal. Tahan terhadap hama dan penyakit.' },
  { name: 'Liberika', habitat: 'Lahan gambut', description: 'Tumbuh di tanah gambut dan dataran rendah, dengan rasa earthy, woody, sedikit fruity, body tebal, serta aroma yang kuat dan unik. Dikenal sebagai kopi khas Kepulauan Meranti.', featured: true },
]

const features = [
  { title: 'Tanah Gambut', icon: 'sprout', description: 'Tumbuh di lahan gambut yang memberi karakter khas pada kopi.' },
  { title: 'Earthy & Woody', icon: 'tree', description: 'Profil rasa dengan nuansa tanah dan kayu yang khas.' },
  { title: 'Sedikit Fruity', icon: 'leaf', description: 'Nuansa buah yang halus sebagai sentuhan rasa.' },
  { title: 'Body Tebal', icon: 'cup', description: 'Tekstur kopi yang tebal dan terasa kaya di lidah.' },
  { title: 'Aroma Kuat', icon: 'aroma', description: 'Aroma tegas yang menjadi bagian dari karakternya.' },
  { title: 'Khas Indonesia', icon: 'globe', description: 'Bagian dari cerita kopi lokal, termasuk dari Kepulauan Meranti.' },
]

function FeatureIcon({ type }) {
  const shapes = {
    sprout: <><path d="M12 21v-9M12 16C5 16 3 12 3 7c6 0 9 3 9 9ZM12 12c0-5 3-8 9-8 0 5-3 8-9 8Z" /></>,
    tree: <><path d="m12 3-6 7h3l-5 7h16l-5-7h3L12 3ZM12 17v4M9 21h6" /></>,
    leaf: <><path d="M20 4C9 2 3 8 5 15s16 6 15-11ZM5 20 16 9" /></>,
    cup: <><path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 9h1a3 3 0 0 1 0 6h-1M8 3v2M13 3v2" /></>,
    aroma: <><path d="M5 20h14M7 16c-3-3 3-4 0-7M12 16c-4-4 4-6 0-11M17 16c-3-3 3-4 0-7" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" /></>,
  }
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[type]}</svg>
}

const Section2 = () => (
  <>
    <section id="section2" className="section character" aria-labelledby="character-title">
      <p className="eyebrow">02 / KARAKTER RASA</p>
      <h2 id="character-title">Kenali karakter<br className="mobile-break" /> secangkir Liberika</h2>
      <ul className="flavor-tags" aria-label="Karakter rasa">
        <li>Buah tropis</li><li>Kayu</li><li>Cokelat</li>
      </ul>
      <p>Aroma dan rasa dapat bervariasi menurut asal kebun, proses pascapanen, tingkat sangrai, dan cara penyeduhan. Beberapa Liberika memiliki nuansa buah tropis seperti nangka, aroma kayu, dan body yang tebal.</p>
      <p className="taste-note">Catatan: deskripsi rasa merupakan gambaran umum, bukan jaminan profil setiap produk.</p>
      <div className="coffee-differences" aria-labelledby="differences-title">
        <h3 id="differences-title" className="information-heading">Perbedaan dengan Arabica dan Robusta</h3>
        <div className="variety-list">
          {coffeeTypes.map(coffee => (
            <article className={`variety-card${coffee.featured ? ' variety-card-featured' : ''}`} key={coffee.name}>
              <div className="variety-heading"><h4>{coffee.name}</h4><span>{coffee.habitat}</span></div>
              <p>{coffee.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="coffee-features" aria-labelledby="features-title">
        <h3 id="features-title" className="information-heading">Ciri Khas Kopi Liberika</h3>
        <div className="coffee-features-grid">
          {features.map(feature => (
            <article className="coffee-feature" key={feature.title}>
              <span className="coffee-feature-icon"><FeatureIcon type={feature.icon} /></span>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="asal" className="section panel green-panel origin" aria-labelledby="origin-title">
      <p className="eyebrow">03 / JEJAK DAERAH</p>
      <h2 id="origin-title">Liberika dari tanah Riau</h2>
      <p>Kabupaten Kepulauan Meranti dikenal dengan kopi Liberika yang tumbuh di kawasan lahan gambut dataran rendah. Lingkungan tumbuh ini menjadi bagian dari cerita dan identitas kopi lokal.</p>
    </section>
  </>
)

export default Section2
