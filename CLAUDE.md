# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start dev server with Turbopack (next dev --turbopack)
bun run build     # Production build
bun run start     # Start production server
bun run lint      # ESLint check
```

Use `bun` (not `npm`) — the lockfile is `bun.lockb`.

## Stack

- **Next.js 16** with App Router (single-page portfolio, no multi-route navigation)
- **React 19** + TypeScript (strict mode, path alias `@/*` → repo root)
- **Tailwind CSS 3** + `shadcn/ui` (New York style, Zinc base, CSS variables)
- **Framer Motion** for animations, **next-themes** for dark/light mode
- **Radix UI** primitives wrapped by `components/ui/`

## Architecture

```
app/
  page.tsx            # Entire portfolio — single page, all sections inline
  layout.tsx          # Root layout: metadata, ThemeProvider
  globals.css         # CSS variables for theming (HSL tokens, .dark overrides)
  components/         # Page-specific components (not shared)
    skills-section.tsx
    project-card.tsx
    work-timeline.tsx
    experience-timeline.tsx
    education-timeline.tsx
    waving-hand.tsx

components/
  ui/                 # shadcn/ui wrappers (badge, button, card, tabs)
  theme-provider.tsx  # next-themes <ThemeProvider> wrapper

lib/
  utils.ts            # cn() = clsx + tailwind-merge

public/logos/         # SVG tech logos referenced by project-card and skills
```

## Key Patterns

**Theme safety**: Components that render theme-dependent UI must check a `mounted` state (`useEffect` + `useState(false)`) before rendering, to avoid hydration mismatches.

**Class merging**: Always use `cn()` from `lib/utils.ts` for conditional Tailwind classes — never concatenate class strings directly.

**Styling tokens**: Colors are defined as CSS variables (e.g., `--background`, `--foreground`, `--primary`) in `globals.css` and consumed via Tailwind config as `bg-background`, `text-foreground`, etc. Do not hard-code color values.

**shadcn/ui additions**: Use `npx shadcn@latest add <component>` — it writes into `components/ui/` and follows the existing New York / Zinc / CSS-variables config from `components.json`.

**Navigation**: The page uses anchor-based scroll (`#home`, `#skills`, `#projects`, `#contact`) — there are no Next.js route segments beyond the single root page.
