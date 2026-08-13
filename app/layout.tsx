import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reet Bhatia — Cybersecurity Analyst',
  description:
    'Reet Bhatia — Cybersecurity Analyst focused on cloud security, security operations, threat hunting, incident response, and AI-assisted security automation.',
  generator: 'v0.app',
  keywords: [
    'Reet Bhatia',
    'Cybersecurity Analyst',
    'Cloud Security',
    'Security Operations',
    'Threat Hunting',
    'Incident Response',
    'AWS Security',
  ],
  openGraph: {
    title: 'Reet Bhatia — Cybersecurity Analyst',
    description:
      'Cloud security, security operations, threat hunting, incident response, and AI-assisted security automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d1013',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark bg-background"
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
