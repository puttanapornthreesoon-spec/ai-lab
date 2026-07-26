import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { blogPosts } from "@/lib/catalog-data";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug !== "human-judgment-is-the-feature")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags,
      images: [`${siteConfig.url}/og-card.png`],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${siteConfig.url}/og-card.png`,
    author: {
      "@type": "Organization",
      name: "Digital GiGz AI Lab",
    },
    publisher: {
      "@type": "Organization",
      name: "Digital GiGz AI Lab",
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <SiteFrame>
      <main id="main-content">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <article className="article-shell">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
            href="/blog"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to the journal
          </Link>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="badge badge-accent">{post.category}</span>
            {post.tags.map((tag) => (
              <span className="badge" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-7">{post.title}</h1>
          <p className="mt-7 text-xl leading-8 text-[var(--ink-muted)]">{post.description}</p>
          <div className="meta-row mt-7 border-b border-[var(--line)] pb-8">
            <time className="inline-flex items-center gap-1.5" dateTime={post.date}>
              <CalendarDays aria-hidden="true" size={14} />
              {post.displayDate}
            </time>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 aria-hidden="true" size={14} />
              {post.readTime}
            </span>
            <span>Digital GiGz Editorial Team</span>
            <span>Reviewed {post.displayDate}</span>
          </div>
          <div className="article-prose mt-10">
            <p className="text-xl leading-9 text-[var(--ink)]">{post.intro}</p>
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <aside className="safety-note mt-14">
            <span className="icon-shell !h-10 !w-10 !shrink-0 !rounded-xl">
              <ShieldCheck aria-hidden="true" size={19} />
            </span>
            <div>
              <p className="font-semibold">Educational content, not medical advice</p>
              <p className="mt-1 text-sm leading-6 text-[var(--ink-muted)]">
                Apply appropriate professional judgment, local policy, and current trusted evidence
                before using AI-assisted work in practice.
              </p>
            </div>
          </aside>
        </article>
      </main>
    </SiteFrame>
  );
}
