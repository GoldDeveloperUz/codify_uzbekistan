import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Startup.css'

const steps = [
  { num: 1, icon: 'bx bx-bulb', title: "G'oya yuborish", desc: "Startup g'oyangizni platformaga yuboring" },
  { num: 2, icon: 'bx bx-trophy', title: 'TOP-3 tanlash', desc: "Ekspertlar eng yaxshi g'oyalarni tanlaydi" },
  { num: 3, icon: 'bx bx-group', title: 'Jamoa tuzish', desc: "Talentlar bilan jamoangizni shakllantiring" },
  { num: 4, icon: 'bx bx-rocket', title: 'Amaliyotga tatbiq', desc: "Loyihani ishga tushiring va o'sbting" },
]

const benefits = [
  { icon: 'bx bx-dollar-circle', title: 'Moliyaviy qo\'llab-quvvatlash', desc: "TOP startuplar moliyaviy yordam oladi" },
  { icon: 'bx bx-user-voice', title: 'Mentorlik', desc: "Tajribali tadbirkorlardan shaxsiy mentorlik" },
  { icon: 'bx bx-network-chart', title: 'Networking', desc: "Investor va hamkorlar bilan uchrashuvlar" },
  { icon: 'bx bx-buildings', title: 'Coworking', desc: "Bepul ish joyi va resurslar" },
  { icon: 'bx bx-broadcast', title: 'Media qamrovi', desc: "Startupingizni omma oldida taqdim etish" },
  { icon: 'bx bx-globe', title: 'Global bozor', desc: "Xalqaro platformalarga chiqish imkoniyati" },
]

const previousStartups = [
  { name: 'EduTech UZ', category: 'Ta\'lim', status: 'Faol', icon: 'bx bx-book' },
  { name: 'MedAI', category: 'Sog\'liqni saqlash', status: 'Investitsiya oldi', icon: 'bx bx-heart' },
  { name: 'FarmBot', category: 'Agrikultura', status: 'Faol', icon: 'bx bx-leaf' },
  { name: 'LogiTrack', category: 'Logistika', status: 'Kengaymoqda', icon: 'bx bx-package' },
]

export default function Startup() {
  return (
    <main className="startup-page page-enter">

      {/* Hero */}
      <section className="page-hero startup-hero">
        <Reveal><div className="section-tag"><i className="bx bx-rocket" /> CODIFY STARTUPS</div></Reveal>
        <Reveal delay={1}><h1>G'oyangizni <span className="grad-text">reallikka</span> aylantiring</h1></Reveal>
        <Reveal delay={2}><p>Startup g'oyangiz bor? Uni amalga oshirishga yordam beramiz.</p></Reveal>
        <Reveal delay={3}>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">
              <i className="bx bx-bulb" /> Startup g'oyam bor
            </Link>
            <a href="#how" className="btn-ghost">
              <i className="bx bx-info-circle" /> Qanday ishlaydi?
            </a>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="timeline-section" id="how">
        <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-map" /> Jarayon</div></Reveal>
        <Reveal delay={1}><h2 className="section-title" style={{ textAlign: 'center' }}>4 qadam bilan <span className="grad-text">startupingizni</span> oching</h2></Reveal>
        <div className="timeline">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) + 1}>
              <div className="timeline-step">
                <div className="step-num">{s.num}</div>
                <div className="step-icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-gift" /> Imtiyozlar</div></Reveal>
        <Reveal delay={1}><h2 className="section-title" style={{ textAlign: 'center' }}>Dasturga <span className="grad-text">qo'shilsangiz</span></h2></Reveal>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) + 1}>
              <div className="benefit-card">
                <div className="benefit-icon"><i className={b.icon} /></div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Previous Startups */}
      <section className="prev-startups-section">
        <Reveal><div className="section-tag" style={{ margin: '0 auto 1rem' }}><i className="bx bx-history" /> Avvalgi startuplar</div></Reveal>
        <Reveal delay={1}><h2 className="section-title" style={{ textAlign: 'center' }}>Muvaffaqiyat <span className="grad-text">hikoyalari</span></h2></Reveal>
        <div className="prev-grid">
          {previousStartups.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) + 1}>
              <div className="prev-card">
                <div className="prev-icon"><i className={s.icon} /></div>
                <div className="prev-info">
                  <h4>{s.name}</h4>
                  <p>{s.category}</p>
                </div>
                <span className="prev-status">{s.status}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="startup-cta-section">
        <Reveal>
          <h2 className="cta-title">Sizning <span className="grad-text">g'oyangiz</span> keyingi bo'lsin!</h2>
          <p className="cta-sub">Hoziroq ariza yuboring va startupingizni qurishni boshlang</p>
          <Link to="/contact" className="btn-primary btn-big">
            <i className="bx bx-send" /> Ariza yuborish
          </Link>
        </Reveal>
      </section>

    </main>
  )
}
