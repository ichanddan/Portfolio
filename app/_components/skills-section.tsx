"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: "/logos/javascript.svg", invert: false },
      { name: "Python", logo: "/logos/python.svg", invert: false },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", logo: "/logos/react.svg", invert: true },
      { name: "Next.js", logo: "/logos/nextjs.svg", invert: true },
      { name: "TypeScript", logo: "/logos/typescript.svg", invert: false },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg", invert: false },
      { name: "Redux Toolkit", logo: "/logos/react.svg", invert: true },
      { name: "Better Auth", logo: "/logos/better-auth.png", invert: true },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg", invert: false },
      { name: "Express.js", logo: "/logos/express.svg", invert: true },
      { name: "FastAPI", logo: "/logos/fastapi.svg", invert: false },
      { name: "Prisma ORM", logo: "/logos/prisma.svg", invert: true },
      { name: "Drizzle ORM", logo: "/logos/drizzle.svg", invert: true },
      { name: "WebSocket", logo: "/logos/websocket.svg", invert: true },
      { name: "JWT Auth", logo: null, invert: false },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg", invert: false },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg", invert: false },
      { name: "MySQL", logo: "/logos/mysql.svg", invert: false },
      { name: "Redis", logo: "/logos/redis.svg", invert: true },
      { name: "Mongoose", logo: "/logos/mongodb.svg", invert: false },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", logo: "/logos/react.svg", invert: true },
      { name: "Expo", logo: "/logos/expo.svg", invert: true },
    ],
  },
  {
    name: "AI & Cloud",
    skills: [
      { name: "Azure OpenAI", logo: "/logos/azure.svg", invert: true },
      { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg", invert: false },
      { name: "OpenAI", logo: "/logos/OpenAI_Logo.svg", invert: true },
      { name: "Python", logo: "/logos/python.svg", invert: false },
    ],
  },
  {
    name: "UI Libraries",
    skills: [
      { name: "shadcn/ui", logo: "/logos/shadcn.svg", invert: true },
      { name: "Ant Design", logo: "/logos/antd.svg", invert: false },
      { name: "NextUI", logo: "/logos/nextui.svg", invert: true },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", logo: "/logos/github.svg", invert: true },
      { name: "Vercel", logo: "/logos/vercel.svg", invert: true },
      { name: "Postman", logo: "/logos/postman.svg", invert: false },
      { name: "Figma", logo: "/logos/figma.svg", invert: false },
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
                            className={`shrink-0${skill.invert ? " dark:invert" : ""}`}
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
