'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

const MALTA_TIME_ZONE = 'Europe/Malta'
const LIGHT_START_HOUR = 7
const DARK_START_HOUR = 19

function getMaltaTheme() {
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: MALTA_TIME_ZONE,
      hour: '2-digit',
      hourCycle: 'h23',
    }).format()
  )

  return hour >= LIGHT_START_HOUR && hour < DARK_START_HOUR ? 'light' : 'dark'
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    const updateTheme = () => setTheme(getMaltaTheme())

    updateTheme()
    const interval = window.setInterval(updateTheme, 60_000)

    return () => window.clearInterval(interval)
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
