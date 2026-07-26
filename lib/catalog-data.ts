export type ToolCategory = "Learning" | "Research" | "Writing" | "Communication" | "Operations";

export type LabTool = {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  audience: string;
  useCase: string;
  review: string;
  status: "Guide" | "Preview";
  steps: string[];
};

export const tools: LabTool[] = [
  {
    id: "prompt-studio",
    title: "Prompt Studio",
    description:
      "Shape a clear task, audience, context, constraints, and review criteria before you generate.",
    category: "Writing",
    audience: "All healthcare professionals",
    useCase: "Planning a reliable first prompt",
    review: "Check the final prompt for hidden assumptions and sensitive context.",
    status: "Guide",
    steps: ["Define the goal", "Add context and limits", "Set a review standard"],
  },
  {
    id: "picot-builder",
    title: "PICOT Builder",
    description:
      "Turn a broad, de-identified topic into a structured clinical research question for further review.",
    category: "Research",
    audience: "Students and researchers",
    useCase: "Structuring an early research question",
    review: "Validate terminology and scope with a supervisor, librarian, or methodologist.",
    status: "Guide",
    steps: ["Describe the topic", "Clarify PICOT elements", "Compare two question options"],
  },
  {
    id: "evidence-lens",
    title: "Evidence Lens",
    description:
      "Work through relevance, validity, limitations, and applicability without inventing missing evidence.",
    category: "Research",
    audience: "Researchers and clinical teams",
    useCase: "Organizing critical appraisal notes",
    review: "Return to the full source and the appropriate appraisal framework.",
    status: "Guide",
    steps: ["Identify the design", "Surface bias and limits", "Record applicability"],
  },
  {
    id: "plain-language-lab",
    title: "Plain Language Lab",
    description:
      "Draft clearer educational language for a chosen audience while keeping verification visible.",
    category: "Communication",
    audience: "Educators and care teams",
    useCase: "Preparing a patient education draft",
    review: "Confirm clinical meaning, accessibility, and local patient-education policy.",
    status: "Guide",
    steps: ["Choose the audience", "Set reading level", "Check meaning and tone"],
  },
  {
    id: "teaching-plan-canvas",
    title: "Teaching Plan Canvas",
    description:
      "Outline objectives, activities, assessment, and accessibility considerations for a lesson.",
    category: "Learning",
    audience: "Nurse educators",
    useCase: "Planning a short course or workshop",
    review: "Align the draft with curriculum standards and learner needs.",
    status: "Guide",
    steps: ["Define outcomes", "Design activities", "Add assessment and access checks"],
  },
  {
    id: "implementation-brief",
    title: "Implementation Brief",
    description:
      "Structure a concise brief around goals, stakeholders, evidence gaps, risks, and decisions.",
    category: "Operations",
    audience: "Administrators and program leads",
    useCase: "Framing a responsible AI pilot",
    review: "Add governance, procurement, security, and clinical safety review.",
    status: "Guide",
    steps: ["Frame the decision", "Map stakeholders and risks", "Define a reversible next step"],
  },
  {
    id: "citation-checklist",
    title: "Citation Reality Check",
    description:
      "Review AI-suggested citations for existence, fit, currency, and traceable source details.",
    category: "Research",
    audience: "Students and research teams",
    useCase: "Checking plausible-looking references",
    review: "Verify every citation in a trusted database or the publisher’s record.",
    status: "Preview",
    steps: ["Locate the record", "Compare details", "Confirm the claim is supported"],
  },
  {
    id: "handover-structure",
    title: "Handover Structure Coach",
    description:
      "Practice organizing synthetic handover examples into a concise, repeatable structure.",
    category: "Learning",
    audience: "Students and educators",
    useCase: "Teaching communication structure with synthetic cases",
    review: "Use only synthetic scenarios and follow the approved local framework.",
    status: "Preview",
    steps: ["Create a synthetic case", "Apply the framework", "Review omissions"],
  },
];

export type PromptCategory =
  "Research" | "Teaching" | "Communication" | "Leadership" | "Study" | "Productivity";

export type PromptItem = {
  id: string;
  title: string;
  description: string;
  category: PromptCategory;
  audience: string;
  prompt: string;
  checks: string[];
};

export const prompts: PromptItem[] = [
  {
    id: "critique-abstract",
    title: "Critique a research abstract",
    description: "Separate what an abstract states from what still needs verification.",
    category: "Research",
    audience: "Researchers",
    prompt:
      "Review the abstract below under: research question, design, sample, key findings, limitations, and applicability. Separate what is explicitly stated from what you infer. Do not invent missing details.",
    checks: [
      "Return to the full paper",
      "Verify design details",
      "Do not treat the abstract as complete evidence",
    ],
  },
  {
    id: "build-picot",
    title: "Build a PICOT question",
    description: "Turn a de-identified topic into two comparable question options.",
    category: "Research",
    audience: "Students",
    prompt:
      "Help me turn this de-identified topic into a PICOT question. Ask up to three clarifying questions first, then provide two alternatives and explain the trade-offs.",
    checks: [
      "Remove identifiers",
      "Confirm terminology",
      "Review feasibility with a qualified person",
    ],
  },
  {
    id: "case-based-lesson",
    title: "Create a case-based lesson",
    description: "Design a lesson using a fully synthetic case and explicit objectives.",
    category: "Teaching",
    audience: "Educators",
    prompt:
      "Using a fully synthetic case, design a lesson for [learner level] about [topic]. Include objectives, discussion questions, a misconception check, and an assessment activity.",
    checks: ["Use a synthetic case", "Check accessibility", "Align with curriculum requirements"],
  },
  {
    id: "two-level-explanation",
    title: "Explain a concept at two levels",
    description: "Preserve meaning while adapting language for two audiences.",
    category: "Communication",
    audience: "Care teams",
    prompt:
      "Explain [concept] first for a healthcare professional and then for a general audience. Preserve important uncertainty and flag any wording that needs subject-matter review.",
    checks: ["Verify clinical meaning", "Check reading level", "Keep uncertainty visible"],
  },
  {
    id: "implementation-options",
    title: "Compare implementation options",
    description: "Make trade-offs and missing information explicit.",
    category: "Leadership",
    audience: "Program leads",
    prompt:
      "Compare [option A] and [option B] using these criteria: evidence, workflow impact, training needs, accessibility, privacy, cost, and reversibility. State where information is missing.",
    checks: ["Validate cost inputs", "Include frontline perspectives", "Add governance review"],
  },
  {
    id: "unsupported-claims",
    title: "Check a draft for unsupported claims",
    description: "Find claims that need evidence without generating fake references.",
    category: "Productivity",
    audience: "Writers and researchers",
    prompt:
      "Review this draft and identify claims that need evidence, statements that overstate certainty, and language that could be clearer. Do not add references that were not supplied.",
    checks: [
      "Verify each claim independently",
      "Preserve source context",
      "Review all rewritten language",
    ],
  },
  {
    id: "study-guide",
    title: "Turn notes into a study guide",
    description: "Use only the supplied material and show what is uncertain or missing.",
    category: "Study",
    audience: "Students",
    prompt:
      "Use only the notes below to create a structured study guide with key concepts, self-test questions, and an ‘uncertain or missing’ section.",
    checks: [
      "Use non-sensitive notes",
      "Compare against course materials",
      "Correct oversimplifications",
    ],
  },
  {
    id: "team-discussion",
    title: "Plan a team discussion",
    description: "Create a neutral agenda with dissent prompts and next-step ownership.",
    category: "Leadership",
    audience: "Team leaders",
    prompt:
      "Draft a neutral 30-minute discussion agenda about [topic]. Include intended outcome, key questions, risks, dissent prompts, and next-step ownership.",
    checks: ["Invite dissent", "Name the decision owner", "Document unresolved questions"],
  },
  {
    id: "plain-language-check",
    title: "Review plain-language quality",
    description: "Check a draft for clarity without silently changing meaning.",
    category: "Communication",
    audience: "Educators",
    prompt:
      "Review this de-identified education draft for jargon, sentence length, structure, and assumed knowledge. Suggest clearer alternatives, then list any wording whose clinical meaning requires expert review.",
    checks: [
      "Confirm meaning",
      "Test with the intended audience",
      "Follow local accessibility guidance",
    ],
  },
];

export const researchResources = [
  {
    title: "PICOT Question Worksheet",
    description: "Define population, intervention, comparison, outcome, and time.",
    type: "Template",
    format: "Markdown",
    href: "/downloads/picot-question-worksheet.md",
  },
  {
    title: "Search Strategy Planner",
    description: "Record concepts, synonyms, databases, limits, and search dates.",
    type: "Template",
    format: "Markdown",
    href: "/downloads/search-strategy-planner.md",
  },
  {
    title: "Critical Appraisal Notes",
    description: "Capture design quality, bias, limitations, and applicability.",
    type: "Checklist",
    format: "Markdown",
    href: "/downloads/critical-appraisal-notes.md",
  },
  {
    title: "Evidence Table",
    description: "Compare sources without flattening important differences.",
    type: "Template",
    format: "CSV",
    href: "/downloads/evidence-table.csv",
  },
  {
    title: "AI-Assisted Research Log",
    description: "Document prompts, tools, output checks, changes, and human decisions.",
    type: "Audit log",
    format: "Markdown",
    href: "/downloads/ai-research-log.md",
  },
] as const;

export const learningPaths = [
  {
    title: "AI Foundations for Healthcare",
    level: "Beginner",
    lessons: 5,
    duration: "45 min",
    description:
      "Understand core terms, useful capabilities, common failure modes, and responsible boundaries.",
    progress: 0,
  },
  {
    title: "Prompting With Purpose",
    level: "Beginner",
    lessons: 4,
    duration: "35 min",
    description: "Turn vague requests into clear, contextual, and reviewable instructions.",
    progress: 0,
  },
  {
    title: "Evidence and Hallucination Checks",
    level: "Intermediate",
    lessons: 4,
    duration: "50 min",
    description: "Test claims, citations, assumptions, and uncertainty before relying on output.",
    progress: 0,
  },
  {
    title: "Privacy and Responsible Use",
    level: "All levels",
    lessons: 3,
    duration: "30 min",
    description: "Recognize sensitive data, follow local policy, and choose safer workflows.",
    progress: 0,
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  displayDate: string;
  readTime: string;
  featured?: boolean;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "human-judgment-is-the-feature",
    title: "Human judgment is the feature, not the fallback",
    description:
      "Why responsible healthcare AI workflows should make human review visible from the beginning.",
    category: "Responsible AI",
    tags: ["Human review", "Safety"],
    date: "2026-07-18",
    displayDate: "18 Jul 2026",
    readTime: "6 min read",
    featured: true,
    intro:
      "In healthcare, human review is not an emergency brake added after an AI system fails. It is part of the workflow’s design.",
    sections: [
      {
        heading: "Start with accountability",
        paragraphs: [
          "A useful workflow names who is responsible for the final decision, what evidence they need, and when the process should stop for expert review.",
          "This reframes AI as a support for thinking, drafting, and organizing—not as a substitute for professional accountability.",
        ],
      },
      {
        heading: "Make review observable",
        paragraphs: [
          "A generic reminder to “check the output” is rarely enough. Better workflows identify the claims to verify, the sources to consult, and the person qualified to judge applicability.",
        ],
      },
      {
        heading: "Design for a safe stop",
        paragraphs: [
          "When context is missing, evidence conflicts, or a request moves toward a clinical decision, the right output may be a clear stop and escalation path.",
        ],
      },
    ],
  },
  {
    slug: "seven-questions-before-trusting-ai-summary",
    title: "Seven questions to ask before trusting an AI summary",
    description:
      "A compact verification routine for checking coverage, claims, uncertainty, and source fidelity.",
    category: "Responsible AI",
    tags: ["Verification", "Summaries"],
    date: "2026-07-10",
    displayDate: "10 Jul 2026",
    readTime: "5 min read",
    intro:
      "A confident summary can still omit the detail that matters most. Seven focused questions help reveal what needs another look.",
    sections: [
      {
        heading: "Check the source boundary",
        paragraphs: [
          "Ask whether the summary uses only the material supplied or blends in outside knowledge. Then identify which claims are directly supported.",
        ],
      },
      {
        heading: "Inspect what disappeared",
        paragraphs: [
          "Look for removed limitations, excluded populations, conflicting findings, and uncertainty that became more definite in the summary.",
        ],
      },
    ],
  },
  {
    slug: "prompts-that-make-uncertainty-visible",
    title: "Designing prompts that make uncertainty visible",
    description:
      "Simple instruction patterns that separate known facts, assumptions, gaps, and next checks.",
    category: "Prompt Design",
    tags: ["Prompting", "Uncertainty"],
    date: "2026-06-28",
    displayDate: "28 Jun 2026",
    readTime: "7 min read",
    intro:
      "The best prompt is not always the one that produces the smoothest answer. It is often the one that keeps uncertainty easy to see.",
    sections: [
      {
        heading: "Ask for separate lanes",
        paragraphs: [
          "Request distinct sections for supplied facts, reasonable inferences, missing information, and verification steps.",
        ],
      },
      {
        heading: "Set a refusal condition",
        paragraphs: [
          "Tell the model when to stop, ask a clarifying question, or say that the available context is insufficient.",
        ],
      },
    ],
  },
  {
    slug: "from-picot-to-prompt",
    title: "From PICOT to prompt: keep the research question intact",
    description: "Use AI to structure exploration without allowing the research question to drift.",
    category: "Research Practice",
    tags: ["PICOT", "Research"],
    date: "2026-06-16",
    displayDate: "16 Jun 2026",
    readTime: "8 min read",
    intro:
      "AI can help compare early versions of a research question, but every revision should preserve the intended population, intervention, comparison, outcomes, and scope.",
    sections: [
      {
        heading: "Protect the core elements",
        paragraphs: [
          "Write the non-negotiable elements before asking for alternatives. Compare each generated option against them explicitly.",
        ],
      },
      {
        heading: "Document each change",
        paragraphs: [
          "Keep a short audit trail showing what changed, why it changed, and who reviewed the final wording.",
        ],
      },
    ],
  },
  {
    slug: "healthcare-ai-workflow-stop-rule",
    title: "Why a healthcare AI workflow needs a stop rule",
    description:
      "Define the conditions that move a task from AI-assisted work to qualified human review.",
    category: "Responsible AI",
    tags: ["Governance", "Workflow"],
    date: "2026-06-03",
    displayDate: "3 Jun 2026",
    readTime: "4 min read",
    intro:
      "A stop rule is a simple agreement about when an AI-assisted workflow should pause instead of producing another answer.",
    sections: [
      {
        heading: "Name the trigger",
        paragraphs: [
          "Triggers may include sensitive data, conflicting evidence, patient-specific interpretation, unfamiliar claims, or a decision outside the user’s role.",
        ],
      },
      {
        heading: "Name the next person",
        paragraphs: [
          "A safe stop is more useful when it identifies the qualified role, approved system, or local policy that should guide the next step.",
        ],
      },
    ],
  },
  {
    slug: "teaching-ai-literacy-without-overconfidence",
    title: "Teaching AI literacy without teaching overconfidence",
    description:
      "Pair practical experimentation with habits of doubt, verification, and transparent limitations.",
    category: "Education",
    tags: ["Teaching", "AI literacy"],
    date: "2026-05-24",
    displayDate: "24 May 2026",
    readTime: "6 min read",
    intro:
      "AI literacy is not only knowing what a model can do. It is knowing how to recognize when an output should not be trusted.",
    sections: [
      {
        heading: "Teach contrast, not slogans",
        paragraphs: [
          "Let learners compare strong and weak prompts, correct and fabricated citations, and useful and unsafe applications.",
        ],
      },
      {
        heading: "Assess the checking process",
        paragraphs: [
          "Reward learners for identifying uncertainty, finding primary sources, and explaining why they revised or rejected an output.",
        ],
      },
    ],
  },
  {
    slug: "audit-trail-for-ai-assisted-research",
    title: "A practical audit trail for AI-assisted research",
    description:
      "A lightweight record of prompts, tools, checks, edits, and final human decisions.",
    category: "Research Practice",
    tags: ["Audit trail", "Transparency"],
    date: "2026-05-12",
    displayDate: "12 May 2026",
    readTime: "9 min read",
    intro:
      "An audit trail makes the role of AI visible without turning everyday research work into unnecessary bureaucracy.",
    sections: [
      {
        heading: "Record the consequential moments",
        paragraphs: [
          "Capture the tool and version when known, the prompt or task, important output used, checks performed, changes made, and the final decision owner.",
        ],
      },
      {
        heading: "Keep source evidence separate",
        paragraphs: [
          "Never treat the AI output itself as the source. Link claims back to the original paper, dataset, policy, or approved record.",
        ],
      },
    ],
  },
  {
    slug: "what-evidence-aware-should-mean",
    title: "What “evidence-aware” should mean in an AI product",
    description:
      "A product principle for keeping sources, limitations, currency, and applicability visible.",
    category: "Product Updates",
    tags: ["Product", "Evidence"],
    date: "2026-04-29",
    displayDate: "29 Apr 2026",
    readTime: "5 min read",
    intro:
      "Evidence-aware is stronger than adding a citation icon. It means designing the product so evidence quality and limits affect what the user sees and can do.",
    sections: [
      {
        heading: "Treat citations as inspectable objects",
        paragraphs: [
          "Users should be able to see the source, publication details, date, and the specific claim it supports.",
        ],
      },
      {
        heading: "Show currency and fit",
        paragraphs: [
          "A source can be genuine but outdated, methodologically weak, or irrelevant to the population and context at hand.",
        ],
      },
    ],
  },
];

export const faqItems = [
  {
    question: "Is this a clinical decision-support service?",
    answer:
      "No. Digital GiGz AI Lab does not diagnose conditions, recommend treatment, or replace professional judgment, institutional policy, or approved clinical systems.",
  },
  {
    question: "Can I enter patient or confidential information?",
    answer:
      "No. Use de-identified or synthetic information only, and follow your organization’s privacy, security, and AI-use policies.",
  },
  {
    question: "How should I verify AI-generated output?",
    answer:
      "Check claims against current trusted sources, confirm citations independently, inspect assumptions and omissions, and involve an appropriately qualified person before acting.",
  },
  {
    question: "Do the learning pathways offer CE or CPD credit?",
    answer:
      "Not currently. A pathway will state this explicitly only if it has been reviewed and approved by a named accrediting body.",
  },
] as const;
