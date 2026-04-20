import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Privacy Policy | Rikba",
  description: "How Rikba processes personal data.",
}

export default function PrivacyPolicyPage() {
  const document = getLegalDocument("privacy-policy")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Privacy"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}