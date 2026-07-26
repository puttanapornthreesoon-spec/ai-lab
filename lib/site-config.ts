const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digital-gigz-ai-lab.mam0898448986.chatgpt.site"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Digital GiGz AI Lab",
  shortName: "GiGz AI Lab",
  tagline: "Empowering Healthcare Professionals with Artificial Intelligence",
  description:
    "Practical AI education, tools, prompts, and evidence-informed resources for nurses, healthcare professionals, researchers, and students.",
  url: siteUrl,
  email: "hello@digitalgigz.ai",
} as const;
