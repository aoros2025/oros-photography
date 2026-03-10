import Link from 'next/link'

export const metadata = {
  title: 'Portfolio — Oros Photography',
}

export default function Portfolio() {
  const placeholders = [
    { label: 'portrait 1', span: 'tall' },
    { label: 'portrait 2', span: 'wide' },
    { label: 'portrait 3', span: 'normal' },
    { label: 'portrait 4', span: 'normal' },
    { label: 'portrait 5', span: 'wide' },
    { label: 'portrait 6', span: 'tall' },
    { label: 'portrait 7', span: 'normal' },
    { label: 'portrait 8', span: 'normal' },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Portfolio</div>
        <h1 style={{ fontStyle: 'italic' }}>Recent work</h1>
      </section>

      {/* Gallery grid */}
      <section>
        <div style={{ padding: '48px', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Category filter — static for now */}
          <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', borderBottom: '1px solid var(--light)', paddingBottom: '20px' }}>
            {['All', 'Headshots', 'Portraits', 'Milestones'].map((cat) => (
              <button key={cat} style={{
                background: cat === 'All' ? 'var(--black)' : 'transparent',
                color: cat === 'All' ? 'var(--white)' : 'var(--mid)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: cat === 'All' ? '8px 18px' : '8px 0',
                fontFamily: 'var(--sans)',
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}>
            {placeholders.map((p, i) => (
              <div key={i} className="img-placeholder" style={{
                aspectRatio: p.span === 'tall' ? '2/3' : p.span === 'wide' ? '4/3' : '3/4',
                gridColumn: p.span === 'wide' ? 'span 2' : 'span 1',
              }}>
                [ {p.label} ]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Like what you see?</h2>
          <p style={{ marginBottom: '32px' }}>Let's create something you'll actually want to show people.</p>
          <Link href="/contact" className="btn btn-dark">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
