import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Contact Rikba | Rikba",
  description: "How to contact Rikba for support, privacy requests, and account deletion.",
}

export default function ContactPage() {
  const document = getLegalDocument("contact")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Contact"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}