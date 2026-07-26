import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Digital GiGz AI Lab.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <main className="article-shell" id="main-content">
        <span className="eyebrow">Privacy</span>
        <h1 className="mt-7">Privacy, in plain language.</h1>
        <p className="mt-7 text-xl leading-8 text-[var(--ink-muted)]">
          Digital GiGz AI Lab is designed to minimize data collection and keep sensitive healthcare
          information out of the platform.
        </p>
        <div className="article-prose mt-10">
          <h2>What this site stores</h2>
          <p>
            Theme preference, saved prompts, and saved tools are stored locally in your browser.
            They are not synced to an account or transmitted to the Lab.
          </p>
          <h2>Contact and newsletter actions</h2>
          <p>
            The contact form prepares a message in your email application. It does not send or store
            the message on this website. The newsletter form is an interface preview until an
            approved email provider and privacy notice are connected.
          </p>
          <h2>Sensitive information</h2>
          <p>
            Do not enter patient-identifiable information, health records, credentials, confidential
            organizational data, or other restricted information anywhere on this site.
          </p>
          <h2>Future integrations</h2>
          <p>
            If analytics, account features, email delivery, or hosted storage are added, this notice
            will be updated before those integrations collect data.
          </p>
        </div>
      </main>
    </SiteFrame>
  );
}
