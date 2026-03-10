import Link from 'next/link'

export const metadata = { title: 'Pricing — Oros Photography' }

export default function Pricing() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Pricing</div>
        <h1 style={{ fontStyle: 'italic', maxWidth: '600px' }}>Simple, transparent packages.</h1>
      </section>

      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Angel.jpg" alt="Studio Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="eyebrow">Package 01</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Studio Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$100</p>
            <p style={{ marginBottom: '16px' }}>A relaxed indoor portrait session at my private studio in Verona, PA. Perfect for professional headshots, LinkedIn photos, or personal portraits.</p>
            <p style={{ marginBottom: '32px' }}>Controlled lighting means consistent, polished results no matter the weather or time of day.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {['30–45 minute session', '10 fully edited selects', 'Private online gallery delivery', 'High-resolution files included', 'Studio in Verona, PA'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)' }}>—</span>{item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Studio Session</Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Package 02</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Outdoor Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$150</p>
            <p style={{ marginBottom: '16px' }}>Take your portraits outside at a location of your choice within Allegheny County. Natural light, real environments, and a relaxed atmosphere.</p>
            <p style={{ marginBottom: '32px' }}>Perfect for students, creatives, and professionals who want something with more personality.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {['45–60 minute session', '15–20 fully edited selects', 'Private online gallery delivery', 'Your choice of location in Allegheny County', 'High-resolution files included'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)' }}>—</span>{item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Outdoor Session</Link>
          </div>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Sofia.jpg" alt="Outdoor Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Graduations-4.jpg" alt="Custom Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="eyebrow">Package 03</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Custom Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '28px', lineHeight: 1, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '28px', color: 'var(--dark)' }}>Contact for pricing</p>
            <p style={{ marginBottom: '32px' }}>Have something specific in mind? Whether it is a group shoot, a unique location, or a special occasion, I am happy to put together something that works for you.</p>
            <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="section" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Not sure which package is right for you?</h2>
          <p style={{ marginBottom: '32px' }}>Send me a message and we will figure out the best fit together. No pressure, just a quick conversation.</p>
          <Link href="/contact" className="btn btn-dark">Let us Chat</Link>
        </div>
      </section>
    </>
  )
}
