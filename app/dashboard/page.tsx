import type { Metadata } from "next";
import { DashboardWorkspace } from "@/components/dashboard-workspace";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Your Dashboard",
  description:
    "A local workspace for saved prompts, tools, learning progress, and recent Lab resources.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <SiteFrame>
      <main className="site-container pb-24 pt-32" id="main-content">
        <DashboardWorkspace />
      </main>
    </SiteFrame>
  );
}
