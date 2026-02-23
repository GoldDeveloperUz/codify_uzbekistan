import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Home.css'

/* ── Particle background ── */
function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const s = Math.random() * 5 + 2
      Object.assign(p.style, {
        width: s + 'px', height: s + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        opacity: Math.random() * 0.4 + 0.1,
        animationDelay: Math.random() * 8 + 's',
        animationDuration: Math.random() * 6 + 6 + 's',
      })
      c.appendChild(p)
    }
  }, [])
  return <div className="particles" ref={ref} />
}

/* ── Orbit animation ── */
function OrbitVisual() {
  return (
    <div className="orbit-wrap">
      <div className="orbits">
        <div className="orbit o1"><div className="orbit-dot" /></div>
        <div className="orbit o2"><div className="orbit-dot" /></div>
        <div className="orbit o3"><div className="orbit-dot" /></div>
        <div className="orbit-core" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="home page-enter">

      {/* ─── HERO ─── */}
      <section className="hero">
        <Particles />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="bx bx-bolt-circle" />
            Kelajak Kasblari Platformasi
          </div>
          <h1 className="hero-title">
            Kelajak Kasblarini<br />
            <span className="grad-text">Bugundan Boshlang</span>
          </h1>
          <p className="hero-sub">
            Sun'iy intellekt va zamonaviy kasblarni o'rganing, real daromadga chiqing.
          </p>
          <div className="hero-btns">
            <Link to="/courses" className="btn-primary">
              <i className="bx bx-rocket" /> Boshlash
            </Link>
            <Link to="/startup" className="btn-ghost">
              <i className="bx bx-flame" /> Startupga qatnashish
            </Link>
          </div>
          <div className="hero-stats">
            {[
              { num: '5,000+', label: 'Talabalar' },
              { num: '50+', label: 'Kurslar' },
              { num: '30+', label: 'Mentorlar' },
              { num: '98%', label: 'Mamnunlik' },
            ].map(s => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <Reveal>
              <div className="section-tag">
                <i className="bx bx-info-circle" /> CODIFY NIMA?
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="section-title">
                Innovatsion Ta'lim{' '}
                <span className="grad-text">Platformasi</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="section-sub">
                Codify — zamonaviy kasblarni noldan o'rgatuvchi, sun'iy intellekt vositalarini
                amaliy qo'llashni o'rgatuvchi va yoshlarni daromadga olib chiqishga qaratilgan
                innovatsion ta'lim platformasi.
              </p>
            </Reveal>
            <div className="feature-cards">
              {[
                { icon: 'bx bx-briefcase', title: 'Zamonaviy kasblar', desc: 'Kelajak talabiga javob beruvchi kasblarga tayyorlanish' },
                { icon: 'bx bx-chip', title: 'AI vositalari', desc: "Sun'iy intellektni amalda qo'llash ko'nikmalari" },
                { icon: 'bx bx-trending-up', title: 'Real daromad', desc: "O'qish jarayonidayoq pul ishlash imkoniyati" },
                { icon: 'bx bx-globe', title: "Ta'lim + Ish", desc: "Ekotizim: o'rganish, amaliyot, ish topish bir joyda" },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i > 1 ? 3 : i + 1}>
                  <div className="card">
                    <div className="card-icon"><i className={c.icon} /></div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={2}>
            <OrbitVisual />
          </Reveal>
        </div>
      </section>

      {/* ─── DIRECTIONS ─── */}
      <section className="directions-section">
        <div className="dir-header">
          <Reveal><div className="section-tag"><i className="bx bx-grid-alt" /> Ta'lim yo'nalishlari</div></Reveal>
          <Reveal delay={1}><h2 className="section-title">Qaysi kasbi o'rganmoqchisiz?</h2></Reveal>
          <Reveal delay={2}><p className="section-sub" style={{ textAlign: 'center', margin: '0.8rem auto 0' }}>Har bir yo'nalish uchun amaliyotga yo'naltirilgan dastur tayyorlangan</p></Reveal>
        </div>
        <div className="dir-grid">
          {[
            { icon: 'bx bx-code-alt', title: 'Dasturlash', desc: 'Web, mobile va backend dasturlash' },
            { icon: 'bx bx-brush', title: 'Dizayn', desc: 'UI/UX, grafik va brending dizayn' },
            { icon: 'bx bx-megaphone', title: 'Marketing', desc: 'Digital marketing va SMM' },
            { icon: 'bx bx-bar-chart-alt-2', title: 'Data Analitika', desc: "Ma'lumotlar tahlili va vizualizatsiya" },
            { icon: 'bx bx-bot', title: "Sun'iy Intellekt", desc: 'ML, AI va prompt engineering' },
          ].map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) + 1}>
              <div className="dir-card">
                <div className="dir-icon"><i className={d.icon} /></div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="dir-features">
            {['Video darslar', 'Amaliy topshiriqlar', "Loyiha asosida o'qitish", 'Real mentorlar', 'Sertifikat'].map(f => (
              <div key={f} className="dir-feat">
                <i className="bx bx-check" style={{ color: 'var(--orange)' }} /> {f}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── WHY CODIFY ─── */}
      <section className="why-section">
        <div className="why-grid">
          <div>
            <Reveal><div className="section-tag"><i className="bx bx-star" /> Nima uchun CODIFY?</div></Reveal>
            <Reveal delay={1}><h2 className="section-title">O'zbekistondagi <span className="grad-text">eng yaxshi</span> tanlov</h2></Reveal>
            <div className="checklist">
              {[
                "O'zbek tilida — to'liq tushunish uchun",
                "Amaliyotga yo'naltirilgan ta'lim",
                "Zamonaviy va talab yuqori kasblar",
                "Sun'iy intellekt ko'nikmalari",
                'Xalqaro sertifikat',
                'Kuchli networking va jamoa',
              ].map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="check-item">
                    <div className="check-mark"><i className="bx bx-check" /></div>
                    <span className="check-text">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={2}>
            <div className="why-visual">
              <div className="big-number">98%</div>
              <div className="big-label">Bitiruvchilar ish topadi</div>
              <div className="why-stats">
                {[
                  { num: '3x', label: "Maosh o'sishi" },
                  { num: '6oy', label: "O'rtacha kurs" },
                  { num: '50+', label: 'Hamkor kompaniyalar' },
                  { num: '24/7', label: "Qo'llab-quvvatlash" },
                ].map(s => (
                  <div key={s.label} className="why-stat">
                    <div className="why-stat-num">{s.num}</div>
                    <div className="why-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <h2 className="cta-title">
          Bugun o'rgan —<br /><span className="grad-text">ertaga yetakchi bo'l!</span>
        </h2>
        <p className="cta-sub">Minglab yoshlar allaqachon boshlagan. Siz ham bugun qo'shiling.</p>
        <Link to="/courses" className="btn-primary btn-big">
          <i className="bx bx-rocket" /> Hoziroq boshlash
        </Link>
      </section>

    </main>
  )
}
