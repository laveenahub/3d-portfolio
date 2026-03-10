import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Laveena Chetwani | UI/UX Designer Portfolio',
  description: 'UI/UX Designer with 1+ year of experience creating user-focused digital experiences for SaaS and client websites. Specializing in high-converting, accessible designs.',
  keywords: ['UI Designer', 'UX Designer', 'Product Designer', 'Laveena Chetwani', 'Jaipur', 'Figma', 'Web Design', 'SaaS', 'Portfolio', 'Creative Developer'],
  authors: [{ name: 'Laveena Chetwani' }],
  creator: 'Laveena Chetwani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laveenachetwani.com/', // Replace with actual domain when available
    title: 'Laveena Chetwani | UI/UX Designer',
    description: 'UI/UX Designer creating user-focused digital experiences for SaaS and client websites.',
    siteName: 'Laveena Chetwani Portfolio',
    images: [
      {
        url: '/icon.png', // Fallback for OG image if not specifically created
        width: 1024,
        height: 1024,
        alt: 'Laveena Chetwani Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laveena Chetwani | UI/UX Designer',
    description: 'UI/UX Designer creating user-focused digital experiences for SaaS and client websites.',
    creator: '@laveenaa_designn', 
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
