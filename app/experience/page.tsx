import Link from 'next/link'

export const metadata = {
  title: 'Experience — Oros Photography',
}

export default function Experience() {
  return (
    <>
      {/* Hero */}
      <section style={{ borderBottom: '1px solid var(--light)' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow">The Experience</div>
            <h1 style={{ fontStyle: 'italic', marginBottom: '24px' }}>
              No experience needed.<br />Just show up as yourself.
            </h1>
            <p style={{ marginBottom: '16px' }}>
              Most people feel awkward in front of a camera, and that's completely normal.
            </p>
            <p>
              My job is to make the session feel easy and low-pressure so the photos look like you on your best day — not like you trying to pose.
            </p>
          </div>
          <div>
            <div className="img-placeholder" style={{ aspectRatio: '3/4' }}>[ session photo ]</div>
            <p style={{ fontSize: '12px', color: 'var(--mid)', letterSpacing: '0.1em', marginTop: '12px', textAlign: 'center' }}>The real you, framed into a timeless portrait</p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '48px' }}>My Approach</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light)' }}>
            {[
              { num: '01', title: 'Fill out the form', body: 'Head to the contact page, fill out a quick form, and I\'ll get back to you as soon as possible to confirm your session.' },
              { num: '02', title: 'Let\'s connect', body: 'I\'ll reach out to nail down the details — location, vibe, and what you need the photos for. Quick and easy, no calls required.' },
              { num: '03', title: 'Picture time', body: 'This is where the magic happens. We\'ll meet at your chosen location, I\'ll guide you through everything, and you just focus on being yourself.' },
              { num: '04', title: 'Delivering photos', body: 'Within 24–48 hours, your edited gallery will be delivered through a private online link, ready to download and share.' },
            ].map((step) => (
              <div key={step.num} style={{ background: 'var(--white)', padding: '48px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '40px', color: 'var(--light)', lineHeight: 1 }}>{step.num}</span>
                <h3 style={{ fontSize: '18px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '48px' }}>FAQ</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { q: 'What should I wear?', a: 'Wear something you feel confident and comfortable in. Solid colors tend to photograph cleanest, especially for headshots. Avoid busy patterns or logos if possible. When in doubt, bring a couple of options.' },
              { q: 'How long does a session take?', a: 'Studio sessions run 30–45 minutes, outdoor sessions 45–60 minutes. Custom sessions vary. I\'ll give you a heads up on timing when we confirm.' },
              { q: 'When will I get my photos?', a: 'I deliver edited galleries within 24–48 hours of the session. You\'ll receive a private link to a high-resolution gallery you can download from.' },
              { q: 'Can I bring someone with me?', a: 'Absolutely. Having a friend or partner along can make the session feel way more relaxed, especially if you\'re camera-shy.' },
              { q: 'What if I don\'t like any of the photos?', a: 'I work hard to make sure that doesn\'t happen — but if there\'s something specific you\'re not happy with, reach out and let\'s figure it out.' },
              { q: 'Do you shoot groups?', a: 'Yes, that falls under custom sessions. Reach out with details and we\'ll work out pricing and logistics together.' },
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: '1px solid var(--light)',
                padding: '28px 0',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
              }}>
                <h3 style={{ fontSize: '17px', fontStyle: 'italic', lineHeight: 1.3 }}>{item.q}</h3>
                <p style={{ fontSize: '14px' }}>{item.a}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--light)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Ready to book?</h2>
          <p style={{ marginBottom: '32px' }}>It's easier than you think. Fill out a quick form and I'll be in touch.</p>
          <Link href="/contact" className="btn btn-dark">Book Your Session</Link>
        </div>
      </section>
    </>
  )
}
