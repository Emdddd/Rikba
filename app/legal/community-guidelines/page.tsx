import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { getLegalDocument } from "@/lib/legal-documents"

export const metadata: Metadata = {
  title: "Community Guidelines | Rikba",
  description: "The community and conduct standards Rikba expects from users.",
}

export default function CommunityGuidelinesPage() {
  const document = getLegalDocument("community-guidelines")

  if (!document) {
    return null
  }

  return (
    <LegalPageShell
      eyebrow="Community"
      title={document.title}
      description={document.description}
      effectiveDate={document.effectiveDate}
      toc={document.toc}
    >
      {document.body}
    </LegalPageShell>
  )
}