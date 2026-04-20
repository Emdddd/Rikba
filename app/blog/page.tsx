import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { formatBlogDate, getPublishedBlogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Rikba Blog",
  description: "Public updates, launch notes, and product writing from Rikba.",
}

export default function BlogIndexPage() {
  const posts = getPublishedBlogPosts()
  const [featuredPost, ...otherPosts] = posts

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl">Rikba public updates and launch writing</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Product notes, launch updates, and public writing from Rikba. Only published articles appear here.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl space-y-8 px-5">
          {featuredPost ? (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block rounded-[32px] border border-border bg-card/80 p-8 shadow-sm transition-transform transition-colors hover:-translate-y-0.5 hover:border-primary/40 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary">{featuredPost.eyebrow}</span>
                <span>{formatBlogDate(featuredPost.publishedAt)}</span>
                <span>{featuredPost.readingTime}</span>
              </div>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{featuredPost.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{featuredPost.summary}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Read article
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-[28px] border border-border bg-card/80 p-6 shadow-sm transition-transform transition-colors hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary">{post.eyebrow}</span>
                  <span>{formatBlogDate(post.publishedAt)}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.summary}</p>
                <p className="mt-5 text-sm font-medium text-muted-foreground">By {post.authorName} · {post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}