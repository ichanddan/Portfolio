# Portfolio UI + Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the portfolio's UI and update all content (work experience, education, skills, projects, hero) to accurately reflect the resume of Chandan Kumar Maurya.

**Architecture:** All changes are confined to existing files — `app/page.tsx`, `app/components/work-timeline.tsx`, `app/components/education-timeline.tsx`, `app/components/skills-section.tsx`, `app/components/project-card.tsx`, and `app/layout.tsx`. No new files needed.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Bun

---

## Known Issues to Fix (from resume vs current code)

| Location | Current (Wrong) | Correct (Resume) |
|---|---|---|
| `page.tsx:105` | `code.use.cm@gmail.com` | `code.us.cm@gmail.com` |
| `page.tsx:213` | `code.use.cm@gmail.com` | `code.us.cm@gmail.com` |
| `work-timeline.tsx` | Aasa title: "Junior Full Stack Developer" | "Full Stack Developer" |
| `work-timeline.tsx` | Aasa period: "Dec 2024 - Dec 2025" | "January 2025 – December 2025" |
| `work-timeline.tsx` | Daps period: "May 2024 - 16 Dec 2025" | Two separate roles |
| `page.tsx` projects | "School Sphere" (school mgmt) | "School Spares" (e-commerce) |
| `page.tsx` projects | eSportsPedia missing from personal | Must be added |

---

## File Map

| File | Changes |
|---|---|
| `app/components/work-timeline.tsx` | Rewrite all experience data from resume |
| `app/components/education-timeline.tsx` | Add grades, fix NIELIT to certification, fix BCA |
| `app/components/skills-section.tsx` | Add Redux Toolkit, Prisma ORM, JWT, WebSocket; add DevOps category |
| `app/components/project-card.tsx` | Add Redux, Ant Design to `techLogos` map |
| `app/page.tsx` | Fix email ×2, update hero, add stats, update projects |
| `app/layout.tsx` | Update SEO metadata |

---

## Task 1: Update Work Experience Data

**Files:**
- Modify: `app/components/work-timeline.tsx`

- [ ] **Step 1: Replace the entire file with accurate resume data**

Replace the full contents of `app/components/work-timeline.tsx` with:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkTimeline() {
  const experiences = [
    {
      company: "Aiqwip Technology Pvt. Ltd.",
      location: "Bangalore, India",
      roles: [
        {
          title: "Software Engineer",
          period: "December 2025 – Present",
          description: [
            "Design, develop, and maintain scalable full-stack web applications using Next.js, TypeScript, Node.js, and Express.js, contributing to the company's core product roadmap.",
            "Build secure RESTful APIs and backend services integrated with MongoDB and MySQL, ensuring high availability, data integrity, and optimal query performance.",
            "Implement reusable, responsive UI components with Tailwind CSS and Shadcn UI, improving development velocity and maintaining a consistent design system.",
            "Collaborate with product managers, designers, and QA engineers in an agile environment to deliver features through sprint-based release cycles.",
            "Participate in code reviews, write unit tests, and apply software engineering best practices to improve code quality and reduce production defects.",
          ],
        },
      ],
    },
    {
      company: "Aasa Technology",
      location: "Remote",
      roles: [
        {
          title: "Full Stack Developer",
          period: "January 2025 – December 2025",
          description: [
            "Designed and implemented secure, scalable RESTful APIs using Node.js and Express.js, enabling seamless frontend-backend communication for 10,000+ active users.",
            "Developed reusable, performant UI components with React.js and TypeScript, cutting component development time by ~30% and ensuring consistent design system adoption.",
            "Reduced page load times by ~40% by optimizing rendering, implementing lazy loading, and refactoring critical React components.",
            "Resolved high-priority production bugs, improving checkout conversion and overall application reliability for thousands of end users.",
          ],
        },
      ],
    },
    {
      company: "Daps Software",
      location: "Remote",
      roles: [
        {
          title: "Full Stack Developer",
          period: "May 2024 – January 2025",
          description: [
            "Engineered end-to-end web solutions using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering 5+ production-ready modules on schedule.",
            "Partnered with cross-functional teams to architect and implement scalable backend services, supporting a 25% increase in platform traffic without degradation.",
            "Integrated third-party REST APIs and payment/auth services (JWT, OAuth) to expand product capabilities and shorten feature delivery cycles.",
            "Authored unit and integration tests, enforced ESLint/Prettier standards, and participated in peer code reviews to maintain high code quality.",
          ],
        },
        {
          title: "Frontend Developer",
          period: "February 2024 – May 2024",
          description: [
            "Translated Figma wireframes into pixel-perfect, production-grade interfaces using HTML5, CSS3, and JavaScript.",
            "Built fully responsive, cross-browser UIs optimized for mobile, tablet, and desktop, reaching a Lighthouse accessibility score of 90+.",
            "Integrated frontend components with backend REST APIs, partnering with server-side engineers to ensure end-to-end functionality and data integrity.",
          ],
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{exp.company}</CardTitle>
            <p className="text-sm text-muted-foreground">{exp.location}</p>
          </CardHeader>
          <CardContent>
            <div className="relative border-l border-muted-foreground/20 pl-6 ml-2">
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mb-8 last:mb-0 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-1.5" />
                  <h3 className="text-base font-semibold">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{role.period}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {role.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Verify dev server shows correct data**

Run: `bun run dev`

Open http://localhost:3000, click the Work tab and confirm:
- Aiqwip shows "Software Engineer" with "December 2025 – Present"
- Aasa shows "Full Stack Developer" (not Junior) with "January 2025 – December 2025"
- Daps shows two separate roles: Full Stack Developer (May 2024–Jan 2025) and Frontend Developer (Feb 2024–May 2024)
- Each role shows location below company name

- [ ] **Step 3: Commit**

```bash
git add app/components/work-timeline.tsx
git commit -m "content: update work timeline with accurate resume data"
```

---

## Task 2: Update Education Timeline Data

**Files:**
- Modify: `app/components/education-timeline.tsx`

- [ ] **Step 1: Replace the file with accurate resume education data**

Replace the full contents of `app/components/education-timeline.tsx` with:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationTimeline() {
  const education = [
    {
      school: "Manipal University Jaipur",
      degree: "Master of Computer Applications (MCA)",
      field: "Distance Learning",
      period: "2023 – 2025",
      grade: "SGPA: 9.57 / 10",
      description: [
        "Specialized in advanced software development, system design, and database management.",
        "Completed full-stack development projects applying modern software engineering principles.",
      ],
    },
    {
      school: "Mahatma Gandhi Kashi Vidyapith University",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Science",
      period: "2018 – 2021",
      grade: "Percentage: 61%",
      description: [
        "Built a strong foundation in core computer science concepts, algorithms, and programming.",
        "Gained hands-on experience with web development and relational databases.",
      ],
    },
    {
      school: "National Institute of Electronics & Information Technology (NIELIT)",
      degree: "O Level Certification",
      field: "Computer Software & Media Applications",
      period: "2021 – 2023",
      grade: "Grade: A+",
      description: [
        "Completed government-certified IT program covering programming, networking, and web development.",
        "Maintained excellent academic performance throughout the program.",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-base">{edu.school}</CardTitle>
            <p className="text-sm font-semibold text-primary">{edu.degree}</p>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-sm text-muted-foreground">{edu.field} · {edu.period}</p>
              <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                {edu.grade}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {edu.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/60" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Verify**

In the browser (Education tab) confirm:
- MCA shows SGPA: 9.57 / 10 badge
- BCA shows Percentage: 61% badge
- NIELIT shows Grade: A+ badge
- All three have the grade pill in the top-right of the card header

- [ ] **Step 3: Commit**

```bash
git add app/components/education-timeline.tsx
git commit -m "content: update education timeline with grades and accurate data"
```

---

## Task 3: Expand Skills Section

**Files:**
- Modify: `app/components/skills-section.tsx`

Resume skills not yet in the portfolio:
- Frontend: Redux Toolkit (no SVG in `/public/logos/` — text-only)
- Backend: Prisma ORM (`/logos/prisma.svg` ✓), JWT Authentication (text-only), WebSocket (text-only)
- Database: Mongoose (text-only — reuse mongodb.svg)
- New category: DevOps & Tools (Git, Vercel `/logos/vercel.svg` ✓, Postman, Figma, JIRA)

- [ ] **Step 1: Replace the file with updated skill categories**

Replace the full contents of `app/components/skills-section.tsx` with:

```tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { name: "Redux Toolkit", logo: null },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/express.svg" },
      { name: "Prisma ORM", logo: "/logos/prisma.svg" },
      { name: "JWT Auth", logo: null },
      { name: "WebSocket", logo: null },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "Mongoose", logo: "/logos/mongodb.svg" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", logo: "/logos/react.svg" },
      { name: "Expo", logo: "/logos/expo.svg" },
    ],
  },
  {
    name: "UI Libraries",
    skills: [
      { name: "shadcn/ui", logo: "/logos/shadcn.svg" },
      { name: "Ant Design", logo: "/logos/antd.svg" },
      { name: "NextUI", logo: "/logos/nextui.svg" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", logo: null },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "Postman", logo: null },
      { name: "Figma", logo: null },
      { name: "JIRA", logo: null },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-1.5 text-sm"
                >
                  {skill.logo && (
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify**

In the browser (Skills section) confirm:
- 6 categories visible: Frontend, Backend, Database, Mobile, UI Libraries, DevOps & Tools
- Redux Toolkit appears in Frontend (text only, no icon — that is correct)
- Prisma ORM appears in Backend with its icon
- DevOps & Tools card shows Git/GitHub, Vercel (with icon), Postman, Figma, JIRA

- [ ] **Step 3: Commit**

```bash
git add app/components/skills-section.tsx
git commit -m "content: expand skills section with Redux, Prisma ORM, JWT, WebSocket, DevOps"
```

---

## Task 4: Update Project Card Tech Logos + Fix Project Data

**Files:**
- Modify: `app/components/project-card.tsx`
- Modify: `app/page.tsx`

Missing from `techLogos` map: `Redux`, `Ant Design` (antd.svg exists), `Shadcn UI` (shadcn.svg exists), `Cloudflare R2` (text only).

Projects to add: **eSportsPedia** (personal — biggest resume project, currently missing).
Projects to fix: **School Spares** (resume name) replaces **School Sphere** (wrong name + wrong description).

- [ ] **Step 1: Update techLogos map in project-card.tsx**

In `app/components/project-card.tsx`, replace the `techLogos` object (lines 18-36) with:

```tsx
const techLogos: { [key: string]: string } = {
  TypeScript: "/logos/typescript.svg",
  "Next.js": "/logos/nextjs.svg",
  MongoDB: "/logos/mongodb.svg",
  Tailwind: "/logos/tailwind.svg",
  Vercel: "/logos/vercel.svg",
  React: "/logos/react.svg",
  "React Native": "/logos/react.svg",
  "Node": "/logos/nodejs.svg",
  "Express": "/logos/express.svg",
  "Prisma ORM": "/logos/prisma.svg",
  "Sequelize ORM": "/logos/sequelize.svg",
  PostgreSQL: "/logos/postgresql.svg",
  Python: "/logos/python.svg",
  Django: "/logos/django.svg",
  OpenAI: "/logos/OpenAI_Logo.svg",
  Langchain: "/logos/langchain-logo.svg",
  "API Integration": "/logos/api.svg",
  "Ant Design": "/logos/antd.svg",
  "shadcn/ui": "/logos/shadcn.svg",
  "Shadcn UI": "/logos/shadcn.svg",
  "WebSocket": "/logos/javascript.svg",
  MySQL: "/logos/mysql.svg",
}
```

- [ ] **Step 2: Update the personal and organizational project lists in page.tsx**

In `app/page.tsx`, replace the entire `<TabsContent value="personal" ...>` block (lines 152–165) with:

```tsx
<TabsContent value="personal" className="space-y-6">
  <ProjectCard
    title="eSportsPedia"
    description="Full-stack esports wiki platform covering Indian gaming — player profiles, team pages, tournaments, and news articles. Uses Next.js SSR/SSG for SEO-optimized pages and Server Actions to eliminate a separate API layer."
    link="https://esportspedia.org"
    technologies={["TypeScript", "Next.js", "Tailwind", "Shadcn UI"]}
  />
  <ProjectCard
    title="Dummy API"
    description="Customizable dummy API platform — sign up, create projects, define endpoints, configure response data, and test seamlessly all in one place."
    link="https://dmy-api.vercel.app/"
    technologies={["TypeScript", "Next.js", "MongoDB", "Tailwind"]}
  />
  <ProjectCard
    title="URL Shortener"
    description="Modern URL shortener that lets users create concise, shareable links. Built with performance and user experience in mind."
    link="https://ijkl.vercel.app/"
    technologies={["TypeScript", "Next.js", "Vercel", "Tailwind"]}
  />
</TabsContent>
```

- [ ] **Step 3: Update the organizational project list in page.tsx**

Replace the entire `<TabsContent value="organizational" ...>` block (lines 167–203) with:

```tsx
<TabsContent value="organizational" className="space-y-6">
  <ProjectCard
    title="School Spares"
    description="Full-stack e-commerce platform with secure JWT authentication, RESTful APIs, and role-based access control for admin and customer workflows. Optimized MongoDB queries reduced average API response time by ~35%."
    technologies={["React", "Node", "Express", "MongoDB", "Ant Design", "Prisma ORM"]}
    organization="Aasa Technology"
  />
  <ProjectCard
    title="ShamRock India"
    description="Lead-generation admin dashboard with modular, component-based widgets, drag-and-drop layouts, and real-time notifications via WebSocket for live data streams and operational visibility."
    link="https://keyshell.net/"
    technologies={["React", "Node", "Express", "MySQL", "Ant Design", "WebSocket", "Prisma ORM"]}
    organization="Aasa Technology"
  />
  <ProjectCard
    title="Nutri Value"
    description="Cross-platform nutrition tracking app (iOS, Android, Web) with secure authentication, REST APIs, offline support, and daily analytics for goal tracking."
    technologies={["React Native", "Node", "Express", "MySQL", "Prisma ORM"]}
    organization="Aasa Technology"
  />
</TabsContent>
```

- [ ] **Step 4: Verify**

In the browser (Projects section) confirm:
- Personal tab shows eSportsPedia first, then Dummy API, then URL Shortener
- Organizational tab shows School Spares (not School Sphere), ShamRock India, Nutri Value
- Tech badges on ShamRock India show the WebSocket badge with JS icon
- All external links open correctly

- [ ] **Step 5: Commit**

```bash
git add app/components/project-card.tsx app/page.tsx
git commit -m "content: add eSportsPedia, fix School Spares name/desc, update org projects from resume"
```

---

## Task 5: Refresh Hero Section + Fix Email Typo

**Files:**
- Modify: `app/page.tsx`

Issues: email typo (`code.use.cm` → `code.us.cm`) appears twice. Hero is informal ("Hi chandan here"), missing professional context.

Improvements:
- Professional greeting with full name
- Current role subtitle
- Professional summary from resume
- Stats strip (years of experience, projects)
- Download Resume button (links to the PDF file at `/Chandan_Kumar_Maurya_Resume.pdf` — copy the PDF to `public/` first)
- Fix both email occurrences

- [ ] **Step 1: Copy resume PDF to public folder so it can be served**

```bash
cp "C:/Users/chand/OneDrive/Desktop/Portfolio/Chandan_Kumar_Maurya_Resume.pdf" "C:/Users/chand/OneDrive/Desktop/Portfolio/public/Chandan_Kumar_Maurya_Resume.pdf"
```

- [ ] **Step 2: Replace the hero section in app/page.tsx**

Replace lines 77–122 (the `<section id="home" ...>` block) with:

```tsx
<section
  id="home"
  className="flex flex-col gap-8 mb-20"
>
  {/* Greeting + bio */}
  <div>
    <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
      Software Engineer · Full Stack Developer
    </p>
    <h1 className="text-4xl font-bold mb-4">
      Hi, I&apos;m Chandan <WavingHand />
    </h1>
    <p className="text-base text-muted-foreground mb-6 max-w-[560px] leading-relaxed">
      Results-driven Software Engineer with 2+ years of experience building scalable web and mobile
      applications using the MERN stack, TypeScript, Next.js, and React Native. Focused on clean
      architecture, performant UIs, and collaborative agile delivery.
    </p>
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="outline">
        <Link href="https://github.com/ichanddan" target="_blank">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="https://www.linkedin.com/in/ichanddan" target="_blank">
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="mailto:code.us.cm@gmail.com">
          <Mail className="mr-2 h-4 w-4" />
          Email
        </Link>
      </Button>
      <Button asChild>
        <Link href="/Chandan_Kumar_Maurya_Resume.pdf" target="_blank" download>
          Download CV
        </Link>
      </Button>
    </div>
  </div>

  {/* Stats strip */}
  <div className="flex flex-wrap gap-6 pt-2 border-t">
    <div>
      <p className="text-2xl font-bold">2+</p>
      <p className="text-sm text-muted-foreground">Years experience</p>
    </div>
    <div>
      <p className="text-2xl font-bold">8+</p>
      <p className="text-sm text-muted-foreground">Projects shipped</p>
    </div>
    <div>
      <p className="text-2xl font-bold">10k+</p>
      <p className="text-sm text-muted-foreground">Users served</p>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Fix email typo in the contact section**

In `app/page.tsx`, find line 213:
```tsx
<Link href="mailto:code.use.cm@gmail.com">Send me an email</Link>
```

Replace with:
```tsx
<Link href="mailto:code.us.cm@gmail.com">Send me an email</Link>
```

- [ ] **Step 4: Update the contact section heading to use consistent casing**

Find in `app/page.tsx`:
```tsx
<h2 className="text-2xl font-bold mb-8">get in touch</h2>
```

Replace with:
```tsx
<h2 className="text-2xl font-bold mb-8">Get in touch</h2>
```

- [ ] **Step 5: Verify**

In the browser confirm:
- Hero shows "Hi, I'm Chandan 👋" with subtitle "Software Engineer · Full Stack Developer"
- Four buttons: GitHub, LinkedIn, Email, Download CV
- Stats strip shows 2+, 8+, 10k+
- Download CV button opens/downloads the PDF
- Email links in both hero and contact use `code.us.cm@gmail.com` (no extra `e`)

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx public/Chandan_Kumar_Maurya_Resume.pdf
git commit -m "feat: refresh hero section, fix email typo, add stats strip and CV download"
```

---

## Task 6: Update Layout Metadata + Add Experience Nav Link

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update SEO metadata in layout.tsx**

Replace the `metadata` object (lines 9–13 of `app/layout.tsx`) with:

```tsx
export const metadata: Metadata = {
  title: "Chandan Kumar Maurya — Software Engineer",
  description:
    "Portfolio of Chandan Kumar Maurya, a Software Engineer with 2+ years of experience in full-stack development using MERN stack, Next.js, TypeScript, and React Native.",
}
```

- [ ] **Step 2: Add section id and Experience nav link in page.tsx**

In `app/page.tsx`, the work/education tabs section at line 129 is missing an `id`. Add `id="experience"`:

Find:
```tsx
<section className="mb-20">
  <Tabs defaultValue="work" className="w-full">
```

Replace with:
```tsx
<section id="experience" className="mb-20">
  <h2 className="text-2xl font-bold mb-8">Experience</h2>
  <Tabs defaultValue="work" className="w-full">
```

- [ ] **Step 3: Add Experience link to the header nav**

In `app/page.tsx`, find the nav block and add the Experience button after Skills:

```tsx
<nav className="flex gap-6">
  <button
    onClick={() => scrollToSection("home")}
    className="text-sm font-medium hover:text-primary"
  >
    Home
  </button>
  <button
    onClick={() => scrollToSection("skills")}
    className="text-sm font-medium hover:text-primary"
  >
    Skills
  </button>
  <button
    onClick={() => scrollToSection("experience")}
    className="text-sm font-medium hover:text-primary"
  >
    Experience
  </button>
  <button
    onClick={() => scrollToSection("projects")}
    className="text-sm font-medium hover:text-primary"
  >
    Projects
  </button>
  <button
    onClick={() => scrollToSection("contact")}
    className="text-sm font-medium hover:text-primary"
  >
    Contact
  </button>
</nav>
```

- [ ] **Step 4: Verify**

In the browser confirm:
- Page title in browser tab reads "Chandan Kumar Maurya — Software Engineer"
- Header nav shows: Home · Skills · Experience · Projects · Contact
- Clicking Experience scrolls to the Work/Education tabs section
- "Experience" heading appears above the tabs

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: update SEO metadata, add Experience nav link and section heading"
```

---

## Self-Review

### Spec Coverage

| Requirement | Covered |
|---|---|
| Fix email typo (code.use → code.us) | ✓ Task 5 Steps 2 & 3 |
| Accurate work titles/periods/descriptions | ✓ Task 1 |
| Accurate education with grades | ✓ Task 2 |
| Skills match resume (Redux, Prisma, JWT, WebSocket, DevOps) | ✓ Task 3 |
| Add eSportsPedia to personal projects | ✓ Task 4 Step 2 |
| Fix School Sphere → School Spares | ✓ Task 4 Step 3 |
| Hero reflects professional identity | ✓ Task 5 |
| Download CV button | ✓ Task 5 Step 2 |
| Stats strip (years, projects, users) | ✓ Task 5 Step 2 |
| Experience nav link | ✓ Task 6 |
| Updated SEO metadata | ✓ Task 6 Step 1 |

### No Placeholders Found
All steps contain complete code. No TBD or TODO markers.

### Type Consistency
- `ProjectCard` props: `title`, `description`, `link?`, `technologies`, `organization?` — all usages in Task 4 match the interface defined in `project-card.tsx:10-16`.
- `techLogos` keys added in Task 4 Step 1 (`"Ant Design"`, `"WebSocket"`, `"Shadcn UI"`, `"MySQL"`) match the string values used in `technologies` arrays in Task 4 Steps 2-3.
- Education `grade` field added in Task 2 is typed inline (no shared interface) — consistent across all three entries.
