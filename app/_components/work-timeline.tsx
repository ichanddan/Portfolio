"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Aiqwip Technology Pvt. Ltd.",
    location: "Bangalore, India",
    roles: [
      {
        title: "Software Engineer",
        period: "December 2025 – Present",
        description: [
          "Design, develop, and maintain scalable full-stack web applications using Next.js, TypeScript, and Python/FastAPI, contributing to the company's core product roadmap.",
          "Build secure RESTful APIs and backend services with FastAPI integrated with PostgreSQL and Redis, ensuring high availability, data integrity, and optimal query performance.",
          "Implement reusable, responsive UI components with Tailwind CSS and Shadcn UI, improving development velocity and maintaining a consistent design system.",
          "Worked as Frontend Developer on Imeld AI for 5 months before transitioning to full stack ownership; platform successfully passed VAPT (Vulnerability Assessment & Penetration Testing) and is currently undergoing SOC2 certification.",
        ],
      },
    ],
  },
  {
    company: "Aasa Technology",
    location: "Remote",
    roles: [
      {
        title: "Junior Full Stack Developer",
        period: "January 2025 – December 2025",
        description: [
          "Designed and implemented secure, scalable RESTful APIs using Node.js and Express.js, enabling seamless frontend-backend communication across the platform.",
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
        title: "Frontend Developer",
        period: "May 2024 – January 2025",
        description: [
          "Developed and maintained production-grade UI components using React.js and JavaScript.",
          "Integrated third-party REST APIs and auth services (JWT, OAuth) to expand product capabilities and shorten feature delivery cycles.",
          "Partnered with backend engineers to ensure seamless frontend-backend communication and end-to-end data integrity.",
        ],
      },
      {
        title: "Frontend Developer Intern",
        period: "February 2024 – May 2024",
        description: [
          "Translated Figma wireframes into pixel-perfect, production-grade interfaces using HTML5, CSS3, and JavaScript.",
          "Built fully responsive, cross-browser UIs optimized for mobile, tablet, and desktop, reaching a Lighthouse accessibility score of 90+.",
          "Integrated frontend components with backend REST APIs, partnering with server-side engineers to ensure end-to-end functionality and data integrity.",
        ],
      },
    ],
  },
];

type Experience = (typeof experiences)[number];

function TimelineEntry({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-b from-indigo-600 to-cyan-500 ring-4 ring-background" />

      {/* Company */}
      <div className="mb-4">
        <h3 className="text-base font-bold">{exp.company}</h3>
        <p className="text-xs text-muted-foreground">{exp.location}</p>
      </div>

      {/* Roles */}
      <div className="space-y-6">
        {exp.roles.map((role, roleIndex) => (
          <div key={roleIndex}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-semibold">{role.title}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {role.period}
              </span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {role.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function WorkTimeline() {
  return (
    <div className="relative border-l-2 border-indigo-100 dark:border-indigo-900 ml-3">
      {experiences.map((exp, index) => (
        <TimelineEntry key={index} exp={exp} index={index} />
      ))}
    </div>
  );
}
