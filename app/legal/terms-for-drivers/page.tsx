import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Terms and Conditions for Drivers | Rikba",
  description: "The terms that govern driver use of Rikba.",
}

export default function TermsForDriversPage() {
  const document = getLegalDocument("terms-for-drivers")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Driver Terms"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}