import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SafetyNote } from "@/components/safety-note";
import { SiteFrame } from "@/components/site-frame";
import { ToolsExplorer } from "@/components/tools-explorer";

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Explore guided AI workflows for healthcare learning, research, communication, writing, and operations.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          description="Explore guided workflows for prompting, teaching, research, communication, and planning. Each tool supports your thinking—it never replaces professional review."
          eyebrow="AI Tools"
          title="Purpose-built starting points for healthcare AI work."
        />
        <div className="site-container py-8">
          <SafetyNote>
            These are interactive workflow guides, not connected AI models. They do not validate
            clinical accuracy, institutional compliance, or patient suitability. Follow local policy
            and keep patient-identifiable information out of public AI services.
          </SafetyNote>
        </div>
        <ToolsExplorer />
      </main>
    </SiteFrame>
  );
}
