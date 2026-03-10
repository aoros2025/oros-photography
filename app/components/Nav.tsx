'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <Link href="/" className="nav-brand">Oros Photography</Link>
        <ul className="nav-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact" className="nav-book">Book With Me</Link></li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'var(--white)', borderBottom: '1px solid var(--light)',
          padding: '24px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[['/', 'Home'], ['/about', 'About'], ['/experience', 'Experience'], ['/pricing', 'Pricing'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)} style={{
                  fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--dark)', textDecoration: 'none'
                }}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-dark">Book With Me</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
