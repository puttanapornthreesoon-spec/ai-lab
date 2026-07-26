import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Digital GiGz AI Lab.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <SiteFrame>
      <main className="article-shell" id="main-content">
        <span className="eyebrow">Terms</span>
        <h1 className="mt-7">Use the Lab as a learning resource.</h1>
        <p className="mt-7 text-xl leading-8 text-[var(--ink-muted)]">
          These resources support education, drafting, organization, and reflection. They are not
          clinical advice or an approved clinical system.
        </p>
        <div className="article-prose mt-10">
          <h2>Educational purpose</h2>
          <p>
            Content and tools provide starting points. You remain responsible for checking accuracy,
            evidence, applicability, local policy, and professional requirements before using any
            output.
          </p>
          <h2>No clinical decision support</h2>
          <p>
            The Lab does not diagnose conditions, recommend treatment, provide emergency guidance,
            or replace appropriately qualified professionals.
          </p>
          <h2>Responsible use</h2>
          <p>
            Use de-identified or synthetic information only. Do not use the site for unlawful,
            unsafe, deceptive, or privacy-invasive activity.
          </p>
          <h2>Third-party AI services</h2>
          <p>
            When you adapt a prompt for another service, that service’s privacy terms, security
            controls, and usage policy apply. Follow your organization’s approved-tool requirements.
          </p>
        </div>
      </main>
    </SiteFrame>
  );
}
