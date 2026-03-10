import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section style={{ minHeight: 'calc(100vh - 64px)', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
        <div style={{ padding: '80px 48px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
          <div className="eyebrow">Pittsburgh Portrait Photography</div>
          <h1 style={{ fontStyle: 'italic' }}>Your story,<br />told<br /><em style={{ fontStyle: 'normal', color: 'var(--mid)' }}>professionally.</em></h1>
          <p style={{ maxWidth: '380px', fontSize: '16px' }}>Professional headshots and portraits for students, professionals, and creatives in Pittsburgh.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-dark">Book a Session</Link>
            <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <img src="/images/Pumpkin%20Patch.jpg" alt="Oros Photography" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="section-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">About</div>
            <h2 style={{ marginBottom: '24px', fontStyle: 'italic' }}>Hi, I am Angel, a portrait photographer based in Pittsburgh.</h2>
            <p style={{ marginBottom: '16px' }}>I specialize in professional headshots and portraits that help students, professionals, and creatives put their best face forward.</p>
            <p style={{ marginBottom: '32px' }}>Whether you are updating your LinkedIn, building your brand, or celebrating a milestone, I will make sure you walk away with images you are proud to share.</p>
            <Link href="/about" className="btn btn-outline">More About Me</Link>
          </div>
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img src="/images/Angel.jpg" alt="Angel — Oros Photography" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '48px' }}>What I Offer</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--light)' }}>
            {[
              { num: '01', title: 'Studio Headshots', desc: 'Controlled lighting, clean backgrounds, polished results. Perfect for LinkedIn, lab bios, and professional profiles.', price: '$100', href: '/pricing' },
              { num: '02', title: 'Outdoor Portraits', desc: 'Natural light sessions at a location of your choice within Allegheny County. Authentic and vibrant.', price: '$150', href: '/pricing' },
              { num: '03', title: 'Custom Sessions', desc: 'Group shoots, special occasions, unique locations. Reach out and we will figure it out together.', price: 'Contact', href: '/contact' },
            ].map((s) => (
              <div key={s.num} style={{ background: 'var(--white)', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', color: 'var(--mid)' }}>{s.num}</span>
                <h3>{s.title}</h3>
                <p style={{ flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 500 }}>{s.price}</span>
                  <Link href={s.href} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dark)', textDecoration: 'none' }}>Learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)' }}>
        <div className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div><div className="eyebrow">Portfolio</div><h2 style={{ fontStyle: 'italic' }}>Recent work</h2></div>
            <Link href="/portfolio" className="btn btn-outline">View All</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { src: '/images/Carlos.jpg', alt: 'Portrait', ratio: '2/3' },
              { src: '/images/Liz%20Portrait.jpg', alt: 'Portrait', ratio: '3/4' },
              { src: '/images/Graduations.jpg', alt: 'Graduation portraits', ratio: '2/3' },
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: img.ratio }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>What Are You Waiting For</div>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Let us get you the photos you deserve.</h2>
          <p style={{ marginBottom: '36px' }}>Booking is easy. Reach out and let us create portraits that work for you.</p>
          <Link href="/contact" className="btn btn-dark">Book Your Session</Link>
        </div>
      </section>
    </>
  )
}
