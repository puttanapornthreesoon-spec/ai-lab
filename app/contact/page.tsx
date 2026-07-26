import type { Metadata } from "next";
import { Globe2, Mail, MapPin, MessageCircle, Share2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Digital GiGz AI Lab about education, workshops, research collaboration, product feedback, partnerships, or media.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          description="Have a question, an idea, or a collaboration in mind? Tell us what you are working toward and we’ll help route the conversation."
          eyebrow="Contact"
          title="Let’s build practical, responsible AI capability together."
        />
        <section className="section-space">
          <div className="site-container grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <MotionReveal>
              <ContactForm />
            </MotionReveal>
            <div className="space-y-5">
              <MotionReveal delay={0.05}>
                <article className="content-card">
                  <span className="icon-shell">
                    <Mail aria-hidden="true" size={20} />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold">Email the Lab</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Prefer to start directly in your email app? Use the address below.
                  </p>
                  <a
                    className="mt-5 inline-block text-sm font-semibold text-[var(--accent)]"
                    href="mailto:hello@digitalgigz.ai"
                  >
                    hello@digitalgigz.ai
                  </a>
                </article>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <article className="content-card">
                  <span className="icon-shell">
                    <MapPin aria-hidden="true" size={20} />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold">Location</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Digital-first and available globally. A verified studio address will be
                    published when confirmed.
                  </p>
                  <span className="badge mt-5">
                    <Globe2 aria-hidden="true" size={13} />
                    Global collaboration
                  </span>
                </article>
              </MotionReveal>
              <MotionReveal delay={0.15}>
                <article className="content-card">
                  <span className="icon-shell">
                    <Share2 aria-hidden="true" size={20} />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold">Social</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Verified LinkedIn and YouTube channels are planned. We’ll link them here once
                    the official handles are approved.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[var(--ink-soft)]">
                    <MessageCircle aria-hidden="true" size={15} />
                    Official channels coming soon
                  </div>
                </article>
              </MotionReveal>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
