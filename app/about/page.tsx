import Link from 'next/link'

export const metadata = { title: 'About — Oros Photography' }

export default function About() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Angel2.jpg" alt="Angel — Oros Photography" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="eyebrow">About</div>
            <h1 style={{ fontStyle: 'italic', marginBottom: '24px' }}>I am Angel, a portrait photographer based in Pittsburgh.</h1>
            <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '20px' }}>I pick up my camera to help people see themselves differently</h3>
            <p style={{ marginBottom: '16px' }}>I am a Pittsburgh-based portrait photographer with a passion for helping people show up confidently in their professional lives.</p>
            <p style={{ marginBottom: '32px' }}>Whether you are a student stepping into your career, a professional refreshing your image, or a creative building your brand, I believe great photos can open doors — and I am here to help you walk through them.</p>
            <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light)' }}>
            {[
              { num: '01', title: 'The dogs made me do it', body: 'I share my home in Verona with my partner Patrick and our two dogs, Jar Jar and Zina. They have appeared in more test shots than I would like to admit.' },
              { num: '02', title: 'Arizona born, Pittsburgh made', body: 'I grew up in the Southwest and eventually found my home in Pittsburgh — and honestly, the fall colors here beat a desert sunset almost every time.' },
              { num: '03', title: 'The camera is always close', body: 'Photography started as a creative outlet and grew into something I genuinely believe in: that everyone deserves photos that reflect who they really are.' },
              { num: '04', title: 'It started personal', body: 'I got into photography because I know what it feels like to not have a single photo you actually like of yourself. That is what I am here to fix.' },
            ].map((item) => (
              <div key={item.num} style={{ background: 'var(--white)', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', color: 'var(--mid)' }}>{item.num}</span>
                <h3 style={{ fontSize: '18px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '14px' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '32px' }}>My Work</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2px' }}>
            <div style={{ overflow: 'hidden', aspectRatio: '16/10' }}>
              <img src="/images/Graduations-2.jpg" alt="Graduation portraits" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src="/images/Ashley.jpg" alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Let us work together.</h2>
          <p style={{ marginBottom: '32px' }}>Ready to get photos you are actually proud of?</p>
          <Link href="/contact" className="btn btn-dark">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
