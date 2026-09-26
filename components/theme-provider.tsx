'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

const MALTA_LATITUDE = 35.9375
const MALTA_LONGITUDE = 14.3754
const MALTA_TIME_ZONE = 'Europe/Malta'

function getMaltaDateKey() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: MALTA_TIME_ZONE,
  }).format(new Date())
}

async function getMaltaSunTheme() {
  const date = getMaltaDateKey()
  const response = await fetch(
    `https://api.sunrise-sunset.org/v2?lat=${MALTA_LATITUDE}&lng=${MALTA_LONGITUDE}&date=${date}&tz=${MALTA_TIME_ZONE}`,
    { cache: 'no-store' }
  )

  if (!response.ok) throw new Error('Unable to load Malta sunrise/sunset')

  const data = await response.json()
  const sunrise = new Date(data.sunrise).getTime()
  const sunset = new Date(data.sunset).getTime()
  const now = Date.now()

  return now >= sunrise && now < sunset ? 'light' : 'dark'
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    let active = true

    const updateTheme = async () => {
      try {
        const nextTheme = await getMaltaSunTheme()
        if (active) setTheme(nextTheme)
      } catch {
        // Keep the existing light fallback if the solar-time service is unavailable.
      }
    }

    updateTheme()
    const interval = window.setInterval(updateTheme, 60_000)

    return () => {
      active = false
      window.clearInterval(interval)
    }
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme={theme}
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
