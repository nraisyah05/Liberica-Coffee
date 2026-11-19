import prepareIllustration from '../assets/illustrations/brew-prepare.svg'
import pourIllustration from '../assets/illustrations/brew-pour.svg'
import enjoyIllustration from '../assets/illustrations/brew-enjoy.svg'

const illustrations = [prepareIllustration, pourIllustration, enjoyIllustration]

const steps = [
  ['Siapkan', 'Gunakan kopi yang sudah digiling sesuai alat seduh.'],
  ['Tuang air', 'Gunakan air panas dan tuang secara perlahan.'],
  ['Nikmati', 'Sesuaikan takaran dan waktu seduh dengan selera.'],
]

export default function Serving() {
  return (
    <>
      <section id="penyajian" className="section section-focus panel serving" aria-labelledby="serving-title">
        <p className="eyebrow" data-reveal>06 / NIKMATI</p>
        <h2 id="serving-title" data-reveal>Seduh sesuai seleramu</h2>
        <p data-reveal>Untuk hasil seduhan yang nikmat, perhatikan takaran, suhu air, ukuran gilingan, dan waktu ekstraksi.</p>
        <ol className="steps" data-reveal-group>
          {steps.map(([title, text], i) => (
            <li className="step" key={title} data-reveal>
              <div className="step-visual">
                <span className="step-number" aria-hidden="true">0{i + 1}</span>
                <img src={illustrations[i]} alt="" width="320" height="200" loading="lazy" decoding="async" />
              </div>
              <div className="step-copy"><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <section id="informasi" className="section panel green-panel trust" aria-labelledby="trust-title">
        <p className="eyebrow" data-reveal>07 / INFORMASI &amp; KEPERCAYAAN</p>
        <h2 id="trust-title" data-reveal>Cerita produk yang bisa ditelusuri</h2>
        <p data-reveal>Informasi ini membantu pembeli mengenal produk, asal kopi, karakter rasa, serta detail kemasan sebelum membeli.</p>
        <p className="trust-note" data-reveal>Lengkapi dengan nama petani / kelompok tani, alamat kebun, metode pengolahan, tanggal sangrai, nomor izin edar (bila ada), dan kontak produsen.</p>
      </section>
    </>
  )
}
