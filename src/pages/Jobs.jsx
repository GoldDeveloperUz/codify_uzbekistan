import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Jobs.css'

const allJobs = [
  { icon: 'bx bx-brush', title: 'UI/UX Designer', company: 'TechCorp', location: 'Toshkent', type: 'Ofis', salary: '$800+', category: 'Dizayn' },
  { icon: 'bx bx-code-alt', title: 'Frontend Developer', company: 'Startup Hub', location: 'Remote', type: 'Remote', salary: '$1200+', category: 'Dasturlash' },
  { icon: 'bx bx-bar-chart-alt-2', title: 'Data Analyst', company: 'FinTech Co', location: 'Toshkent', type: 'Ofis', salary: '$1000+', category: 'Data' },
  { icon: 'bx bx-bot', title: 'AI Engineer', company: 'Global Tech', location: 'Remote', type: 'Freelance', salary: '$2000+', category: 'AI' },
  { icon: 'bx bx-megaphone', title: 'Marketing Manager', company: 'E-Commerce UZ', location: 'Toshkent', type: 'Ofis', salary: '$700+', category: 'Marketing' },
  { icon: 'bx bx-mobile-alt', title: 'Mobile Developer', company: 'AppStudio', location: 'Samarqand', type: 'Gibrid', salary: '$1100+', category: 'Dasturlash' },
  { icon: 'bx bx-server', title: 'Backend Developer', company: 'CloudSoft', location: 'Remote', type: 'Remote', salary: '$1400+', category: 'Dasturlash' },
  { icon: 'bx bx-palette', title: 'Graphic Designer', company: 'Creative Agency', location: 'Toshkent', type: 'Freelance', salary: '$600+', category: 'Dizayn' },
]

const categories = ['Barchasi', 'Dasturlash', 'Dizayn', 'Marketing', 'Data', 'AI']
const types = ['Barchasi', 'Ofis', 'Remote', 'Freelance', 'Gibrid']

const personalFeatures = [
  { icon: 'bx bx-clipboard', title: "Individual o'qish rejasi", desc: "Maqsadingizga qarab tuzilgan shaxsiy dastur" },
  { icon: 'bx bx-line-chart', title: 'Progress tracking', desc: "Har kunlik o'sishingizni kuzatib boring" },
  { icon: 'bx bx-compass', title: 'Karyera maslahatlari', desc: "Soha ekspertlaridan shaxsiy karyera yo'nalishi bo'yicha maslahat" },
  { icon: 'bx bx-handshake', title: 'Ish beruvchilar bilan aloqa', desc: "To'g'ridan-to'g'ri yirik kompaniyalar bilan bog'laning" },
]

export default function Jobs() {
  const [activeCat, setActiveCat] = useState('Barchasi')
  const [activeType, setActiveType] = useState('Barchasi')

  const filtered = allJobs.filter(j => {
    const catMatch = activeCat === 'Barchasi' || j.category === activeCat
    const typeMatch = activeType === 'Barchasi' || j.type === activeType
    return catMatch && typeMatch
  })

  return (
    <main className="jobs-page page-enter">

      {/* Hero */}
      <section className="page-hero">
        <Reveal><div className="section-tag"><i className="bx bx-briefcase" /> Ish va Freelance</div></Reveal>
        <Reveal delay={1}><h1>Ish va <span className="grad-text">Freelance</span> Platforma</h1></Reveal>
        <Reveal delay={2}><p>O'qib bo'lgach ishni ham, buyurtmachini ham o'sha joydan toping</p></Reveal>
      </section>

      {/* Features */}
      <section className="jobs-features-section">
        <div className="jobs-features-grid">
          {[
            { icon: 'bx bx-filter-alt', text: "Kasb bo'yicha filter" },
            { icon: 'bx bx-map-pin', text: "Hudud bo'yicha filter" },
            { icon: 'bx bx-file', text: 'Resume joylash bepul' },
            { icon: 'bx bx-building', text: 'Vakansiya joylash bepul' },
            { icon: 'bx bx-laptop', text: 'Freelance platforma tizimi' },
          ].map(f => (
            <div key={f.text} className="jobs-feat">
              <i className={f.icon} style={{ color: 'var(--orange)', fontSize: '1.3rem' }} />
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="listings-section">
        {/* Filters */}
        <div className="filters-row">
          <div className="filter-group">
            <span className="filter-label">Kasb:</span>
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${activeCat === c ? 'active' : ''}`}
                onClick={() => setActiveCat(c)}
              >{c}</button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">Tur:</span>
            {types.map(t => (
              <button
                key={t}
                className={`filter-btn ${activeType === t ? 'active' : ''}`}
                onClick={() => setActiveType(t)}
              >{t}</button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="jobs-count">
          <i className="bx bx-search" /> {filtered.length} ta vakansiya topildi
        </div>

        <div className="jobs-grid">
          {filtered.map((job, i) => (
            <Reveal key={`${job.title}-${i}`} delay={(i % 3) + 1}>
              <div className="job-card">
                <div className="job-header">
                  <div className="job-logo"><i className={job.icon} /></div>
                  <div className="job-type-badge">{job.type}</div>
                </div>
                <h3>{job.title}</h3>
                <p className="job-company">
                  <i className="bx bx-building" /> {job.company}
                </p>
                <p className="job-location">
                  <i className="bx bx-map-pin" /> {job.location}
                </p>
                <div className="job-footer">
                  <span className="job-salary">{job.salary}</span>
                  <Link to="/contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
                    Ariza yuborish
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Personalized */}
      <section className="personal-section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Reveal><div className="section-tag"><i className="bx bx-user-check" /> Shaxsiy tizim</div></Reveal>
          <Reveal delay={1}><h2 className="section-title">Sizga moslashtirilgan <span className="grad-text">o'quv yo'li</span></h2></Reveal>
        </div>
        <div className="personal-grid">
          {personalFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) + 1}>
              <div className="personal-card">
                <div className="personal-icon"><i className={f.icon} /></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  )
}
