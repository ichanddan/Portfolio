"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "./section-heading";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
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
              link="https://www.nutrivalue.in/"
              technologies={["React Native", "Node", "Express", "MySQL", "Prisma ORM"]}
              organization="Aasa Technology"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
