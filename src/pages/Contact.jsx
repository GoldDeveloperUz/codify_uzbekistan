import { useState } from 'react'
import Reveal from '../components/Reveal'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Kurs', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: 'Kurs', message: '' })
  }

  return (
    <main className="contact-page page-enter">

      {/* Hero */}
      <section className="page-hero">
        <Reveal><div className="section-tag"><i className="bx bx-envelope" /> Aloqa</div></Reveal>
        <Reveal delay={1}><h1>Biz bilan <span className="grad-text">bog'laning</span></h1></Reveal>
        <Reveal delay={2}><p>Savollaringiz bormi? Biz doim yordam berishga tayyormiz</p></Reveal>
      </section>

      {/* Contact Layout */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Info */}
          <Reveal>
            <div className="contact-info">
              <h2 className="section-title">Qanday <span className="grad-text">murojaat</span> qilsam?</h2>
              <p className="section-sub" style={{ marginTop: '0.8rem', marginBottom: '2.5rem' }}>
                Har qanday savol yoki taklif bo'lsa, murojaat qiling. Tez orada javob beramiz.
              </p>

              <div className="contact-items">
                {[
                  { icon: 'bx bx-send', label: 'Telegram', value: '@codify_uzbekistan', href: 'https://t.me/codify_uzbekistan' },
                  { icon: 'bxl bxl-instagram', label: 'Instagram', value: '@codify_uz', href: 'https://instagram.com/codify_uz' },
                  { icon: 'bx bx-envelope', label: 'Email', value: 'info@codify.uz', href: 'ataullayevtimurbek@gmail.com' },
                  { icon: 'bx bx-phone', label: 'Telefon', value: '+998 90 123 45 67', href: 'tel:+998937047270' },
                  { icon: 'bx bx-map-pin', label: 'Manzil', value: 'Toshkent, O\'zbekiston', href: '#' },
                ].map(item => (
                  <a key={item.label} href={item.href} className="contact-item" target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    <div className="ci-icon"><i className={item.icon} /></div>
                    <div>
                      <div className="ci-label">{item.label}</div>
                      <div className="ci-value">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="contact-social">
                <span>Ijtimoiy tarmoqlarda:</span>
                <div className="social-row">
                  {[
                    { icon: 'bx bx-send', href: 'https://t.me/codify_uzbekistan', label: 'Telegram' },
                    { icon: 'bxl bxl-instagram', href: 'https://instagram.com/codify_uz', label: 'Instagram' },
                    { icon: 'bxl bxl-youtube', href: '', label: 'YouTube' },
                    { icon: 'bxl bxl-linkedin', href: '', label: 'LinkedIn' },
                  ].map(s => (
                    <a key={s.label} href={s.href} className="social-pill" target="_blank" rel="noreferrer">
                      <i className={s.icon} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={2}>
            <div className="contact-form-wrap">
              {sent && (
                <div className="success-msg">
                  <i className="bx bx-check-circle" />
                  Xabaringiz yuborildi! Tez orada javob beramiz.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Xabar yuborish</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Ismingiz *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Sardor Karimov"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+998 90 000 00 00"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="sardor@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mavzu</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="Kurs">Kurs haqida</option>
                    <option value="Startup">Startup dasturi</option>
                    <option value="Ish">Ish topish</option>
                    <option value="Hamkorlik">Hamkorlik</option>
                    <option value="Boshqa">Boshqa</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Xabar *</label>
                  <textarea
                    name="message"
                    placeholder="Xabaringizni yozing..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="bx bx-send" /> Yuborish
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Startup Form CTA */}
      <section className="startup-form-cta">
        <Reveal>
          <div className="startup-cta-box">
            <div className="scta-icon"><i className="bx bx-rocket" /></div>
            <div>
              <h3>Startup g'oyangiz bormi?</h3>
              <p>Maxsus startup ariza shaklini to'ldiring</p>
            </div>
            <a href="#" className="btn-primary">
              <i className="bx bx-edit" /> Ariza to'ldirish
            </a>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
