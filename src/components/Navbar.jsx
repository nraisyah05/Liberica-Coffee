import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { useSectionNavigation } from '../useSectionNavigation'

const links = [
  ['Beranda', '#section1'],
  ['Tentang', '#tentang'],
  ['Karakter', '#section2'],
  ['Menu Kedai', '#section3'],
  ['Penyajian', '#penyajian'],
  ['Kontak', '#kontak'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const navRef = useRef(null)
  const [active, select] = useSectionNavigation(headerRef, links)

  const navigate = event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    select(event.currentTarget.hash)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    navRef.current.scrollTop = 0

    const closeOutside = event => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    window.addEventListener('resize', closeOnResize)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      window.removeEventListener('resize', closeOnResize)
    }
  }, [open])

  return (
    <header className="site-header" ref={headerRef} onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }}>
      <div className="header-inner">
        <a className="wordmark" href="#section1" aria-label="Kedai 1866 — kembali ke awal" onClick={navigate}>
          <img className="brand-logo" src={logo} alt="Logo Kedai 1866" width="2000" height="2000" />
          <span className="brand-name">KEDAI 1866<span className="brand-tagline">Kopi &amp; Kuliner</span></span>
        </a>
        <button ref={toggleRef} className="nav-toggle" type="button" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav id="main-navigation" ref={navRef} className={`site-nav${open ? ' is-open' : ''}`} aria-label="Navigasi utama">
          {links.map(([label, href]) => (
            <a href={href} key={href} aria-current={active === href ? 'location' : undefined} onClick={navigate}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
