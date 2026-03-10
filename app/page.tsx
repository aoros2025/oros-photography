import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'stretch',
      }}>
        {/* Left — text */}
        <div style={{
          padding: '80px 48px 80px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '32px',
        }}>
          <div className="eyebrow">Pittsburgh Portrait Photography</div>
          <h1 style={{ fontStyle: 'italic' }}>
            Your story,<br />
            told<br />
            <em style={{ fontStyle: 'normal', color: 'var(--mid)' }}>professionally.</em>
          </h1>
          <p style={{ maxWidth: '380px', fontSize: '16px' }}>
            Professional headshots and portraits for students, professionals, and creatives in Pittsburgh.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-dark">Book a Session</Link>
            <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="img-placeholder" style={{ minHeight: '500px' }}>
          [ hero image ]
        </div>
      </section>

      {/* Intro strip */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="section-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">About</div>
            <h2 style={{ marginBottom: '24px', fontStyle: 'italic' }}>Hi, I'm Angel, a portrait photographer based in Pittsburgh.</h2>
            <p style={{ marginBottom: '16px' }}>
              I specialize in professional headshots and portraits that help students, professionals, and creatives put their best face forward.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Whether you're updating your LinkedIn, building your brand, or celebrating a milestone, I'll make sure you walk away with images you're proud to share.
            </p>
            <Link href="/about" className="btn btn-outline">More About Me</Link>
          </div>
          <div className="img-placeholder" style={{ aspectRatio: '3/4' }}>
            [ portrait of Angel ]
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '48px' }}>What I Offer</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--light)' }}>
            {[
              { num: '01', title: 'Studio Headshots', desc: 'Controlled lighting, clean backgrounds, polished results. Perfect for LinkedIn, lab bios, and professional profiles.', price: '$100', href: '/pricing' },
              { num: '02', title: 'Outdoor Portraits', desc: 'Natural light sessions at a location of your choice within Allegheny County. Authentic and vibrant.', price: '$150', href: '/pricing' },
              { num: '03', title: 'Custom Sessions', desc: 'Group shoots, special occasions, unique locations. Let\'s figure out something that works for you.', price: 'Contact', href: '/contact' },
            ].map((s) => (
              <div key={s.num} style={{
                background: 'var(--white)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', color: 'var(--mid)' }}>{s.num}</span>
                <h3>{s.title}</h3>
                <p style={{ flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 500 }}>{s.price}</span>
                  <Link href={s.href} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dark)', textDecoration: 'none' }}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample gallery row */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)' }}>
        <div className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div>
              <div className="eyebrow">Portfolio</div>
              <h2 style={{ fontStyle: 'italic' }}>Recent work</h2>
            </div>
            <Link href="/portfolio" className="btn btn-outline">View All</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {['portrait 1', 'portrait 2', 'portrait 3'].map((label, i) => (
              <div key={i} className="img-placeholder" style={{ aspectRatio: i === 1 ? '3/4' : '2/3' }}>
                [ {label} ]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="section" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>What Are You Waiting For</div>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Let's get you the photos you deserve.</h2>
          <p style={{ marginBottom: '36px' }}>Booking is easy. Reach out and let's create portraits that work for you.</p>
          <Link href="/contact" className="btn btn-dark">Book Your Session</Link>
        </div>
      </section>
    </>
  )
}
