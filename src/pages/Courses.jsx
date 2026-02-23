import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Courses.css'

const courses = [
  { icon: 'bx bx-code-alt', title: 'Dasturlash', level: 'Boshlang\'ich → Pro', duration: '6 oy', price: 'Bepul', badge: 'Mashhur', desc: 'HTML, CSS, JavaScript, React, Node.js va zamonaviy web texnologiyalar' },
  { icon: 'bx bx-brush', title: 'UI/UX Dizayn', level: 'Noldan', duration: '4 oy', price: 'Bepul', badge: '', desc: 'Figma, dizayn tizimlar, prototiplash va foydalanuvchi tajribasi' },
  { icon: 'bx bx-megaphone', title: 'Digital Marketing', level: 'Boshlang\'ich', duration: '3 oy', price: 'Bepul', badge: '', desc: 'SMM, SEO, Google Ads, content marketing va analitika' },
  { icon: 'bx bx-bar-chart-alt-2', title: 'Data Analitika', level: 'O\'rta', duration: '5 oy', price: 'Bepul', badge: 'Yangi', desc: 'Python, SQL, Tableau, Excel va ma\'lumotlar tahlili' },
  { icon: 'bx bx-bot', title: "Sun'iy Intellekt", level: 'O\'rta → Pro', duration: '6 oy', price: 'Bepul', badge: 'Trend', desc: 'Machine Learning, ChatGPT, Prompt Engineering va AI vositalari' },
  { icon: 'bx bx-mobile-alt', title: 'Mobile Dasturlash', level: 'O\'rta', duration: '5 oy', price: 'Bepul', badge: '', desc: 'Flutter, React Native va iOS/Android ilovalar yaratish' },
]

const coinRewards = [
  { icon: 'bx bx-zap', title: 'Aktivlik coinlari', desc: "Dars ko'rish, topshiriq bajarish uchun coin yig'ing" },
  { icon: 'bx bx-book-open', title: 'Pullik kurslarga', desc: "Yig'ilgan coinlarni premium kurslarga almashtiring" },
  { icon: 'bx bx-chip', title: 'Premium AI obunalar', desc: 'ChatGPT, Midjourney kabi AI vositalariga kirish' },
  { icon: 'bx bx-graduation', title: 'Eksklyuziv darslar', desc: "Faqat coinlar bilan ochiluvchi maxsus master-class'lar" },
]

export default function Courses() {
  return (
    <main className="courses-page page-enter">

      {/* Hero */}
      <section className="page-hero">
        <Reveal><div className="section-tag"><i className="bx bx-book-open" /> Kurslar</div></Reveal>
        <Reveal delay={1}><h1>Zamonaviy <span className="grad-text">Kurslar</span></h1></Reveal>
        <Reveal delay={2}><p>Har bir kurs amaliyotga yo'naltirilgan va real loyihalar asosida qurilgan</p></Reveal>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="courses-grid">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) + 1}>
              <div className="course-card">
                {c.badge && <span className="course-badge">{c.badge}</span>}
                <div className="course-icon"><i className={c.icon} /></div>
                <h3>{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <div className="course-meta">
                  <span><i className="bx bx-time" /> {c.duration}</span>
                  <span><i className="bx bx-trending-up" /> {c.level}</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{c.price}</span>
                  <Link to="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                    Ro'yxatdan o'tish
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="cert-section" id="certificates">
        <div className="cert-layout">
          <div>
            <Reveal><div className="section-tag"><i className="bx bx-award" /> Sertifikatlar</div></Reveal>
            <Reveal delay={1}><h2 className="section-title">Xalqaro standartda <span className="grad-text">tasdiqlangan</span></h2></Reveal>
            <Reveal delay={2}><p className="section-sub">CODIFY sertifikati ish beruvchilar uchun sizning malakangizning eng ishonchli tasdiqidir.</p></Reveal>
            <div className="trust-badges">
              {[
                { icon: 'bx bx-trophy', text: 'Rasmiy sertifikat' },
                { icon: 'bxl bxl-linkedin', text: "LinkedIn'da ulashish" },
                { icon: 'bx bx-check-circle', text: 'Ish beruvchilar uchun tasdiq' },
                { icon: 'bx bx-globe', text: 'Xalqaro standart' },
              ].map(b => (
                <Reveal key={b.text}>
                  <div className="trust-badge">
                    <i className={b.icon} style={{ color: 'var(--orange)', fontSize: '1.3rem' }} />
                    <span>{b.text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={2}>
            <div className="cert-mockup">
              <div className="cert-inner">
                <div className="cert-brand">CODIFY</div>
                <div className="cert-subtitle">Kelajak Kasblari Platformasi</div>
                <div className="cert-divider" />
                <div className="cert-presented">Bu sertifikat taqdim etiladi</div>
                <div className="cert-name">Abdullayev Sardor</div>
                <div className="cert-course">Sun'iy Intellekt va Machine Learning</div>
                <div className="cert-seal"><i className="bx bx-medal" /></div>
                <div className="cert-date">2024 · CODIFY Platform</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coin System */}
      <section className="coins-section">
        <div className="coins-header">
          <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-coin-stack" /> Coin tizimi</div></Reveal>
          <Reveal delay={1}><h2 className="section-title">O'rganib, <span className="grad-text">mukofot</span> oling</h2></Reveal>
          <Reveal delay={2}><p className="section-sub" style={{ textAlign: 'center', margin: '0.8rem auto 0' }}>Har bir faoliyatingiz uchun coin yig'ing</p></Reveal>
        </div>
        <div className="coins-grid">
          {coinRewards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) + 1}>
              <div className="coin-card">
                <div className="coin-icon"><i className={c.icon} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  )
}
