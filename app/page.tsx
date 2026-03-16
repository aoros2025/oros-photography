import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Outdoor Headshot Session',
    desc: 'A 30-minute outdoor session on Pitt’s campus for LinkedIn, lab bios, residency applications, and professional profiles.',
    deliverables: '30 minutes • 5 edited images • delivery in 5 business days',
    price: '$50',
    href: '/pricing',
  },
  {
    num: '02',
    title: 'Graduation Photo Session',
    desc: 'A 60-minute campus session for seniors, graduate students, and anyone celebrating a milestone. Cap and gown welcome.',
    deliverables: '60 minutes • 10 edited images • campus locations included',
    price: '$100',
    href: '/pricing',
  },
  {
    num: '03',
    title: 'Custom Sessions',
    desc: 'Group portraits, personal branding, special occasions, and unique locations tailored to your vision.',
    deliverables: 'Flexible session length • custom planning • personalized quote',
    price: 'Contact',
    href: '/contact',
  },
]

const portfolioImages = [
  {
    src: '/images/Carlos.jpg',
    alt: 'Professional outdoor graduation portrait in Pittsburgh',
    ratio: '2/3',
  },
  {
    src: '/images/Liz%20Portrait.jpg',
    alt: 'Outdoor portrait session for a student in Pittsburgh',
    ratio: '3/4',
  },
  {
    src: '/images/Graduations.jpg',
    alt: 'Graduation group portrait session in Pittsburgh',
    ratio: '2/3',
  },
]

const testimonials = [
  {
    quote:
      'Thank you so much for the session. I truly appreciate you so much and I love how the photos turned out.',
    name: 'Past Client',
  },
  {
    quote: 'I had a great photographer and cannot wait to see the photos.',
    name: 'Past Client',
  },
  {
    quote:
      'Thank you for the directions on how to download the photos. Very appreciated.',
    name: 'Past Client',
  },
]

const trustPoints = [
  {
    title: 'Natural Editing',
    text: 'Clean, polished portraits that still look like you, never overedited or overly retouched.',
  },
  {
    title: 'Guided, Comfortable Sessions',
    text: 'Simple direction throughout your session so you feel relaxed, confident, and fully yourself.',
  },
]

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ minHeight: 'calc(100vh - 64px)', display: 'grid', alignItems: 'stretch' }}
      >
        <div
          className="home-hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          <div className="eyebrow">Pittsburgh Portrait Photography</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h1 style={{ fontStyle: 'italic', margin: 0 }}>
              Your story,
              <br />
              told
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--mid)' }}>professionally.</em>
            </h1>

            <p style={{ maxWidth: '430px', fontSize: '16px', margin: 0 }}>
              Pittsburgh portrait photography for students, professionals, and creatives who want
              images that feel polished, natural, and true to who they are.
            </p>

            <p
              style={{
                maxWidth: '430px',
                fontSize: '14px',
                color: 'var(--mid)',
                margin: 0,
              }}
            >
              Ideal for LinkedIn, lab websites, graduation announcements, personal branding, and
              milestone moments.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-dark">
              Book a Session
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <img
            src="/images/Pumpkin%20Patch.jpg"
            alt="Group portrait photographed by Oros Photography in Pittsburgh"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section
        style={{
          background: 'var(--off-white)',
          borderTop: '1px solid var(--light)',
          borderBottom: '1px solid var(--light)',
        }}
      >
        <div
          className="section-sm home-about-grid"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="eyebrow">About</div>
            <h2 style={{ marginBottom: '24px', fontStyle: 'italic' }}>
              Hi, I am Angel, a portrait photographer based in Pittsburgh.
            </h2>
            <p style={{ marginBottom: '16px' }}>
              I specialize in professional headshots and portraits that help students,
              professionals, and creatives put their best face forward.
            </p>
            <p style={{ marginBottom: '16px' }}>
              I capture honest, natural images without overediting, just the true you.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Whether you are updating your LinkedIn, building your brand, or celebrating a
              milestone, I will make sure you walk away with images you are proud to share.
            </p>
            <Link href="/about" className="btn btn-outline">
              More About Me
            </Link>
          </div>

          <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src="/images/Angel.jpg"
              alt="Portrait of Angel, photographer behind Oros Photography"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--light)' }}>
        <div className="section-sm">
          <div
            className="home-trust-grid"
            style={{
              display: 'grid',
              gap: '24px',
            }}
          >
            {trustPoints.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '28px 24px',
                  border: '1px solid var(--light)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '28px',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    color: 'var(--mid)',
                    fontSize: '14px',
                    maxWidth: '320px',
                    margin: '0 auto',
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="eyebrow" style={{ marginBottom: '48px' }}>
            What I Offer
          </div>

          <div
            className="home-services-grid"
            style={{
              display: 'grid',
              gap: '1px',
              background: 'var(--light)',
            }}
          >
            {services.map((s) => (
              <div
                key={s.num}
                style={{
                  background: 'var(--white)',
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '13px',
                    color: 'var(--mid)',
                  }}
                >
                  {s.num}
                </span>

                <h3 style={{ margin: 0 }}>{s.title}</h3>

                <p style={{ margin: 0 }}>{s.desc}</p>

                <p
                  style={{
                    margin: 0,
                    color: 'var(--mid)',
                    fontSize: '14px',
                    lineHeight: 1.7,
                  }}
                >
                  {s.deliverables}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '8px',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '22px',
                      fontWeight: 500,
                    }}
                  >
                    {s.price}
                  </span>

                  <Link
                    href={s.href}
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--dark)',
                      textDecoration: 'none',
                    }}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--off-white)',
          borderTop: '1px solid var(--light)',
          borderBottom: '1px solid var(--light)',
        }}
      >
        <div className="section">
          <div
            className="home-portfolio-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '32px',
              gap: '20px',
            }}
          >
            <div>
              <div className="eyebrow">Portfolio</div>
              <h2 style={{ fontStyle: 'italic', margin: 0 }}>Recent work</h2>
            </div>

            <Link href="/portfolio" className="btn btn-outline">
              View All
            </Link>
          </div>

          <div
            className="home-portfolio-grid"
            style={{ display: 'grid', gap: '2px' }}
          >
            {portfolioImages.map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: img.ratio }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <div className="section-sm">
          <div className="eyebrow" style={{ marginBottom: '32px' }}>
            Client Words
          </div>

          <div
            className="home-testimonials-grid"
            style={{
              display: 'grid',
              gap: '24px',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                style={{
                  border: '1px solid var(--light)',
                  padding: '32px',
                  background: 'var(--off-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--serif)',
                    fontSize: '24px',
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                  }}
                >
                  “{testimonial.quote}”
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--mid)',
                  }}
                >
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: '1px solid var(--light)',
          borderBottom: '1px solid var(--light)',
        }}
      >
        <div
          className="section"
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            What Are You Waiting For
          </div>

          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>
            Let us get you the photos you deserve.
          </h2>

          <p style={{ marginBottom: '14px' }}>
            Booking is simple. Reach out and let us create portraits that work for you.
          </p>

          <p style={{ marginBottom: '36px', color: 'var(--mid)', fontSize: '14px' }}>
            Graduation season and peak weekend dates fill quickly.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn btn-dark">
              Book Your Session
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)' }}>
        <div
          className="section-sm home-instagram-row"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Stay Connected
            </div>
            <p style={{ margin: 0, maxWidth: '420px' }}>
              See recent sessions, graduation portraits, and headshots on Instagram.
            </p>
          </div>

          <a
            href="https://www.instagram.com/oros_photography/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Follow on Instagram
          </a>
        </div>
      </section>
    </>
  )
}
