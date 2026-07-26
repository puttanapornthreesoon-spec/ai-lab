# Digital GiGz AI Lab

**Empowering Healthcare Professionals with Artificial Intelligence**

Digital GiGz AI Lab is a production-ready healthcare AI education and resource
platform for nurses, nurse educators, students, researchers, healthcare
professionals, and hospital leaders.

[View the live site](https://digital-gigz-ai-lab.mam0898448986.chatgpt.site)

## Product scope

- Premium responsive landing experience
- About page with story, mission, vision, principles, founder note, and roadmap
- Searchable, filterable AI tool directory
- Prompt library with search, categories, browser-local favorites, copy action,
  accessible modal, and toast feedback
- Research hub with real downloadable templates
- Learning center with pathway previews, tutorials, video placeholders, and FAQ
- Searchable blog with category and tag filters, pagination, MDX content,
  metadata, and structured data
- Browser-local dashboard for bookmarks, quick actions, and course previews
- Privacy-aware contact form that prepares a message in the user’s email app
- Light and dark themes with reduced-motion support
- Robots, sitemap, web manifest, Open Graph, Twitter card, and Schema.org data

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- Integrated MDX content pipeline
- ESLint and Prettier
- Vinext/Cloudflare-compatible production build for the hosted edition

## Quick start

### Requirements

- Node.js 22.13 or newer
- npm

### Install

```bash
npm ci
```

### Configure

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin.

### Develop

```bash
npm run dev
```

### Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm test
```

### Production builds

```bash
# Native Next.js build for Vercel or Netlify
npm run build:next

# Validated hosted Worker build
npm run build
```

## Routes

| Route          | Purpose                                                      |
| -------------- | ------------------------------------------------------------ |
| `/`            | Landing page and product overview                            |
| `/about`       | Story, principles, founder note, and roadmap                 |
| `/tools`       | AI tool catalog with search, filters, favorites, and details |
| `/prompts`     | Prompt library with search, categories, favorites, and copy  |
| `/research`    | Evidence workflow, guides, templates, and downloads          |
| `/learn`       | Learning pathways, tutorials, videos, and FAQ                |
| `/blog`        | Searchable editorial index with pagination                   |
| `/blog/[slug]` | SEO-ready article pages                                      |
| `/dashboard`   | Browser-local workspace; excluded from indexing              |
| `/contact`     | Privacy-aware message preparation form                       |
| `/privacy`     | Plain-language privacy notice                                |
| `/terms`       | Educational-use terms                                        |

## Repository map

```text
app/                 App Router pages, metadata routes, loading/error states
components/          Shared layout, interaction, catalog, and UI components
content/blog/        Trusted repository-owned MDX source examples
docs/                Product, architecture, brand, and deployment documentation
lib/                 Typed catalog data and site configuration
public/downloads/    User-facing research templates
scripts/             Hosted build and artifact validation helpers
tests/               Rendered-output smoke tests
```

## Local browser storage

The current release stores theme preference, prompt favorites, and tool
favorites in `localStorage`. There is no account synchronization. Do not store
patient-identifiable, confidential, or restricted information in these
features.

## MDX authoring

Trusted repository content can be authored in `content/blog/*.mdx`.
`mdx-components.tsx` provides the accessible base component mapping. MDX
executes JSX, so do not compile untrusted user or CMS content without a separate
sanitization pipeline.

## Deployment

See [Deployment Guide](docs/DEPLOYMENT.md) for GitHub, Vercel, Netlify, and the
reduced static GitHub Pages edition.

## Documentation

- [Product Blueprint](docs/PRODUCT_BLUEPRINT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Brand Guide](docs/BRAND_GUIDE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [Changelog](CHANGELOG.md)

## License

Released under the [MIT License](LICENSE).
