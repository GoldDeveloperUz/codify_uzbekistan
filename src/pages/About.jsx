import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './About.css'

const team = [
  { name: 'Sardor Karimov', role: 'CEO & Founder', icon: 'bx bx-user' },
  { name: 'Nilufar Tosheva', role: 'Head of Education', icon: 'bx bx-book-open' },
  { name: 'Bobur Raximov', role: 'Lead Developer', icon: 'bx bx-code-alt' },
  { name: 'Zulfiya Nazarova', role: 'Design Director', icon: 'bx bx-brush' },
]

const values = [
  { icon: 'bx bx-bulb', title: 'Innovatsiya', desc: "Har doim yangi va zamonaviy yechimlarni tadbiq etamiz" },
  { icon: 'bx bx-trophy', title: 'Sifat', desc: "Yuqori sifatli ta'lim har bir talabaning huquqi" },
  { icon: 'bx bx-group', title: 'Jamoa', desc: "Kuchli jamoa bilan katta natijalarga erishamiz" },
  { icon: 'bx bx-heart', title: "Mehr-muhabbat", desc: "Har bir talabamizga alohida e'tibor va g'amxo'rlik" },
]

export default function About() {
  return (
    <main className="about-page page-enter">

      {/* Hero */}
      <section className="page-hero">
        <Reveal>
          <div className="section-tag"><i className="bx bx-info-circle" /> Platforma haqida</div>
        </Reveal>
        <Reveal delay={1}>
          <h1>CODIFY <span className="grad-text">Haqida</span></h1>
        </Reveal>
        <Reveal delay={2}>
          <p>Biz O'zbekiston yoshlarini kelajak kasblari uchun tayyorlayapmiz</p>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-grid">
          <Reveal>
            <div className="mission-text">
              <div className="section-tag"><i className="bx bx-target-lock" /> Bizning Missiya</div>
              <h2 className="section-title">
                O'zbekiston yoshlarini <span className="grad-text">global darajaga</span> olib chiqish
              </h2>
              <p className="section-sub">
                CODIFY 2023-yilda tashkil etilgan bo'lib, asosiy maqsadimiz zamonaviy IT kasblarni
                O'zbekiston yoshlariga qulay, sifatli va amaliyotga yo'naltirilgan tarzda o'rgatishdir.
                Biz nafaqat dars beramiz — biz karyera qurishga yordam beramiz.
              </p>
              <p className="mission-extra">
                Platformamizda 5000+ talaba ta'lim olgan, ularning 98% ish topishga muvaffaq bo'lgan.
                Biz bu raqamni yanada oshirishni maqsad qilib qo'yganmiz.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mission-stats-box">
              {[
                { num: '2023', label: 'Tashkil yili' },
                { num: '5K+', label: 'Talabalar' },
                { num: '50+', label: 'Kurslar' },
                { num: '98%', label: 'Bandlik darajasi' },
              ].map(s => (
                <div key={s.label} className="mission-stat">
                  <div className="mission-stat-num">{s.num}</div>
                  <div className="mission-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-star" /> Bizning Qadriyatlar</div></Reveal>
        <Reveal delay={1}><h2 className="section-title" style={{ textAlign: 'center' }}>Biz nimaga <span className="grad-text">ishonamiz</span></h2></Reveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) + 1}>
              <div className="value-card">
                <div className="value-icon"><i className={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-group" /> Bizning Jamoa</div></Reveal>
        <Reveal delay={1}><h2 className="section-title" style={{ textAlign: 'center' }}>CODIFY <span className="grad-text">jamoasi</span></h2></Reveal>
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) + 1}>
              <div className="team-card">
                <div className="team-avatar"><i className={m.icon} /></div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <Reveal>
          <h2 className="section-title">Bizga <span className="grad-text">qo'shiling</span></h2>
          <p className="section-sub" style={{ margin: '1rem auto 2rem' }}>
            Kelajak kasbingizni bugundan boshlang
          </p>
          <Link to="/courses" className="btn-primary">
            <i className="bx bx-rocket" /> Kurslarni ko'rish
          </Link>
        </Reveal>
      </section>

    </main>
  )
}
