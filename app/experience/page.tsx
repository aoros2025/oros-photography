import Link from 'next/link'

export const metadata = { title: 'Experience — Oros Photography' }

const steps = [
  {
    num: '01',
    title: 'Choose your session',
    body: 'Head to the pricing page, choose the session that fits what you need, and follow the booking link to get started.',
  },
  {
    num: '02',
    title: 'Let us connect',
    body: 'I will reach out to confirm the details, including location, vibe, and what you need the photos for. Quick and easy, no calls required.',
  },
  {
    num: '03',
    title: 'Picture time',
    body: 'This is where the magic happens. We will meet at your chosen location, I will guide you through everything, and you just focus on being yourself.',
  },
  {
    num: '04',
    title: 'Delivering photos',
    body: 'Your edited gallery will be delivered within 5 business days through a private online link, ready to download and share.',
  },
]

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Wear something you feel confident and comfortable in. Solid colors tend to photograph cleanest, especially for headshots. Avoid busy patterns or logos if possible. When in doubt, bring a couple of options.',
  },
  {
    q: 'How long does a session take?',
    a: 'Most sessions run between 30 and 60 minutes, depending on what you book. Custom sessions may vary, and I will always confirm timing with you beforehand.',
  },
  {
    q: 'When will I get my photos?',
    a: 'I deliver edited galleries within 5 business days of the session. You will receive a private link to a high-resolution gallery you can download from.',
  },
  {
    q: 'Can I bring someone with me?',
    a: 'Absolutely. Having a friend or partner along can make the session feel much more relaxed, especially if you are camera-shy.',
  },
  {
    q: 'What if I do not like any of the photos?',
    a: 'I work hard to make sure that does not happen, but if there is something specific you are not happy with, reach out and let us figure it out.',
  },
  {
    q: 'Do you shoot groups?',
    a: 'Yes, that falls under custom sessions. Reach out with details and we will work out pricing and logistics together.',
  },
]

export default function Experience() {
  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div
          className="section experience-hero-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="eyebrow">The Experience</div>

            <h1 style={{ fontStyle: 'italic', marginBottom: '24px' }}>
              No experience needed.
              <br />
              Just show up as yourself.
            </h1>

            <p style={{ marginBottom: '16px' }}>
              Most people feel awkward in front of a camera, and that is completely normal.
            </p>

            <p>
              My job is to make the session feel easy and low-pressure so the photos look like
              you on your best day, not like you are trying to pose.
            </p>
          </div>

          <div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/images/Andrea.jpg"
                alt="Portrait session photographed by Oros Photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontSize: '12px',
                color: 'var(--mid)',
                letterSpacing: '0.1em',
                marginTop: '12px',
                textAlign: 'center',
              }}
            >
              The real you, captured with intention.
            </p>
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
          <div className="eyebrow" style={{ marginBottom: '48px' }}>
            My Approach
          </div>

          <div
            className="experience-steps-grid"
            style={{
              display: 'grid',
              gap: '1px',
              background: 'var(--light)',
            }}
          >
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'var(--white)',
                  padding: '48px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '40px',
                    color: 'var(--light)',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>

                <h3 style={{ fontSize: '18px', margin: 0 }}>{step.title}</h3>

                <p style={{ fontSize: '14px', margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '48px' }}>
            FAQ
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((item, i) => (
              <div
                key={i}
                className="experience-faq-row"
                style={{
                  borderTop: '1px solid var(--light)',
                  padding: '28px 0',
                  display: 'grid',
                  gap: '40px',
                }}
              >
                <h3
                  style={{
                    fontSize: '17px',
                    fontStyle: 'italic',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {item.q}
                </h3>

                <p style={{ fontSize: '14px', margin: 0 }}>{item.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--light)' }} />
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
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Ready to book?</h2>

          <p style={{ marginBottom: '32px' }}>
            It is easier than you think. Choose your session and I will take it from there.
          </p>

          <Link href="/pricing" className="btn btn-dark">
            View Pricing
          </Link>
        </div>
      </section>
    </>
  )
}
