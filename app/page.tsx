"use client";

import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import FloatingNav from "./components/floating-nav";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import EducationTimeline from "./components/education-timeline";
import ProjectCard from "./components/project-card";
import SkillsSection from "./components/skills-section";
import WavingHand from "./components/waving-hand";
import WorkTimeline from "./components/work-timeline";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-600 to-cyan-500 shrink-0" />
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  );
}

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />

      {/* Header — name + theme toggle only */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-40">
        <div className="max-w-[768px] mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Chandan Kumar Maurya
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-16">
        <div className="max-w-[768px] mx-auto px-4">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-8">
              <div className="flex-1">
                <motion.p
                  variants={fadeUp}
                  className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase"
                >
                  Software Engineer · Full Stack Developer
                </motion.p>
                <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4 leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    Chandan
                  </span>{" "}
                  <WavingHand />
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="text-base text-muted-foreground mb-6 max-w-[480px] leading-relaxed"
                >
                  Results-driven Software Engineer with 2+ years of experience building scalable
                  web and mobile applications using the MERN stack, TypeScript, Next.js, and React
                  Native. Focused on clean architecture, performant UIs, and collaborative agile
                  delivery.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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
                  <Button
                    asChild
                    className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 border-0"
                  >
                    <Link href="/Chandan_Kumar_Maurya_Resume.pdf" target="_blank" download>
                      Download CV
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Profile photo with gradient ring */}
              <motion.div variants={fadeUp} className="shrink-0 self-center md:self-start mt-2">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 p-[3px]">
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                  <Image
                    src="https://avatars.githubusercontent.com/u/131549483?v=4"
                    alt="Chandan Kumar Maurya"
                    fill
                    className="rounded-full object-cover p-[3px]"
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-6 border-t">
              {[
                { value: "2+", label: "Years experience" },
                { value: "8+", label: "Projects shipped" },
                { value: "10k+", label: "Users served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Imeld AI — Featured highlight between hero and skills */}
      <section className="py-10">
        <div className="max-w-[768px] mx-auto px-4">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500">
            <div className="bg-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-3 py-1 rounded-full">
                  ✦ Featured
                </span>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  Currently Building
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold">Imeld AI</h3>
                <Link
                  href="https://www.imeld.ai/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors mt-1"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[580px]">
                Enterprise AI platform integrating Azure OpenAI, Google Gemini, and Anam.ai with
                a real-time WebSocket backend and a Python/FastAPI service layer. Joined as
                Frontend Developer and transitioned to Full Stack ownership — responsible for UI,
                backend APIs, and PostgreSQL data architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-full">
                  ✓ VAPT Passed
                </span>
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full">
                  ◑ SOC2 Certification In Progress
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { name: "Next.js", logo: "/logos/nextjs.svg" },
                  { name: "Python", logo: "/logos/python.svg" },
                  { name: "FastAPI", logo: null },
                  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
                  { name: "Redis", logo: null },
                  { name: "WebSocket", logo: "/logos/javascript.svg" },
                  { name: "Azure OpenAI", logo: null },
                  { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg" },
                  { name: "Anam.ai", logo: null },
                ].map((tech) => (
                  <Badge key={tech.name} variant="secondary" className="flex items-center gap-1">
                    {tech.logo && (
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={14}
                        height={14}
                        className="shrink-0"
                      />
                    )}
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Aiqwip Technology Pvt. Ltd.
                </span>
                {" · "}December 2025 – Present
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills — full-width tinted band */}
      <section id="skills" className="py-16 bg-indigo-50/40 dark:bg-indigo-950/20">
        <div className="max-w-[768px] mx-auto px-4">
          <SectionHeading>Skills</SectionHeading>
          <SkillsSection />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="max-w-[768px] mx-auto px-4">
          <SectionHeading>Experience</SectionHeading>
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
              <WorkTimeline />
            </TabsContent>
            <TabsContent value="education">
              <EducationTimeline />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects — tinted band for contrast */}
      <section id="projects" className="py-16 bg-indigo-50/40 dark:bg-indigo-950/20">
        <div className="max-w-[768px] mx-auto px-4">
          <SectionHeading>Featured Projects</SectionHeading>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="organizational">Organizational</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <ProjectCard
                index={0}
                title="eSportsPedia"
                description="Full-stack esports wiki platform covering Indian gaming — player profiles, team pages, tournaments, and news articles. SEO-optimized with Next.js SSR/SSG and Server Actions for backend logic, eliminating a separate API layer."
                link="https://esportspedia.org"
                technologies={["TypeScript", "Next.js", "Tailwind", "Shadcn UI"]}
              />
              <ProjectCard
                index={1}
                title="Dummy API"
                description="Customizable dummy API platform — sign up, create projects, define endpoints, configure response data, and test seamlessly all in one place."
                link="https://dmy-api.vercel.app/"
                technologies={["TypeScript", "Next.js", "MongoDB", "Tailwind"]}
              />
              <ProjectCard
                index={2}
                title="URL Shortener"
                description="Modern URL shortener that lets users create concise, shareable links. Built with performance and user experience in mind."
                link="https://ijkl.vercel.app/"
                technologies={["TypeScript", "Next.js", "Vercel", "Tailwind"]}
              />
            </TabsContent>

            <TabsContent value="organizational" className="space-y-6">
              <ProjectCard
                index={0}
                title="School Spares"
                description="Full-stack e-commerce platform with secure JWT authentication, RESTful APIs, and role-based access control for admin and customer workflows. Optimized MongoDB queries reduced average API response time by ~35%."
                technologies={["React", "Node", "Express", "MongoDB", "Ant Design", "Prisma ORM"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                index={1}
                title="ShamRock India"
                description="Lead-generation admin dashboard with modular, component-based widgets, drag-and-drop layouts, and real-time notifications via WebSocket for live data streams and operational visibility."
                link="https://keyshell.net/"
                technologies={["React", "Node", "Express", "MySQL", "Ant Design", "WebSocket", "Prisma ORM"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                index={2}
                title="Nutri Value"
                description="Cross-platform nutrition tracking app (iOS, Android, Web) with secure authentication, REST APIs, offline support, and daily analytics for goal tracking. Seamless sync between mobile and web via Prisma ORM and MySQL."
                technologies={["React Native", "Node", "Express", "MySQL", "Prisma ORM"]}
                organization="Aasa Technology"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-[768px] mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-200/50 dark:border-indigo-800/50 p-10">
            <SectionHeading>Get in touch</SectionHeading>
            <p className="text-base text-muted-foreground mb-6 max-w-[480px]">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 border-0"
            >
              <Link href="mailto:code.us.cm@gmail.com">Send me an email</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="h-px bg-gradient-to-r from-indigo-600 to-cyan-500 mb-6" />
        <div className="max-w-[768px] mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Chandan Kumar Maurya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
