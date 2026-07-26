import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-14 text-3xl font-semibold tracking-[-0.035em]">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-[1.05rem] leading-8 text-[var(--ink-muted)]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">{children}</ul>
    ),
    a: ({ children, href }) => (
      <a className="font-semibold text-[var(--accent)] underline underline-offset-4" href={href}>
        {children}
      </a>
    ),
    ...components,
  };
}
