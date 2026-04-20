import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getCompanyDetails, getLegalDocuments } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Rikba Legal",
  description: "Legal, privacy, community, and contact documents for Rikba.",
}

export default function LegalHubPage() {
  const documents = getLegalDocuments()
  const company = getCompanyDetails()

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl">Rikba legal, privacy, and contact documents</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Everything public users need to understand Rikba terms, privacy handling, account deletion, contact points,
            and community expectations.
          </p>

          <div className="mt-8 rounded-[28px] border border-border bg-card/80 p-6 shadow-sm md:max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Company</p>
            <div className="mt-3 space-y-1 text-sm leading-7 text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">{company.companyName}</p>
              <p>{company.companyAddress}</p>
              <a href={`mailto:${company.companyEmail}`} className="font-semibold text-foreground hover:text-primary">
                {company.companyEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((document) => (
            <Link
              key={document.slug}
              href={document.href}
              className="group rounded-[28px] border border-border bg-card/80 p-6 shadow-sm transition-transform transition-colors hover:-translate-y-0.5 hover:border-primary/40"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{document.shortTitle}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{document.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{document.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                Open document
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}