import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PromptLibrary } from "@/components/prompt-library";
import { SafetyNote } from "@/components/safety-note";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Prompt Library",
  description:
    "Adaptable AI prompts for healthcare learning, research, teaching, communication, leadership, and knowledge work.",
  alternates: { canonical: "/prompts" },
};

export default function PromptsPage() {
  return (
    <SiteFrame>
      <main id="main-content">
        <PageHero
          description="Adaptable prompts for learning, research, teaching, communication, leadership, and everyday knowledge work. Review context and output before use."
          eyebrow="Prompt Library"
          title="Better prompts begin with clearer thinking."
        />
        <div className="site-container py-8">
          <SafetyNote title="Keep sensitive information out of every prompt">
            Use de-identified or synthetic information. Favorites are stored only in this browser
            and are never a substitute for an approved clinical or organizational system.
          </SafetyNote>
        </div>
        <PromptLibrary />
      </main>
    </SiteFrame>
  );
}
