'use client'
import { useState } from 'react'

const WEB3FORMS_KEY = '1576f18f-7905-4258-84d9-29fb30e75136'

export default function Contact() {
  const [interest, setInterest] = useState<string[]>([])
  const [source, setSource] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleInterest = (val: string) => {
    setInterest(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      access_key: WEB3FORMS_KEY,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      interest: interest.join(', '),
      source: source,
      subject: 'New booking inquiry — Oros Photography',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or reach out on Instagram.')
      }
    } catch {
      setError('Something went wrong. Please try again or reach out on Instagram.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Contact</div>
        <h1 style={{ fontStyle: 'italic' }}>Let us work together.</h1>
      </section>

      <section>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: '40px' }}>
              <img src="/images/Pumpkin%20Patch.jpg" alt="Oros Photography" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '6px' }}>Instagram</p>
                <a href="https://instagram.com/oros_photography" target="_blank" rel="noreferrer" style={{ fontSize: '15px', color: 'var(--dark)', textDecoration: 'none' }}>@oros_photography</a>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '6px' }}>Based In</p>
                <p style={{ fontSize: '15px', color: 'var(--dark)' }}>Pittsburgh, PA</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '6px' }}>Response Time</p>
                <p style={{ fontSize: '15px', color: 'var(--dark)' }}>Within 24 hours</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '48px 0' }}>
                <h2 style={{ fontStyle: 'italic', marginBottom: '16px' }}>Message sent!</h2>
                <p>Thanks for reaching out. I will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input name="name" required style={inputStyle} placeholder="First and last name" />
                </div>
                <div>
                  <label style={labelStyle}>Your Email *</label>
                  <input name="email" required type="email" style={inputStyle} placeholder="you@example.com" />
                </div>
                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea name="message" required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell me a little about what you are looking for..." />
                </div>

                <div>
                  <label style={labelStyle}>What are you interested in?</label>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Headshots', 'Portraits', 'Milestones', 'Custom'].map(opt => (
                      <button key={opt} type="button" onClick={() => toggleInterest(opt)} style={{
                        fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                        padding: '10px 18px', border: '1px solid',
                        borderColor: interest.includes(opt) ? 'var(--black)' : 'var(--light)',
                        background: interest.includes(opt) ? 'var(--black)' : 'transparent',
                        color: interest.includes(opt) ? 'var(--white)' : 'var(--dark)',
                        cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.15s',
                      }}>{opt}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>How did you hear about me?</label>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Instagram', 'Google', 'Referral', 'Other'].map(opt => (
                      <button key={opt} type="button" onClick={() => setSource(opt)} style={{
                        fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                        padding: '10px 18px', border: '1px solid',
                        borderColor: source === opt ? 'var(--black)' : 'var(--light)',
                        background: source === opt ? 'var(--black)' : 'transparent',
                        color: source === opt ? 'var(--white)' : 'var(--dark)',
                        cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.15s',
                      }}>{opt}</button>
                    ))}
                  </div>
                </div>

                {error && <p style={{ fontSize: '13px', color: '#c0392b' }}>{error}</p>}

                <button type="submit" className="btn btn-dark" style={{ alignSelf: 'flex-start', marginTop: '8px', opacity: loading ? 0.6 : 1 }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            { label: 'Find Out More', sub: 'About me', href: '/about' },
            { label: 'Find Out About', sub: 'Experience', href: '/experience' },
            { label: 'Check My', sub: 'Portfolio', href: '/portfolio' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--mid)' }}>{item.label}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontStyle: 'italic', color: 'var(--black)' }}>{item.sub}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '10px', letterSpacing: '0.2em',
  textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '8px',
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 0', border: 'none',
  borderBottom: '1px solid var(--light)', background: 'transparent',
  fontSize: '15px', color: 'var(--black)', fontFamily: 'var(--sans)', outline: 'none',
}
