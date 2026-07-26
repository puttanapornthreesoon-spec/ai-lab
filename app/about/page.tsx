import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Digital GiGz AI Lab exists, the principles guiding our work, and our roadmap for responsible healthcare AI education.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Users,
    title: "Human judgment first",
    description: "AI supports people. Accountability never transfers to a model.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy by design",
    description: "Sensitive information stays out of public and unapproved AI workflows.",
  },
  {
    icon: SearchCheck,
    title: "Evidence over confidence",
    description: "A fluent answer is not evidence. Claims and citations require verification.",
  },
  {
    icon: Eye,
    title: "Limits made visible",
    description: "Uncertainty, missing context, and stop conditions should be easy to see.",
  },
  {
    icon: Lightbulb,
    title: "Learning through iteration",
    description: "Useful AI literacy grows through practice, reflection, and revision.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive by default",
    description: "Clear language and accessible interaction are part of product quality.",
  },
];

const timeline = [
  {
    year: "01",
    title: "Listen",
    description:
      "Understand where healthcare learners and teams experience uncertainty, friction, and risk.",
  },
  {
    year: "02",
    title: "Build",
    description: "Turn recurring workflows into clear tools, prompts, and learning resources.",
  },
  {
    year: "03",
    title: "Test",
    description:
      "Review usability, accessibility, evidence quality, and responsible-use safeguards.",
  },
  {
    year: "04",
    title: "Grow",
    description: "Expand through evidence, community feedback, and verified collaboration.",
  },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          description="We believe healthcare expertise should lead the way artificial intelligence is understood, evaluated, and used."
          eyebrow="About the Lab"
          title="Healthcare expertise should lead the way AI is used."
        />

        <section className="section-space">
          <div className="site-container grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">Our story</span>
                <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Curiosity needs a responsible place to grow.
                </h2>
                <div className="mt-7 max-w-2xl space-y-5 text-[1.05rem] leading-8 text-[var(--ink-muted)]">
                  <p>
                    Digital GiGz AI Lab began with a practical question: how can healthcare
                    professionals benefit from AI without treating it as a shortcut around
                    expertise?
                  </p>
                  <p>
                    The Lab brings education, structured tools, research support, and
                    responsible-use guidance into one calm, clear place. We make the learning
                    practical, the limits visible, and human judgment non-negotiable.
                  </p>
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="content-card relative overflow-hidden !p-8 sm:!p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl" />
                <Sparkles aria-hidden="true" className="text-[var(--accent)]" size={28} />
                <p className="mt-16 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Why now
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                  AI is moving quickly. Healthcare learning should move thoughtfully.
                </p>
                <p className="mt-5 leading-7 text-[var(--ink-muted)]">
                  People need more than tool lists. They need context, practice, critical questions,
                  and a clear path to verification.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--surface-muted)]">
          <div className="site-container grid gap-px py-16 md:grid-cols-2">
            <MotionReveal className="content-card !rounded-none md:!rounded-l-3xl">
              <Eye aria-hidden="true" className="text-[var(--accent)]" size={24} />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                Vision
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                A workforce ready to evaluate AI with confidence and care.
              </h2>
              <p className="mt-4 leading-7 text-[var(--ink-muted)]">
                We envision healthcare professionals who can recognize useful applications, question
                unsupported claims, and lead adoption responsibly.
              </p>
            </MotionReveal>
            <MotionReveal className="content-card !rounded-none md:!rounded-r-3xl" delay={0.06}>
              <ShieldCheck aria-hidden="true" className="text-[var(--accent)]" size={24} />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                Mission
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Make AI education practical, rigorous, and accessible.
              </h2>
              <p className="mt-4 leading-7 text-[var(--ink-muted)]">
                We help nurses, healthcare professionals, researchers, and students use AI
                effectively through education, tools, research, and innovation.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container">
            <MotionReveal>
              <div className="section-heading">
                <span className="eyebrow">Our principles</span>
                <h2>The standards behind every experience we build.</h2>
              </div>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <MotionReveal delay={index * 0.04} key={principle.title}>
                    <article className="content-card h-full">
                      <div className="icon-shell">
                        <Icon aria-hidden="true" size={20} />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold">{principle.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                        {principle.description}
                      </p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--surface-muted)]">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">Founder</span>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                  A founder-led lab with healthcare learning at its center.
                </h2>
                <p className="mt-6 leading-8 text-[var(--ink-muted)]">
                  The founder’s full name, portrait, credentials, and verified biography will be
                  added once approved for publication. We do not invent professional claims or
                  affiliations.
                </p>
                <Link className="button-secondary mt-7" href="/contact">
                  Connect with the Lab
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="content-card !p-8 sm:!p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Founding principle
                </p>
                <p className="mt-6 text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
                  Healthcare professionals deserve an AI learning space that respects the depth of
                  their work, the people behind the data, and the importance of getting things
                  right.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <div>
                <span className="eyebrow">Roadmap</span>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em]">
                  Learn, build, test, grow.
                </h2>
                <p className="mt-5 leading-7 text-[var(--ink-muted)]">
                  Our roadmap stays intentionally iterative so feedback and evidence can shape what
                  comes next.
                </p>
              </div>
            </MotionReveal>
            <div className="timeline space-y-8">
              {timeline.map((item, index) => (
                <MotionReveal delay={index * 0.06} key={item.title}>
                  <article className="timeline-item">
                    <div className="timeline-dot" aria-hidden="true" />
                    <div className="content-card !p-6">
                      <p className="text-xs font-semibold text-[var(--accent)]">{item.year}</p>
                      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[var(--ink-muted)]">{item.description}</p>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
