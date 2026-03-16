import Link from 'next/link'

export const metadata = { title: 'Pricing — Oros Photography' }

export default function Pricing() {
  return (
    <>
      <section className="pricing-hero">
        <div className="eyebrow">Pricing</div>
        <h1 style={{ fontStyle: 'italic', maxWidth: '600px' }}>Simple, transparent pricing.</h1>
      </section>

      {/* Package 01 */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div
          className="section pricing-package-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src="/images/Angel.jpg"
              alt="Outdoor headshot session photographed by Oros Photography"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="eyebrow">Package 01</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>
              Outdoor Headshot Session
            </h2>

            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '48px',
                lineHeight: 1,
                marginBottom: '28px',
              }}
            >
              $50
            </p>

            <p style={{ marginBottom: '16px' }}>
              An outdoor portrait session on Pitt&apos;s campus for students, researchers,
              professionals, and creatives who want clean, confident images that actually feel
              like them.
            </p>

            <p style={{ marginBottom: '32px' }}>
              Natural light, real environments, and a relaxed atmosphere for polished results
              without the stiff studio feel.
            </p>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '36px',
                padding: 0,
              }}
            >
              {[
                '30-minute session',
                '5 fully edited images',
                'High-resolution delivery',
                'LinkedIn-ready images',
                'On Pitt’s campus',
                '5 business day turnaround',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '14px',
                    color: 'var(--dark)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: 'var(--mid)' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://orosphotography.hbportal.co/public/69b63f633a2fe3003b54779e"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Book Headshot Session
            </Link>
          </div>
        </div>
      </section>

      {/* Package 02 */}
      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div
          className="section pricing-package-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div className="pricing-text-first">
            <div className="eyebrow">Package 02</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>
              Graduation Portrait Session
            </h2>

            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '48px',
                lineHeight: 1,
                marginBottom: '28px',
              }}
            >
              $100
            </p>

            <p style={{ marginBottom: '16px' }}>
              For seniors, grad students, and anyone ready to celebrate how far they have come.
              Wear your cap and gown, dress up, or do both, whatever feels most like you.
            </p>

            <p style={{ marginBottom: '32px' }}>
              We will meet at your preferred campus location. Bring any meaningful props like
              your diploma, honor cords, or department pennant, and I will take care of the rest.
            </p>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '36px',
                padding: 0,
              }}
            >
              {[
                '60-minute session',
                '25 fully edited images',
                'High-resolution delivery',
                'Cap and gown welcome',
                'On Pitt’s campus',
                '7 business day turnaround',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '14px',
                    color: 'var(--dark)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: 'var(--mid)' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://orosphotography.hbportal.co/public/69b68f0b5eb23c0038619540"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Book Graduation Session
            </Link>
          </div>

          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src="/images/Graduations-4.jpg"
              alt="Graduation portrait session photographed by Oros Photography"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Package 03 */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div
          className="section pricing-package-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src="/images/Sofia.jpg"
              alt="Custom portrait session photographed by Oros Photography"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="eyebrow">Package 03</div>
            <h2 style={{ fontStyle: 'italic', marginBottom: '12px' }}>Custom Session</h2>

            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '28px',
                lineHeight: 1,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '28px',
                color: 'var(--dark)',
              }}
            >
              Contact for pricing
            </p>

            <p style={{ marginBottom: '32px' }}>
              Have something specific in mind? Whether it is a group shoot, a special occasion,
              or a unique location, I am happy to put together something that fits what you need.
            </p>

            <Link href="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div
          className="section"
          style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}
        >
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>
            Not sure which package is right for you?
          </h2>

          <p style={{ marginBottom: '32px' }}>
            Send me a message and we will figure out the best fit together. No pressure, just a
            quick conversation.
          </p>

          <Link href="/contact" className="btn btn-dark">
            Let Us Chat
          </Link>
        </div>
      </section>
    </>
  )
}
