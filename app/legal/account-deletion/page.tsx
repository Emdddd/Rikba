import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Account Deletion | Rikba",
  description: "How to request deletion of your Rikba account.",
}

export default function AccountDeletionPage() {
  const document = getLegalDocument("account-deletion")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Account Deletion"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}