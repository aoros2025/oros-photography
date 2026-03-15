import Link from 'next/link'

export const metadata = { title: 'Pricing — Oros Photography' }

export default function Pricing() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Pricing</div>
        <h1 style={{ fontStyle: 'italic', maxWidth: '600px' }}>Simple, transparent packages.</h1>
      </section>

      {/* Package 01 — Headshots */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Angel.jpg" alt="Outdoor Headshot Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="eyebrow">Package 01</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Outdoor Headshot Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$50</p>
            <p style={{ marginBottom: '16px' }}>An outdoor portrait session on Pitt's campus. Perfect for researchers, undergrads, grad students, and academics who need photos that actually work for them.</p>
            <p style={{ marginBottom: '32px' }}>Natural light, real environments, and a relaxed atmosphere — LinkedIn-ready results without the stuffy studio feel.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                '30-minute session',
                '5 fully edited images',
                'High-resolution delivery',
                'LinkedIn ready',
                'On campus — Pitt',
                '5 business day turnaround',
              ].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)' }}>—</span>{item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Headshot Session</Link>
          </div>
        </div>
      </section>

      {/* Package 02 — Graduation */}
      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Package 02</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Graduation Portrait Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$100</p>
            <p style={{ marginBottom: '16px' }}>For seniors, grad students, and anyone ready to celebrate how far they've come. Wear your cap and gown, dress up, or both — whatever makes you feel your best.</p>
            <p style={{ marginBottom: '32px' }}>We'll meet at your preferred campus location. Bring any meaningful props — diploma, honor cords, department pennant. Come photo-ready and we'll handle the rest.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                '60-minute session',
                '25 fully edited images',
                'High-resolution delivery',
                'Cap & gown welcome',
                'On campus — Pitt',
                '7 business day turnaround',
              ].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)' }}>—</span>{item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Graduation Session</Link>
          </div>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Graduations-4.jpg" alt="Graduation Portrait Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Package 03 — Custom */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Sofia.jpg" alt="Custom Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
