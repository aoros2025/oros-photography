'use client'

import Script from 'next/script'

export default function Contact() {
  return (
    <>
<section className="contact-hero">
  <div className="eyebrow">Contact</div>
        <h1 style={{ fontStyle: 'italic', maxWidth: '600px', marginBottom: '16px' }}>
          Let us work together.
        </h1>
        <p style={{ maxWidth: '620px', color: 'var(--mid)', margin: 0 }}>
          Whether you already know what you need or just want to ask a question, I would love to
          hear from you.
        </p>
      </section>

      <section>
      <div
  className="section contact-grid"
  style={{
    display: 'grid',
    gap: '60px',
    alignItems: 'flex-start',
  }}
>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="/images/Pumpkin%20Patch.jpg"
                alt="Group portrait photographed by Oros Photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '6px' }}>
                  Instagram
                </div>
                <a
                  href="https://instagram.com/oros_photography"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '18px',
                    color: 'var(--dark)',
                    textDecoration: 'none',
                  }}
                >
                  @oros_photography
                </a>
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: '6px' }}>
                  Based In
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', margin: 0 }}>
                  Pittsburgh, PA
                </p>
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: '6px' }}>
                  Typical Response Time
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', margin: 0 }}>
                  Within 24 hours
                </p>
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: '6px' }}>
                  Best For
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', margin: 0 }}>
                  Headshots, graduation portraits, and custom sessions
                </p>
              </div>
            </div>
          </div>

          <div>
            <p style={{ marginBottom: '20px', color: 'var(--mid)', maxWidth: '560px' }}>
              Not sure what to choose? Fill out the form below and I will help you find the best
              fit.
            </p>

            <div className="hb-p-67cb7b7e96c232002dc599f7-1"></div>

            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.honeybook.com/p.png?pid=67cb7b7e96c232002dc599f7"
              alt=""
            />

            <Script
              id="honeybook-embed"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(h,b,s,n,i,p,e,t) {
                    h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
                    t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                    e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
                  })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","67cb7b7e96c232002dc599f7");
                `,
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
