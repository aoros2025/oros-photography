import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Portfolio — Oros Photography' }

export default function Portfolio() {
  const headshots = [
    { src: '/images/Liz%20Portrait.jpg', alt: 'Outdoor portrait of a student photographed by Oros Photography' },
    { src: '/images/Ashley.jpg', alt: 'Natural portrait session photographed by Oros Photography' },
    { src: '/images/Grace.jpg', alt: 'Outdoor portrait of a student in Pittsburgh' },
    { src: '/images/Sofia.jpg', alt: 'Portrait photographed in natural light by Oros Photography' },
    { src: '/images/Maddie.jpg', alt: 'Professional outdoor portrait photographed by Oros Photography' },
    { src: '/images/Patrick.jpg', alt: 'Outdoor headshot photographed by Oros Photography' },
    { src: '/images/Andrea.jpg', alt: 'Portrait session photographed by Oros Photography' },
  ]

  const graduations = [
    { src: '/images/Graduations.jpg', alt: 'Group graduation portrait photographed by Oros Photography' },
    { src: '/images/Graduations-2.jpg', alt: 'Graduation portrait session photographed by Oros Photography' },
    { src: '/images/Graduations-3.jpg', alt: 'Close graduation portrait photographed by Oros Photography' },
    { src: '/images/Graduations-4.jpg', alt: 'Graduation portrait with stole photographed by Oros Photography' },
    { src: '/images/Graduations-5.jpg', alt: 'Graduation portrait photographed outdoors by Oros Photography' },
    { src: '/images/Graduations-6.jpg', alt: 'Graduation group portrait photographed at sunset by Oros Photography' },
    { src: '/images/Victoria.jpg', alt: 'Individual graduation portrait photographed by Oros Photography' },
    { src: '/images/Grad_Trio.jpg', alt: 'Graduation trio portrait photographed by Oros Photography' },
    { src: '/images/Patrick_Grad.jpg', alt: 'Graduation portrait in natural outdoor light photographed by Oros Photography' },
  ]

  const Grid = ({
    photos,
    priority = false,
  }: {
    photos: { src: string; alt: string }[]
    priority?: boolean
  }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
      {photos.map((p, i) => (
        <div key={i} style={{ overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
          <Image
            src={p.src}
            alt={p.alt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={priority && i < 3}
          />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--light)', padding: '80px 80px 60px' }}>
        <div className="eyebrow">Portfolio</div>
        <h1 style={{ fontStyle: 'italic', marginBottom: '16px' }}>Recent work</h1>
        <p style={{ maxWidth: '560px', color: 'var(--mid)', margin: 0 }}>
          A collection of portraits that feel natural, confident, and true to you.
        </p>
      </section>

      <section>
        <div style={{ padding: '32px 48px', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '24px' }}>
            Headshots &amp; Portraits
          </div>
          <Grid photos={headshots} priority={true} />
        </div>
      </section>

      <section>
        <div style={{ padding: '32px 48px', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: '24px' }}>
            Graduation Portraits
          </div>
          <Grid photos={graduations} />
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--light)' }}>
        <div className="section" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>Like what you see?</h2>
          <p style={{ marginBottom: '32px' }}>
            Let&apos;s create photos that feel like you, at your best.
          </p>
          <Link href="/contact" className="btn btn-dark">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  )
}
