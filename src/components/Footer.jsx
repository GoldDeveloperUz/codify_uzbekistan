import { Link } from 'react-router-dom'
import LOGO from '../assets/logo.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent" />
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src={LOGO} alt="CODIFY" className="footer-logo-img" />
            <span className="footer-logo-text">CODIFY</span>
          </div>
          <p className="footer-desc">
            Zamonaviy kasblarni o'rgatib, O'zbekiston yoshlarini global bozorga olib chiqamiz.
          </p>
          <div className="social-links">
            <a href="https://t.me/codify_uzbekistan" target="_blank" rel="noreferrer" className="social-btn" title="Telegram">
              <i className="bx bx-send" />
            </a>
            <a href="https://www.instagram.com/codify_uz" target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
              <i className="bxl bxl-instagram" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="social-btn" title="YouTube">
              <i className="bxl bxl-youtube" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
              <i className="bxl bxl-linkedin" />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div className="footer-col">
          <h5>Platforma</h5>
          <ul>
            <li><Link to="/about">CODIFY haqida</Link></li>
            <li><Link to="/courses">Kurslar</Link></li>
            <li><Link to="/courses#certificates">Sertifikatlar</Link></li>
            <li><Link to="/startup">Startup dasturi</Link></li>
            <li><Link to="/jobs">Ish topish</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Aloqa</h5>
          <ul>
            <li><a href="https://t.me/codify_uzbekistan" target="_blank" rel="noreferrer">Telegram kanal</a></li>
            <li><a href="https://instagram.com/codify_uz" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><Link to="/startup">Startup shakli</Link></li>
            <li><Link to="/contact">Biz bilan bog'laning</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CODIFY. Barcha huquqlar himoyalangan.</p>
        <p className="footer-tagline">Kelajak bugundan boshlanadi ✦</p>
      </div>
    </footer>
  )
}
