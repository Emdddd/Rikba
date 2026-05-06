"use client"

import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">

        <AnimateOnScroll animation="fade-up">

          {/* Centered Footer */}
          <div className="flex flex-col items-center text-center">

            {/* Logo + Brand */}
            <div className="flex items-center justify-center gap-1">
              <img
                src="/Logoicon.PNG"
                alt="Rikba"
                className="w-7 h-7 object-contain"
              />

              <span className="text-foreground font-bold text-lg tracking-tight">
                Rikba
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>

              <Link href="/legal" className="hover:text-foreground transition-colors">
                Legal
              </Link>

              <Link href="/legal/account-deletion" className="hover:text-foreground transition-colors">
                
              </Link>

              <Link href="/legal/contact" className="hover:text-foreground transition-colors">
                Contact us
              </Link>
            </div>

            {/* Copyright */}
            <p className="mt-6 text-sm text-muted-foreground">
              &copy; 2026 Rikba. Made in Malta.
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              RIKBA Rides Ltd., 23, Triq Nofs in-Nhar, Valletta, VLT 1102, Malta
            </p>

          </div>

        </AnimateOnScroll>

      </div>
    </footer>
  )
}
