import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Oros Photography — Pittsburgh Portrait Photographer',
  description: 'Professional headshots and portraits for students, professionals, and creatives in Pittsburgh.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
