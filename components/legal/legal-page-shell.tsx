import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export type LegalTocItem = {
  id: string
  number: string
  title: string
}

type LegalPageShellProps = {
  eyebrow: string
  title: string
  description: string
  effectiveDate: string
  toc: LegalTocItem[]
  children: ReactNode
  backHref?: string
  backLabel?: string
}

type LegalSectionProps = {
  id: string
  number: string
  title: string
  children: ReactNode
}

type LegalCalloutProps = {
  title?: string
  children: ReactNode
}

type LegalListProps = {
  items: string[]
}

export function LegalSection({ id, number, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[28px] border border-border bg-card/80 p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary">
          {number}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">{children}</div>
        </div>
      </div>
    </section>
  )
}

export function LegalList({ items }: LegalListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function LegalCallout({ title, children }: LegalCalloutProps) {
  return (
    <div className="rounded-3xl border border-primary/20 bg-primary/8 p-6 text-sm leading-7 text-foreground md:p-7 md:text-base">
      {title ? <h3 className="text-lg font-semibold text-foreground">{title}</h3> : null}
      <div className={title ? "mt-3 space-y-3" : "space-y-3"}>{children}</div>
    </div>
  )
}

export function LegalPageShell({
  eyebrow,
  title,
  description,
  effectiveDate,
  toc,
  children,
  backHref = "/legal",
  backLabel = "Back to legal hub",
}: LegalPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
            <p className="mt-6 text-sm font-medium text-muted-foreground">Effective date: {effectiveDate}</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[280px,minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] border border-border bg-card/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">On this page</p>
              <div className="mt-4 space-y-3">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-start gap-3 rounded-2xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span className="mt-0.5 font-semibold text-primary">{item.number}</span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <article className="space-y-6">{children}</article>
        </div>
      </section>

      <Footer />
    </main>
  )
}