"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  organization?: string;
  index?: number;
}

const techLogos: { [key: string]: string } = {
  TypeScript: "/logos/typescript.svg",
  "Next.js": "/logos/nextjs.svg",
  MongoDB: "/logos/mongodb.svg",
  Tailwind: "/logos/tailwind.svg",
  Vercel: "/logos/vercel.svg",
  React: "/logos/react.svg",
  "React Native": "/logos/react.svg",
  Node: "/logos/nodejs.svg",
  Express: "/logos/express.svg",
  "Prisma ORM": "/logos/prisma.svg",
  "Sequelize ORM": "/logos/sequelize.svg",
  PostgreSQL: "/logos/postgresql.svg",
  MySQL: "/logos/mysql.svg",
  "Ant Design": "/logos/antd.svg",
  "shadcn/ui": "/logos/shadcn.svg",
  "Shadcn UI": "/logos/shadcn.svg",
  WebSocket: "/logos/javascript.svg",
  Python: "/logos/python.svg",
  Django: "/logos/django.svg",
  OpenAI: "/logos/OpenAI_Logo.svg",
  Langchain: "/logos/langchain-logo.svg",
  "API Integration": "/logos/api.svg",
};

export default function ProjectCard({
  title,
  description,
  link,
  technologies,
  organization,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            {link && (
              <Link href={link} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

          {organization && (
            <p className="text-sm font-medium mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {organization}
              </span>
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Badge variant="secondary" className="flex items-center gap-1">
                  {techLogos[tech] && (
                    <Image
                      src={techLogos[tech]}
                      alt={tech}
                      width={14}
                      height={14}
                      className="dark:invert-[.25] shrink-0"
                    />
                  )}
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
