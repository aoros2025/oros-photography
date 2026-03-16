import Link from 'next/link'

export const metadata = { title: 'About — Oros Photography' }

const aboutCards = [
  {
    num: '01',
    title: 'The dogs made me do it',
    body: 'I share my home in Verona with my partner Patrick and our two dogs, Jar Jar and Zina. They have definitely appeared in more test shots than they probably planned for.',
  },
  {
    num: '02',
    title: 'Arizona born, Pittsburgh made',
    body: 'I grew up in the Southwest and eventually found my home in Pittsburgh. The fall colors here honestly compete with every desert sunset I grew up with.',
  },
  {
    num: '03',
    title: 'The camera is always close',
    body: 'Photography started as a creative outlet and became something I genuinely believe in: everyone deserves photos that reflect who they really are.',
  },
  {
    num: '04',
    title: 'It started personal',
    body: 'I got into photography because I know what it feels like to not have a single photo you truly like of yourself. That is what I want to help change for other people.',
  },
]

export default function About() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div
          className="section about-hero-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src="/images/Angel2.jpg"
              alt="Portrait of Angel, photographer behind Oros Photography"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="eyebrow">About</div>

            <h1 style={{ fontStyle: 'italic', marginBottom: '24px' }}>
              I am Angel, a portrait photographer based in Pittsburgh.
            </h1>

            <h3
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}
            >
              I pick up my camera to help people see themselves with confidence.
            </h3>

            <p style={{ marginBottom: '16px' }}>
              I am a Pittsburgh-based portrait photographer with a passion for creating images
              that feel natural, honest, and true to you.
            </p>

            <p style={{ marginBottom: '32px' }}>
              Whether you are a student stepping into your career, a professional refreshing
              your image, or a creative building your brand, I want you to leave with photos
              that feel polished without losing what makes you you.
            </p>

            <Link href="/portfolio" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--off-white)',
          borderBottom: '1px solid var(--light)',
        }}
      >
        <div className="section">
          <div
            className="about-cards-grid"
            style={{
              display: 'grid',
              gap: '1px',
              background: 'var(--light)',
            }}
          >
            {aboutCards.map((item) => (
              <div
                key={item.num}
                style={{
                  background: 'var(--white)',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '13px',
                    color: 'var(--mid)',
                  }}
                >
                  {item.num}
                </span>

                <h3 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>{item.title}</h3>

                <p style={{ fontSize: '14px', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '20px' }}>
            My Work
          </div>

          <p
            style={{
              marginBottom: '32px',
              maxWidth: '520px',
              color: 'var(--mid)',
            }}
          >
            Portraits that feel natural, confident, and true to the moment.
          </p>

          <div
            className="about-work-grid"
            style={{ display: 'grid', gap: '2px' }}
          >
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/images/Graduations-2.jpg"
                alt="Graduation portrait photographed by Oros Photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/images/Ashley.jpg"
                alt="Portrait session photographed by Oros Photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--off-white)',
          borderTop: '1px solid var(--light)',
        }}
      >
        <div
          className="section"
          style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}
        >
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Let us work together.</h2>

          <p style={{ marginBottom: '32px' }}>
            Ready for photos that feel like you, at your best?
          </p>

          <Link href="/contact" className="btn btn-dark">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  )
}
