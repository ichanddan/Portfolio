"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { name: "Redux Toolkit", logo: "/logos/react.svg" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/express.svg" },
      { name: "FastAPI", logo: "/logos/fastapi.svg" },
      { name: "Prisma ORM", logo: "/logos/prisma.svg" },
      { name: "WebSocket", logo: "/logos/websocket.svg" },
      { name: "Better Auth", logo: "/logos/better-auth.png" },
      { name: "JWT Auth", logo: null },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "Redis", logo: "/logos/redis.svg" },
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
    name: "AI & Cloud",
    skills: [
      { name: "Azure OpenAI", logo: "/logos/azure.svg" },
      { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg" },
      { name: "OpenAI", logo: "/logos/OpenAI_Logo.svg" },
      { name: "Python", logo: "/logos/python.svg" },
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
      { name: "Git / GitHub", logo: "/logos/github.svg" },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "Postman", logo: "/logos/postman.svg" },
      { name: "Figma", logo: "/logos/figma.svg" },
      { name: "JIRA", logo: "/logos/jira.svg" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 bg-indigo-50/40 dark:bg-indigo-950/20">
      <div className="max-w-[768px] mx-auto px-4">
        <SectionHeading>Skills</SectionHeading>
        <motion.div
          ref={ref}
          className="grid gap-4 md:grid-cols-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-1.5 text-sm">
                        {skill.logo && (
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="shrink-0 dark:invert"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
