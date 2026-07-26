import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileSearch,
  FlaskConical,
  SearchCheck,
} from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { PageHero } from "@/components/page-hero";
import { SafetyNote } from "@/components/safety-note";
import { SiteFrame } from "@/components/site-frame";
import { researchResources } from "@/lib/catalog-data";

export const metadata: Metadata = {
  title: "Research Hub",
  description:
    "Evidence-aware templates, guides, and downloads for defining questions, planning searches, appraising evidence, and documenting AI-assisted research.",
  alternates: { canonical: "/research" },
};

const workflow = [
  ["01", "Define the question", "Clarify purpose, population, outcomes, and scope."],
  ["02", "Plan the search", "Record concepts, sources, limits, and search dates."],
  ["03", "Appraise the evidence", "Examine design, bias, relevance, and uncertainty."],
  ["04", "Synthesize what is known", "Preserve differences and important gaps."],
  ["05", "Apply cautiously", "Review fit, governance, ethics, and next decisions."],
];

const guides = [
  {
    icon: FileSearch,
    title: "From clinical curiosity to a searchable question",
    description:
      "A practical sequence for moving from a broad topic to explicit searchable concepts.",
  },
  {
    icon: FlaskConical,
    title: "Document an AI-assisted literature workflow",
    description:
      "Keep prompts, checks, source decisions, and material edits visible in a lightweight audit trail.",
  },
  {
    icon: SearchCheck,
    title: "When an AI-generated citation looks plausible",
    description:
      "Verify the record, compare metadata, and check whether the source actually supports the claim.",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ResearchPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          actions={
            <a className="button-primary" href="#templates">
              Browse templates
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          }
          description="Practical resources for defining questions, planning searches, appraising evidence, documenting decisions, and keeping a human audit trail."
          eyebrow="Research Hub"
          title="Move from question to evidence with a clear process."
        />

        <section className="section-space">
          <div className="site-container">
            <MotionReveal>
              <div className="section-heading">
                <span className="eyebrow">Evidence workflow</span>
                <h2>A reviewable path from curiosity to cautious application.</h2>
              </div>
            </MotionReveal>
            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {workflow.map(([number, title, description], index) => (
                <MotionReveal delay={index * 0.05} key={title}>
                  <article className="content-card h-full !p-5">
                    <span className="text-xs font-bold text-[var(--accent)]">{number}</span>
                    <h3 className="mt-8 font-semibold leading-snug">{title}</h3>
                    <p className="mt-3 text-xs leading-6 text-[var(--ink-muted)]">{description}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-space border-y border-[var(--line)] bg-[var(--surface-muted)]"
          id="templates"
        >
          <div className="site-container">
            <MotionReveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="eyebrow">Downloads</span>
                  <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                    Start with a transparent structure.
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-[var(--ink-muted)]">
                  Each template is a lightweight, editable starting point that keeps sources,
                  assumptions, and decisions visible.
                </p>
              </div>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {researchResources.map((resource, index) => (
                <MotionReveal delay={index * 0.05} key={resource.title}>
                  <article className="catalog-card">
                    <div className="flex items-center justify-between gap-3">
                      <span className="badge badge-accent">{resource.type}</span>
                      <span className="text-xs text-[var(--ink-soft)]">{resource.format}</span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold tracking-tight">{resource.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[var(--ink-muted)]">
                      {resource.description}
                    </p>
                    <a
                      aria-label={`Download ${resource.title} as ${resource.format}`}
                      className="button-secondary mt-6"
                      download
                      href={`${basePath}${resource.href}`}
                    >
                      <Download aria-hidden="true" size={16} />
                      Download
                    </a>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">Research guides</span>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                  Rigor is a habit, not a final checkbox.
                </h2>
                <p className="mt-5 leading-7 text-[var(--ink-muted)]">
                  Build repeatable habits that make source quality, uncertainty, and human decisions
                  easy to inspect.
                </p>
              </div>
            </MotionReveal>
            <div className="grid gap-4">
              {guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <MotionReveal delay={index * 0.06} key={guide.title}>
                    <article className="content-card flex gap-5">
                      <div className="icon-shell shrink-0">
                        <Icon aria-hidden="true" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{guide.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                          {guide.description}
                        </p>
                      </div>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="site-container">
            <SafetyNote title="Research support is not methodological approval">
              These templates support organization and learning. They do not replace ethics review,
              institutional policy, librarian support, statistical consultation, or methodological
              expertise.
            </SafetyNote>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[var(--ink-muted)]">
              <CheckCircle2 aria-hidden="true" className="text-[var(--success)]" size={18} />
              Looking for a prompt to support your workflow?
              <Link className="font-semibold text-[var(--accent)]" href="/prompts">
                Visit the prompt library
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
