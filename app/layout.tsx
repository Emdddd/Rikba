import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rikba | Malta's Ride-Hailing App | Coming Summer 2026",
  description:
    "Lower prices. Happier drivers. An app that's 100% Maltese and keeps your money on the island.",

  metadataBase: new URL("https://rikba.eu"),

  icons: {
    icon: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    shortcut: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    apple: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
  },

  openGraph: {
    title: "Rikba",
    description: "Malta deserves a better ride.",
    url: "https://rikba.eu",
    siteName: "Rikba",
    images: [
      {
        url: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
        width: 512,
        height: 512,
        alt: "Rikba",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rikba",
    description: "Malta deserves a better ride.",
    images: ["/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
