# Brand Guide

## Brand

- **Name:** Digital GiGz AI Lab
- **Tagline:** Empowering Healthcare Professionals with Artificial Intelligence
- **Personality:** calm, capable, curious, humane, rigorous
- **Writing style:** direct, generous, transparent about limits

Avoid “AI magic,” clinical-outcome claims, invented endorsements, or language
that transfers professional accountability to a model.

## Color

| Token        | Light     | Dark      | Purpose                    |
| ------------ | --------- | --------- | -------------------------- |
| Background   | `#F9F9FC` | `#090B12` | Page canvas                |
| Surface      | `#FFFFFF` | `#11141D` | Cards and controls         |
| Primary text | `#11131B` | `#F5F5F8` | Headings and body          |
| Muted text   | `#5F6575` | `#A5ABBA` | Supporting copy            |
| Border       | `#E3E5ED` | `#2B3040` | Boundaries                 |
| Accent       | `#6D4AFF` | `#A58CFF` | Primary interaction        |
| Sky          | `#4589FF` | `#72A7FF` | Gradient support           |
| Success      | `#0D7A5A` | `#5ED8AE` | Verified/success state     |
| Danger       | `#B92E44` | `#FF7D8F` | Privacy and error emphasis |

Brand gradient:

```css
linear-gradient(135deg, #6d4aff, #477ff8)
```

Use gradients for atmosphere and emphasis, not behind long clinical or
instructional copy.

## Typography

Geist is the primary family. Use the following hierarchy:

| Role          | Size                           | Weight  | Tracking   |
| ------------- | ------------------------------ | ------- | ---------- |
| Hero          | `clamp(3.15rem, 7vw, 5.65rem)` | 650     | `-0.062em` |
| Page title    | `clamp(2.8rem, 7vw, 5.2rem)`   | 650     | `-0.06em`  |
| Section title | `clamp(2.25rem, 5vw, 4rem)`    | 620     | `-0.05em`  |
| Body          | 16–20px                        | 400–450 | normal     |
| Eyebrow       | 11–12px                        | 700     | `0.14em`   |

Keep editorial prose under approximately 72 characters per line.

## Shape and elevation

- Control radius: 12–14px
- Card radius: 24px
- Hero panel radius: 32px
- Pills: fully rounded
- Standard cards: opaque
- Glass treatment: fixed navigation and floating hero panels only
- Hover lift: 2–4px on devices that support hover

## Logo

The symbol is a white expanding spark in a violet-to-blue rounded square. Pair
it with the two-line `DIGITAL GiGz / AI LAB` wordmark. Preserve clear space at
least equal to half the symbol width.

## Accessibility

- Target WCAG 2.2 AA contrast.
- Preserve visible focus and 44px primary targets.
- Do not communicate risk, category, or selection through color alone.
- Respect reduced-motion and system color-scheme preferences.
- Keep safety copy beside the relevant input or action.
