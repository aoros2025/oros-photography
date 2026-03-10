import Link from 'next/link'

export const metadata = { title: 'Portfolio — Oros Photography' }

const photos = [
  { src: '/images/Liz%20Portrait.jpg', alt: 'Portrait' },
  { src: '/images/Ashley.jpg', alt: 'Portrait' },
  { src: '/images/Carlos.jpg', alt: 'Portrait' },
  { src: '/images/Sofia.jpg', alt: 'Portrait' },
  { src: '/images/Patrick.jpg', alt: 'Portrait' },
  { src: '/images/Andrea.jpg', alt: 'Portrait' },
  { src: '/images/Graduations.jpg', alt: 'Graduation portraits' },
  { src: '/images/Graduations-2.jpg', alt: 'Graduation portraits' },
  { src: '/images/Graduations-3.jpg', alt: 'Graduation portraits' },
  { src: '/images/Graduations-4.jpg', alt: 'Graduation portraits' },
  { src: '/images/Graduations-5.jpg', alt: 'Graduation portraits' },
  { src: '/images/Graduations-6.jpg', alt: 'Graduation portraits' },
]

export default function Portfolio() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Portfolio</div>
        <h1 style={{ fontStyle: 'italic' }}>Recent work</h1>
      </section>

      <section>
        <div style={{ padding: '32px 48px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
            {photos.map((p, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
                <img
                  src={p.src}
                  alt={p.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Like what you see?</h2>
          <p style={{ marginBottom: '32px' }}>Let us create something you will actually want to show people.</p>
          <Link href="/contact" className="btn btn-dark">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
