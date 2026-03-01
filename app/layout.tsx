import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rikba.eu"),

  title: "Rikba | Malta's Ride-Hailing App | Coming Summer 2026",
  description:
    "Lower prices. Happier drivers. An app that's 100% Maltese and keeps your money on the island.",

  icons: {
    icon: "https://rikba.eu/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    shortcut: "https://rikba.eu/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    apple: "https://rikba.eu/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
  },

  openGraph: {
    title: "Rikba",
    description: "Malta deserves a better ride.",
    url: "https://rikba.eu",
    siteName: "Rikba",
    images: [
      {
        url: "https://rikba.eu/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
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
    images: [
      "https://rikba.eu/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    ],
  },
}

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
