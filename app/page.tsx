import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  LibraryBig,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home-hero";
import { MotionReveal } from "@/components/motion-reveal";
import { Navbar } from "@/components/navbar";
import { NewsletterForm } from "@/components/newsletter-form";
import { homeFeatures, stats, testimonials } from "@/lib/site-data";

const featureIcons = {
  tools: BrainCircuit,
  prompts: Sparkles,
  research: LibraryBig,
  learning: GraduationCap,
};

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main id="main-content">
        <HomeHero />

        <section className="border-y border-[var(--line)] bg-[var(--surface-muted)]/70">
          <div className="site-container grid divide-y divide-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat) => (
              <div className="px-6 py-8 text-center lg:py-10" key={stat.label}>
                <p className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space" id="mission">
          <div className="site-container">
            <MotionReveal>
              <div className="section-heading">
                <span className="eyebrow">
                  <HeartPulse aria-hidden="true" size={15} />
                  Our mission
                </span>
                <h2>AI confidence, grounded in healthcare reality.</h2>
                <p>
                  We turn complex AI concepts into responsible, practical workflows for the people
                  who teach, study, research, lead, and deliver care.
                </p>
              </div>
            </MotionReveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {homeFeatures.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <MotionReveal delay={index * 0.06} key={feature.title}>
                    <Link className="feature-card group" href={feature.href}>
                      <div className="icon-shell">
                        <Icon aria-hidden="true" size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                          {feature.kicker}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="mt-3 leading-7 text-[var(--ink-muted)]">
                          {feature.description}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                          Explore
                          <ArrowRight
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                            size={16}
                          />
                        </span>
                      </div>
                    </Link>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space pt-4">
          <div className="site-container">
            <MotionReveal>
              <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--ink)] text-white shadow-[var(--shadow-xl)]">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
                    <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-violet-500/25 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-violet-100">
                        <ShieldCheck aria-hidden="true" size={15} />
                        Responsible by design
                      </span>
                      <h2 className="mt-7 max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        Built for thoughtful adoption, not shortcuts.
                      </h2>
                      <p className="mt-5 max-w-xl leading-7 text-slate-300">
                        Every resource centers human judgment, privacy awareness, evidence quality,
                        and transparent use of AI.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                    <ul className="space-y-5">
                      {[
                        "Human review stays at the center of every workflow.",
                        "No patient-identifiable information belongs in public AI tools.",
                        "Outputs are starting points—not clinical decisions.",
                        "Research guidance prioritizes traceability and verification.",
                      ].map((item) => (
                        <li className="flex gap-3 text-sm leading-6 text-slate-200" key={item}>
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                            <Check aria-hidden="true" size={13} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section-space" id="testimonials">
          <div className="site-container">
            <MotionReveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="section-heading !mx-0 !text-left">
                  <span className="eyebrow">
                    <Quote aria-hidden="true" size={15} />
                    Built around your work
                  </span>
                  <h2>Designed for every stage of the AI learning journey.</h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[var(--ink-muted)]">
                  Illustrative feedback showing the experience we are building toward.
                </p>
              </div>
            </MotionReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <MotionReveal delay={index * 0.07} key={testimonial.name}>
                  <figure className="testimonial-card">
                    <span className="badge mb-8">Sample feedback</span>
                    <blockquote className="text-[1.05rem] leading-8 text-[var(--ink)]">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-8 border-t border-[var(--line)] pt-5">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-[var(--ink-muted)]">{testimonial.role}</p>
                    </figcaption>
                  </figure>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="site-container">
            <MotionReveal>
              <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 text-center sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                  Designed for collaboration across
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-sm font-semibold text-[var(--ink-muted)] sm:text-base">
                  {["Nursing schools", "Hospitals", "Research teams", "Health innovators"].map(
                    (partner) => (
                      <span className="flex items-center gap-2" key={partner}>
                        <ClipboardCheck
                          aria-hidden="true"
                          className="text-[var(--accent)]"
                          size={18}
                        />
                        {partner}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section-space pt-12">
          <div className="site-container">
            <MotionReveal>
              <div className="cta-panel">
                <div className="relative z-10 max-w-2xl">
                  <span className="eyebrow eyebrow-light">The Lab Notes</span>
                  <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    Practical AI learning, delivered with care.
                  </h2>
                  <p className="mt-5 max-w-xl leading-7 text-indigo-100">
                    Join the newsletter for new tools, evidence-informed prompts, research guides,
                    and concise lessons for healthcare practice.
                  </p>
                </div>
                <NewsletterForm />
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
