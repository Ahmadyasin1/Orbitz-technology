import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orbitz Technology - IT Solutions, AI, Cybersecurity & Consulting',
  description: 'Orbitz Technology offers professional IT services, AI development, cybersecurity, software solutions, and consulting for businesses. Discover our case studies, webinars, and whitepapers.',
  generator: 'Orbitz Technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Orbitz Technology offers professional IT services, AI development, cybersecurity, software solutions, and consulting for businesses. Discover our case studies, webinars, and whitepapers." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orbitztechnology.com/" />
        <meta property="og:title" content="Orbitz Technology - IT Solutions, AI, Cybersecurity & Consulting" />
        <meta property="og:description" content="Professional IT services, AI, cybersecurity, and consulting for business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.orbitztechnology.com/" />
        <meta property="og:image" content="/insight-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orbitz Technology - IT Solutions, AI, Cybersecurity & Consulting" />
        <meta name="twitter:description" content="Professional IT services, AI, cybersecurity, and consulting for business growth." />
        <meta name="twitter:image" content="/insight-logo.png" />
        <style>{`
html {
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-sans: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ${GeistMono.variable};
  background: #f7f8fa;
  color: #22223b;
}
body {
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.7;
  background: #f7f8fa;
  color: #22223b;
}
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
