export const navItems = [
  { label: "About", href: "/about" },
  { label: "AI Tools", href: "/tools" },
  { label: "Prompts", href: "/prompts" },
  { label: "Research", href: "/research" },
  { label: "Learn", href: "/learn" },
  { label: "Blog", href: "/blog" },
] as const;

export const stats = [
  { value: "4", label: "Learning pathways" },
  { value: "8", label: "Guided AI tools" },
  { value: "9", label: "Starter prompts" },
  { value: "5", label: "Research templates" },
] as const;

export const homeFeatures = [
  {
    icon: "tools",
    kicker: "Discover",
    title: "AI tools for real healthcare workflows",
    description:
      "A curated directory that explains what each tool is good for, what to watch for, and how to begin responsibly.",
    href: "/tools",
  },
  {
    icon: "prompts",
    kicker: "Apply",
    title: "Prompt patterns you can adapt",
    description:
      "Practical starting points for teaching, research, communication, administration, and reflective learning.",
    href: "/prompts",
  },
  {
    icon: "research",
    kicker: "Investigate",
    title: "Research resources with rigor",
    description:
      "Guides and templates for literature discovery, evidence synthesis, protocol planning, and transparent AI use.",
    href: "/research",
  },
  {
    icon: "learning",
    kicker: "Grow",
    title: "Learn at your own pace",
    description:
      "Short lessons, tutorials, and practical courses that build AI literacy without assuming a technical background.",
    href: "/learn",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The workflow-first approach makes AI feel understandable without losing the responsibility healthcare demands.",
    name: "Maya R.",
    role: "Nurse educator · Illustrative profile",
  },
  {
    quote:
      "I can see exactly where a prompt is useful, where it is limited, and what I still need to verify myself.",
    name: "Daniel K.",
    role: "Clinical researcher · Illustrative profile",
  },
  {
    quote:
      "It feels calm, focused, and practical—the kind of resource I would actually share with a student cohort.",
    name: "Priya S.",
    role: "Program lead · Illustrative profile",
  },
] as const;
