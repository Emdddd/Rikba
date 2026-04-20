import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { BlogBody } from "@/components/blog/blog-body"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { formatBlogDate, getPublishedBlogPost, getPublishedBlogPosts } from "@/lib/blog-posts"

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPublishedBlogPost(slug)

  if (!post) {
    return {
      title: "Article not found | Rikba",
    }
  }

  return {
    title: `${post.title} | Rikba Blog`,
    description: post.summary,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getPublishedBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl px-5 pb-12 md:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary">{post.eyebrow}</span>
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span>{post.readingTime}</span>
            <span>By {post.authorName}</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{post.summary}</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <article className="mx-auto max-w-4xl px-5">
          <div className="rounded-[32px] border border-border bg-card/80 p-6 shadow-sm md:p-10">
            <BlogBody body={post.body} />
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}