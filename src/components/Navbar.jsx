import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LOGO from '../assets/logo.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: "Bosh sahifa" },
    { to: '/about', label: "Platforma" },
    { to: '/courses', label: "Kurslar" },
    { to: '/startup', label: "Startup" },
    { to: '/jobs', label: "Ish topish" },
    { to: '/contact', label: "Aloqa" },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <img
          src={LOGO}
          alt="CODIFY"
          className="nav-logo-img"
        />
        <span className="nav-logo-text">CODIFY</span>
      </Link>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="nav-cta"
        onClick={() => { navigate('/courses'); setMenuOpen(false) }}
      >
        Boshlash
      </button>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
