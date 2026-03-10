import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-brand">Oros Photography</Link>
      <ul className="footer-links">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <p className="footer-copy">© 2026 Oros Photography</p>
    </footer>
  )
}
