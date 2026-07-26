import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogExplorer } from "@/components/blog-explorer";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on responsible AI, prompt design, research practice, and healthcare education.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          description="Evidence-aware ideas, practical techniques, and product notes for people learning to use AI responsibly in healthcare."
          eyebrow="The Lab Journal"
          title="Practical notes on AI, evidence, and healthcare learning."
        />
        <Suspense fallback={<LoadingSkeleton />}>
          <BlogExplorer />
        </Suspense>
      </main>
    </SiteFrame>
  );
}
