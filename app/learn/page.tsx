import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Accordion } from "@/components/ui/accordion";
import { blogPosts, faqItems, learningPaths } from "@/lib/catalog-data";

export const metadata: Metadata = {
  title: "Learning Center",
  description:
    "Short, practical learning pathways, articles, tutorials, and video lessons for responsible healthcare AI use.",
  alternates: { canonical: "/learn" },
};

const tutorials = [
  {
    title: "Build a reusable prompt template",
    type: "Tutorial",
    duration: "12 min",
    description: "Create a repeatable structure for context, constraints, and review criteria.",
    href: "/blog/prompts-that-make-uncertainty-visible",
  },
  {
    title: "Run a five-minute output verification",
    type: "Checklist",
    duration: "5 min",
    description: "Check claims, citations, assumptions, omissions, and intended use.",
    href: "/blog/seven-questions-before-trusting-ai-summary",
  },
  {
    title: "De-identify before you experiment",
    type: "Guide",
    duration: "8 min",
    description:
      "Recognize direct identifiers, indirect identifiers, and contextual privacy risks.",
    href: "/blog/healthcare-ai-workflow-stop-rule",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function LearnPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <PageHero
          actions={
            <a className="button-primary" href="#pathways">
              View pathways
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          }
          description="Short, practical learning pathways for understanding AI, designing better prompts, evaluating output, and protecting the people behind the data."
          eyebrow="Learning Center"
          title="Learn AI at a pace that fits your practice."
        />

        <section className="section-space" id="pathways">
          <div className="site-container">
            <MotionReveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="eyebrow">
                    <GraduationCap aria-hidden="true" size={15} />
                    Learning pathways
                  </span>
                  <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                    Build confidence one clear step at a time.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-7 text-[var(--ink-muted)]">
                  Course previews are self-paced and educational. No continuing education credit is
                  claimed.
                </p>
              </div>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {learningPaths.map((path, index) => (
                <MotionReveal delay={index * 0.05} key={path.title}>
                  <article className="catalog-card">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="badge badge-accent">{path.level}</span>
                      <span className="meta-row">
                        <span>{path.lessons} lessons</span>
                        <span>{path.duration}</span>
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold tracking-tight">{path.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-[var(--ink-muted)]">
                      {path.description}
                    </p>
                    <div className="mt-7">
                      <div className="mb-2 flex justify-between text-xs text-[var(--ink-soft)]">
                        <span>{path.progress ? "In progress" : "Course preview"}</span>
                        <span>{path.progress}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-bar" style={{ width: `${path.progress}%` }} />
                      </div>
                    </div>
                    <Link className="button-secondary mt-6" href="/dashboard">
                      {path.progress ? "Continue in dashboard" : "Preview in dashboard"}
                      <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-[var(--line)] bg-[var(--surface-muted)]">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">
                  <Sparkles aria-hidden="true" size={15} />
                  Practical tutorials
                </span>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                  Small lessons for the moment you need them.
                </h2>
                <p className="mt-5 leading-7 text-[var(--ink-muted)]">
                  Use concise tutorials to strengthen a single habit, then put it into practice with
                  a tool or prompt.
                </p>
              </div>
            </MotionReveal>
            <div className="space-y-4">
              {tutorials.map((tutorial, index) => (
                <MotionReveal delay={index * 0.05} key={tutorial.title}>
                  <article className="content-card flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="icon-shell shrink-0">
                      <BookOpen aria-hidden="true" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="meta-row">
                        <span>{tutorial.type}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock3 aria-hidden="true" size={13} />
                          {tutorial.duration}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold">{tutorial.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                        {tutorial.description}
                      </p>
                    </div>
                    <Link
                      aria-label={`Find related articles for ${tutorial.title}`}
                      className="icon-button shrink-0"
                      href={tutorial.href}
                    >
                      <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container">
            <MotionReveal>
              <div className="section-heading">
                <span className="eyebrow">
                  <PlayCircle aria-hidden="true" size={15} />
                  Video learning
                </span>
                <h2>Watch, pause, practice, review.</h2>
                <p>
                  Short video lessons are being prepared for learners who prefer guided walkthroughs
                  and visual examples.
                </p>
              </div>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                "What generative AI can—and cannot—do",
                "The anatomy of a reliable healthcare prompt",
                "Red flags in AI-generated citations",
              ].map((title, index) => (
                <MotionReveal delay={index * 0.05} key={title}>
                  <article className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
                    <div className="grid aspect-video place-items-center bg-gradient-to-br from-violet-950 via-indigo-800 to-sky-700 text-white">
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/15 backdrop-blur">
                        <PlayCircle aria-hidden="true" size={25} />
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="badge">Video lesson · Coming soon</span>
                      <h3 className="mt-4 font-semibold leading-snug">{title}</h3>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--surface-muted)]">
          <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">
                  <ShieldCheck aria-hidden="true" size={15} />
                  FAQ
                </span>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                  Clear answers before you begin.
                </h2>
                <p className="mt-5 leading-7 text-[var(--ink-muted)]">
                  Responsible use begins with understanding what this platform is designed to
                  support—and what it is not.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <Accordion items={faqItems} />
            </MotionReveal>
          </div>
        </section>

        <section className="pb-24 pt-14">
          <div className="site-container flex flex-wrap items-center gap-5 text-sm text-[var(--ink-muted)]">
            <CheckCircle2 aria-hidden="true" className="text-[var(--success)]" size={18} />
            Ready for a practical example?
            <Link
              className="font-semibold text-[var(--accent)]"
              href={blogPosts[0] ? `/blog/${blogPosts[0].slug}` : "/blog"}
            >
              Read the latest Lab note
            </Link>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
