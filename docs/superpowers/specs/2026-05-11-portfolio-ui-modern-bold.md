# Portfolio UI — Modern & Bold Design Spec

**Date:** 2026-05-11
**Scope:** Visual overhaul of the entire portfolio site. No data changes — content from the previous plan stays as-is.

---

## Goal

Transform the current minimal/flat portfolio into a modern, bold developer portfolio using an indigo→cyan gradient accent system, split hero with profile photo, alternating section backgrounds, and moderate Framer Motion animations.

---

## 1. Color System

### New Tailwind Classes Used
All gradient work uses Tailwind's built-in `from-indigo-600 to-cyan-500` scale. No new CSS variables needed.

| Usage | Class |
|---|---|
| Gradient background | `bg-gradient-to-r from-indigo-600 to-cyan-500` |
| Gradient text | `bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent` |
| Gradient ring (photo) | CSS `background` on a wrapper div (gradient → white gap → photo) |
| Tinted section bg (light) | `bg-indigo-50/40` |
| Tinted section bg (dark) | `dark:bg-indigo-950/20` |
| Card hover glow | `hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800` |
| Timeline dot | `bg-gradient-to-b from-indigo-600 to-cyan-500` |
| Education grade badge | `bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300` |

---

## 2. Global Typography Scale

| Element | Before | After |
|---|---|---|
| `h1` (hero name) | `text-4xl` | `text-5xl` |
| `h2` (section headings) | `text-2xl` | `text-3xl` |
| Body / bio | `text-lg` | `text-base leading-relaxed` (already set) |

---

## 3. Navigation Header

- Hovered nav buttons get a gradient underline using a positioned `span` that scales in on hover (`scaleX 0→1`, `transform-origin: left`)
- Implementation: wrap button content in a `relative` span, add `after:` pseudo via a `<span>` overlay (Tailwind `after:` not reliable cross-browser for animated underlines — use a sibling `<span>` with Framer Motion `layoutId` or a simple CSS transition)
- Chosen approach: add a `<span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-indigo-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />` inside each nav `<button>` (button gets `relative group overflow-hidden`)

---

## 4. Hero Section

### Layout
Split layout on `md+` screens: text column left, photo right. Stacks vertically on mobile.

```
md+:  [text block (flex-1)]   [photo (w-40 h-40, shrink-0)]
sm:   [text block]
      [photo centered]
```

### Name gradient
`<span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">`
Applied to "Chandan" only (not the "Hi, I'm" prefix).

### Profile photo
```tsx
<div className="relative w-40 h-40 shrink-0">
  {/* gradient ring */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 p-[3px]">
    <div className="w-full h-full rounded-full bg-background" />
  </div>
  {/* photo */}
  <Image
    src="https://media.licdn.com/dms/image/v2/D5603AQFT3-6ZLcJklA/profile-displayphoto-shrink_800_800/B56Zd0t4IUG0Ac-/0/1750009876246?e=1760572800&v=beta&t=kjYN2V3xyEaoqIM6kYpLYzkmo03JImHGASyBZcqCaPM"
    alt="Chandan Kumar Maurya"
    fill
    className="rounded-full object-cover p-[3px]"
  />
</div>
```

### Download CV button
Changes from default `Button` to gradient variant:
```tsx
<Button asChild className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 border-0">
```

### Hero entrance animation
Framer Motion `staggerChildren` on a wrapper `motion.div`:
- Container: `staggerChildren: 0.1, delayChildren: 0.1`
- Each child (`motion.div`): `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Children in order: subtitle pill → h1 → bio → buttons → stats strip

---

## 5. Section Heading Style

Reusable pattern applied to all `h2` section headings (Skills, Experience, Projects, Contact):

```tsx
<div className="flex items-center gap-3 mb-8">
  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-600 to-cyan-500" />
  <h2 className="text-3xl font-bold">{title}</h2>
</div>
```

Applied in `page.tsx` inline for Skills, Experience, Projects, Contact sections.

---

## 6. Skills Section

### Background band
The outer `<main className="max-w-[768px] mx-auto px-4 py-12">` wrapper in `page.tsx` is replaced with a plain `<main>`. Each section then wraps its content in `<div className="max-w-[768px] mx-auto px-4">` internally. This lets background colors span the full viewport width.

Skills section gets a full-width tinted band:
```tsx
<section id="skills" className="mb-20 py-16 bg-indigo-50/40 dark:bg-indigo-950/20">
  <div className="max-w-[768px] mx-auto px-4">
    {/* heading + SkillsSection */}
  </div>
</section>
```

All other sections without a background also get the inner `<div className="max-w-[768px] mx-auto px-4">` wrapper.

### Skill card category headers
In `skills-section.tsx`, `CardTitle` gets gradient text:
```tsx
<CardTitle className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
```

### Card hover
Cards get transition + hover glow:
```tsx
<Card className="transition-all duration-200 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
```

### Skill cards entrance animation
Wrap `SkillsSection` grid in a `motion.div` with `useInView`:
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-50px" })
// container variants: staggerChildren 0.08
// card variants: opacity 0→1, y 20→0
```
Add `"use client"` directive since `useInView` is client-side.

---

## 7. Work Timeline

### Timeline dot
Change `bg-primary` to gradient:
```tsx
<div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5 bg-gradient-to-b from-indigo-600 to-cyan-500" />
```

### Card hover
Same hover glow as skill cards.

---

## 8. Education Timeline

### Grade badges
Change from `bg-secondary text-secondary-foreground` to:
```tsx
<span className="text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-2 py-0.5 rounded-full">
```

---

## 9. Projects Section

- Background: default (white/dark) — provides contrast with the tinted skills band
- Project cards: same hover glow treatment as skill cards
- Existing Framer Motion entrance animations on `ProjectCard` extended with a `delay` prop per card index for stagger effect

`ProjectCard` receives an optional `index` prop:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
>
```

In `page.tsx`, pass `index={0}`, `index={1}`, etc.

---

## 10. Contact Section

Gradient tinted panel:
```tsx
<section id="contact" className="mb-20">
  <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-200/50 dark:border-indigo-800/50 p-10">
    {/* heading, bio, button */}
  </div>
</section>
```

Button inside contact uses the gradient style (same as Download CV).

---

## 11. Footer

Thin gradient rule above the footer text:
```tsx
<footer className="border-t py-6">
  <div className="h-px bg-gradient-to-r from-indigo-600 to-cyan-500 mb-6" />
  <div className="max-w-[768px] mx-auto px-4 text-center text-sm text-muted-foreground">
    © 2026 Chandan Kumar Maurya. All rights reserved.
  </div>
</footer>
```

---

## 12. Files Changed

| File | Change |
|---|---|
| `app/page.tsx` | Remove outer max-width `<main>` wrapper; hero split layout + photo; gradient name; hero animations; section heading style; skills band; contact panel; footer gradient line; nav underline |
| `app/components/skills-section.tsx` | Add `"use client"`, `useInView` stagger animation, gradient category headers, card hover |
| `app/components/work-timeline.tsx` | Gradient timeline dots, card hover glow |
| `app/components/education-timeline.tsx` | Gradient grade badges, card hover glow |
| `app/components/project-card.tsx` | Add `index` prop for stagger delay |
| `next.config.ts` | Add `remotePatterns` for `media.licdn.com` to allow `next/image` to load the LinkedIn profile photo |

No new files. No new dependencies (Framer Motion and `next/image` already installed).

---

## 13. Out of Scope

- No changes to content/data (handled in previous plan)
- No new pages or routes
- No font changes (Inter stays)
