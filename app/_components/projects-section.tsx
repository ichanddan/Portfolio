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
              title="BlinkGo"
              description="Developed the main customer-facing mobile application and shopkeeper management application using React Native and Expo. Engineered a comprehensive Admin CRM dashboard using Next.js for platform oversight, inventory management, and analytics. Built the robust backend using Next.js Route Handlers integrated with Drizzle ORM and PostgreSQL. Implemented authentication, cart workflows, and real-time inventory management across the ecosystem."
              technologies={["Next.js", "PostgreSQL", "PostGIS", "Drizzle ORM", "React Native (via Expo)", "Tailwind CSS"]}
            />
          </TabsContent>

          <TabsContent value="organizational" className="space-y-6">
            <ProjectCard
              index={0}
              title="Imeld AI"
              description="Enterprise AI platform integrating Azure OpenAI, Google Gemini, and Anam.ai with a real-time WebSocket backend and a Python/FastAPI service layer. Joined as Frontend Developer and transitioned to Full Stack ownership — responsible for UI, backend APIs, and PostgreSQL data architecture."
              link="https://www.imeld.ai/"
              technologies={["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "WebSocket", "Azure OpenAI", "Google Gemini", "Anam.ai"]}
              organization="Aiqwip Technology Pvt. Ltd."
            />
            <ProjectCard
              index={1}
              title="School Spares"
              description="Full-stack e-commerce platform with secure JWT authentication, RESTful APIs, and role-based access control for admin and customer workflows. Optimized MongoDB queries reduced average API response time by ~35%."
              technologies={["React", "Node", "Express", "MongoDB", "Ant Design", "Prisma ORM"]}
              organization="Aasa Technology"
            />
            <ProjectCard
              index={2}
              title="ShamRock India"
              description="Lead-generation admin dashboard with modular, component-based widgets, drag-and-drop layouts, and real-time notifications via WebSocket for live data streams and operational visibility."
              link="https://keyshell.net/"
              technologies={["React", "Node", "Express", "MySQL", "Ant Design", "WebSocket", "Prisma ORM"]}
              organization="Aasa Technology"
            />
            <ProjectCard
              index={3}
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
