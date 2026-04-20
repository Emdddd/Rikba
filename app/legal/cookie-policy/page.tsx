import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Cookie Policy | Rikba",
  description: "How the Rikba website may use cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  const document = getLegalDocument("cookie-policy")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Cookies"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}