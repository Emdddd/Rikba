import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Terms and Conditions for Riders | Rikba",
  description: "The terms that govern rider use of Rikba.",
}

export default function TermsForRidersPage() {
  const document = getLegalDocument("terms-for-riders")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Rider Terms"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}