export type BlogPostStatus = "draft" | "published"

export type BlogPost = {
  slug: string
  title: string
  summary: string
  authorName: string
  publishedAt: string
  status: BlogPostStatus
  readingTime: string
  eyebrow: string
  body: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "why-rikba-is-launching-in-malta",
    title: "Why Rikba Is Launching in Malta",
    summary:
      "Rikba is being built around lower rider prices, stronger driver economics, and a product that keeps value on the island.",
    authorName: "Rikba Team",
    publishedAt: "2026-04-20",
    status: "published",
    readingTime: "4 min read",
    eyebrow: "Launch",
    body: `## A Malta-first ride-hailing product

Rikba is being designed for Malta first. That means a service shaped around local rider expectations, local driver realities, and a platform that feels built for the island rather than adapted as an afterthought.

## What riders should expect

- clearer pricing
- faster product feedback loops
- local support touchpoints
- a public website that explains policies and launch updates cleanly

## What drivers should expect

Rikba is also focused on making the platform sustainable for drivers. Stronger unit economics and cleaner operations matter if service quality is going to improve over time.

## What comes next

Over the next phase, Rikba will keep publishing operational updates, launch information, and product notes here on the public blog.`,
  },
  {
    slug: "how-rikba-thinks-about-safety-and-trust",
    title: "How Rikba Thinks About Safety and Trust",
    summary:
      "Safety, clarity, and platform trust are not side features. They shape how Rikba writes policy, designs flows, and communicates with users.",
    authorName: "Rikba Team",
    publishedAt: "2026-04-18",
    status: "published",
    readingTime: "5 min read",
    eyebrow: "Safety",
    body: `## Safety starts before the trip

Safety on a ride-hailing platform is not limited to the trip itself. It starts with clear onboarding, honest identity details, and product decisions that reduce ambiguity for both riders and drivers.

## Clear public policies matter

When legal pages, contact information, and community guidelines are easy to find, the platform becomes easier to trust. Users should not have to guess how to request support, report an issue, or understand their responsibilities.

## Product trust is operational

- clear terms and privacy information
- accessible contact details
- visible community expectations
- transparent blog updates when the public site changes

## Trust compounds

Good trust systems are cumulative. Each clear policy, reliable support path, and transparent launch update makes the overall service feel more credible.`,
  },
  {
    slug: "summer-launch-checklist",
    title: "Summer Launch Checklist",
    summary:
      "Internal launch planning note for public rollout sequencing.",
    authorName: "Rikba Team",
    publishedAt: "2026-04-22",
    status: "draft",
    readingTime: "3 min read",
    eyebrow: "Draft",
    body: `## Draft only

This post exists to demonstrate publish-state filtering in the static website data source.

## Not public

Draft posts must not appear on the public blog index or slug pages.`,
  },
]

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
}

export function getPublishedBlogPosts() {
  return sortPosts(blogPosts.filter((post) => post.status === "published"))
}

export function getPublishedBlogPost(slug: string) {
  return getPublishedBlogPosts().find((post) => post.slug === slug) ?? null
}

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("en-MT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}