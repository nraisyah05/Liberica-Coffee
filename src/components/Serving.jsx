const steps = [
  ['Cara mudah seduh kopi Liberika', 'Ikuti langkah sederhana berikut untuk menikmati kopi Liberika.'],
  ['Siapkan takaran yang pas', 'Gunakan kopi Liberika dan takaran yang sesuai dengan alat seduh.'],
  ['Perhatikan suhu air', 'Panaskan air, lalu tunggu sebentar agar suhunya sesuai untuk menyeduh.'],
  ['Basahi bubuk kopi', 'Tuangkan sedikit air panas secara merata untuk membasahi bubuk kopi.'],
  ['Tuangkan sisa air panas', 'Tambahkan air secara perlahan hingga mencapai takaran yang diinginkan.'],
  ['Tunggu hingga siap', 'Biarkan kopi terekstraksi selama beberapa menit.'],
  ['Selamat menikmati', 'Sajikan kopi Liberika dan nikmati karakter rasanya.'],
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
                <img src={`/tahap${i + 1}.png`} alt={`Tahap ${i + 1}: ${title}`} width="640" height="640" loading="lazy" decoding="async" />
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
