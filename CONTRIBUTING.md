# Contributing

Thank you for helping Digital GiGz AI Lab make responsible AI learning clearer
and more useful for healthcare professionals.

## Before contributing

- Do not add patient-identifiable, confidential, or restricted information.
- Do not invent clinical validation, credentials, partnerships, testimonials,
  citations, or accreditation.
- Treat all health-related content as educational unless a verified review
  process states otherwise.
- Keep human review, evidence checks, and limitations visible.

## Development flow

1. Create a focused branch.
2. Install with `npm ci`.
3. Make the smallest coherent change.
4. Run `npm run format`, `npm run lint`, `npm run typecheck`, and `npm test`.
5. Update documentation and `CHANGELOG.md` when behavior changes.
6. Open a pull request describing the user need, solution, testing, and any
   accessibility or privacy implications.

## Content changes

Every substantial educational resource should state:

- intended audience;
- purpose and limits;
- author or accountable team;
- publication or update date;
- references when evidence claims are made;
- reviewer and review date when verified.

MDX is trusted code. Only repository-reviewed MDX may be compiled.

## Accessibility

New interactions must work with keyboard-only navigation, visible focus,
screen readers, reduced motion, 200% zoom, and a 320 CSS-pixel viewport.

## Commit style

Use a short imperative subject, for example:

```text
Add evidence-table download
Improve prompt dialog focus handling
Clarify dashboard privacy notice
```
