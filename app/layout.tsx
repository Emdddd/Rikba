import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
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

  keywords: [
    "Rikba",
    "Taxi Malta",
    "Ride Hailing Malta",
    "Bolt Alternative Malta",
    "Taxi App Malta",
    "Cheap Taxi Malta",
    "Malta Transport",
  ],

  authors: [
    {
      name: "Rikba",
      url: "https://rikba.eu",
    },
  ],

  creator: "Rikba",
  publisher: "Rikba",

  icons: {
    icon: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    shortcut: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
    apple: "/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png",
  },

  openGraph: {
    title: "Rikba | Malta's Ride-Hailing App",

    description:
      "Lower prices. Happier drivers. Malta deserves a better ride.",

    url: "https://rikba.eu",

    siteName: "Rikba",

    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "Rikba",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Rikba | Malta's Ride-Hailing App",

    description:
      "Lower prices. Happier drivers. Malta deserves a better ride.",

    images: ["/Opengraph.png"],

    creator: "@rikba",
  },

  alternates: {
    canonical: "https://rikba.eu",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
