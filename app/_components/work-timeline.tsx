"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          "Led frontend development on Imeld AI for 5 months before transitioning to full stack ownership; platform successfully passed VAPT (Vulnerability Assessment & Penetration Testing) and is currently undergoing SOC2 certification.",
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
];

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function WorkTimeline() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <AnimatedCard key={index} index={index}>
          <Card className="transition-all duration-200 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-muted-foreground/20 pl-6 ml-2">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="mb-8 last:mb-0 relative">
                    <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5 bg-gradient-to-b from-indigo-600 to-cyan-500" />
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
        </AnimatedCard>
      ))}
    </div>
  );
}
