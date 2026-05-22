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
    "Fair prices and lower commissions are coming soon to Malta.",

  keywords: [
    "Rikba",
    "Taxi Malta",
    "Ride Hailing Malta",
    "Bolt Alternative Malta",
    "Taxi App Malta",
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
    icon: [
      {
        url: "/Favecoiiin.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/Favecoiiin.png",

    apple: [
      {
        url: "/Favecoiiin.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Rikba | Malta's Ride-Hailing App",

    description:
      "Fair prices and lower commissions are coming soon to Malta.",

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
      "Fair prices and lower commissions are coming soon to Malta.",

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
