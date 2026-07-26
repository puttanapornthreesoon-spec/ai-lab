import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import ArticleContent, {
  metadata as articleMetadata,
} from "@/content/blog/human-judgment-is-the-feature.mdx";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: articleMetadata.title,
  description: articleMetadata.description,
  alternates: { canonical: `/blog/${articleMetadata.slug}` },
  openGraph: {
    type: "article",
    title: articleMetadata.title,
    description: articleMetadata.description,
    publishedTime: articleMetadata.publishedAt,
    modifiedTime: articleMetadata.updatedAt,
    tags: articleMetadata.tags,
    images: [`${siteConfig.url}/og-card.png`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: articleMetadata.title,
  description: articleMetadata.description,
  datePublished: articleMetadata.publishedAt,
  dateModified: articleMetadata.updatedAt,
  image: `${siteConfig.url}/og-card.png`,
  author: {
    "@type": "Organization",
    name: articleMetadata.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Digital GiGz AI Lab",
  },
  mainEntityOfPage: `${siteConfig.url}/blog/${articleMetadata.slug}`,
};

export default function MdxArticlePage() {
  return (
    <SiteFrame>
      <main className="article-shell" id="main-content">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
          href="/blog"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Back to the journal
        </Link>
        <div className="mt-10 flex flex-wrap gap-2">
          <span className="badge badge-accent">{articleMetadata.category}</span>
          {articleMetadata.tags.map((tag: string) => (
            <span className="badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-7">{articleMetadata.title}</h1>
        <p className="mt-7 text-xl leading-8 text-[var(--ink-muted)]">
          {articleMetadata.description}
        </p>
        <div className="meta-row mt-7 border-b border-[var(--line)] pb-8">
          <time className="inline-flex items-center gap-1.5" dateTime={articleMetadata.publishedAt}>
            <CalendarDays aria-hidden="true" size={14} />
            18 Jul 2026
          </time>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" size={14} />6 min read
          </span>
          <span>{articleMetadata.author}</span>
          <span>Reviewed 26 Jul 2026</span>
        </div>
        <div className="article-prose mt-10">
          <ArticleContent />
        </div>
        <aside className="safety-note mt-14">
          <span className="icon-shell !h-10 !w-10 !shrink-0 !rounded-xl">
            <ShieldCheck aria-hidden="true" size={19} />
          </span>
          <div>
            <p className="font-semibold">Educational content, not medical advice</p>
            <p className="mt-1 text-sm leading-6 text-[var(--ink-muted)]">
              Apply professional judgment, current evidence, and organizational policy before using
              AI-assisted work in practice.
            </p>
          </div>
        </aside>
      </main>
    </SiteFrame>
  );
}
