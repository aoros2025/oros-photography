import Link from 'next/link'

export const metadata = {
  title: 'Pricing — Oros Photography',
}

export default function Pricing() {
  return (
    <>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Pricing</div>
        <h1 style={{ fontStyle: 'italic', maxWidth: '600px' }}>Simple, transparent packages.</h1>
      </section>

      {/* Package 01 */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="img-placeholder" style={{ aspectRatio: '3/4' }}>[ studio headshot sample ]</div>
          <div>
            <div className="eyebrow">Package 01</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Studio Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$100</p>
            <p style={{ marginBottom: '16px' }}>
              A relaxed indoor portrait session at my private studio in Verona, PA. Perfect for professional headshots, LinkedIn photos, or personal portraits.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Controlled lighting means consistent, polished results no matter the weather or time of day. Includes a 30–45 minute session and 10 fully edited photos delivered via private online gallery.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {['30–45 minute session', '10 fully edited selects', 'Private online gallery delivery', 'High-resolution files included', 'Studio in Verona, PA'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)', fontSize: '18px', lineHeight: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Studio Session</Link>
          </div>
        </div>
      </section>

      {/* Package 02 */}
      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Package 02</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Outdoor Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '48px', lineHeight: 1, marginBottom: '28px' }}>$150</p>
            <p style={{ marginBottom: '16px' }}>
              Take your portraits outside at a location of your choice within Allegheny County. Natural light, real environments, and a relaxed atmosphere make for authentic, vibrant images.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Perfect for students, creatives, and professionals who want something with more personality. Includes a 45–60 minute session and 15–20 fully edited photos delivered via private online gallery.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {['45–60 minute session', '15–20 fully edited selects', 'Private online gallery delivery', 'Your choice of location in Allegheny County', 'High-resolution files included'].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--dark)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--mid)', fontSize: '18px', lineHeight: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark">Book Outdoor Session</Link>
          </div>
          <div className="img-placeholder" style={{ aspectRatio: '3/4' }}>[ outdoor portrait sample ]</div>
        </div>
      </section>

      {/* Package 03 */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="img-placeholder" style={{ aspectRatio: '3/4' }}>[ custom session sample ]</div>
          <div>
            <div className="eyebrow">Package 03</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Custom Session</h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '32px', lineHeight: 1, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '28px', color: 'var(--dark)' }}>Contact for pricing</p>
            <p style={{ marginBottom: '32px' }}>
              Have something specific in mind? Whether it's a group shoot, a unique location, or a special occasion, I'm happy to put together something that works for you. Reach out and let's figure it out together.
            </p>
            <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section>
        <div className="section" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Not sure which package is right for you?</h2>
          <p style={{ marginBottom: '32px' }}>Send me a message and we'll figure out the best fit together. No pressure, just a quick conversation.</p>
          <Link href="/contact" className="btn btn-dark">Let's Chat</Link>
        </div>
      </section>
    </>
  )
}
