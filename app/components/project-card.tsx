"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  technologies: string[]
  organization?: string
}

const techLogos: { [key: string]: string } = {
  TypeScript: "/logos/typescript.svg",
  "Next.js": "/logos/nextjs.svg",
  MongoDB: "/logos/mongodb.svg",
  Tailwind: "/logos/tailwind.svg",
  Vercel: "/logos/vercel.svg",
  React: "/logos/react.svg",
  "API Integration": "/logos/api.svg",
  Python: "/logos/python.svg",
  Django: "/logos/django.svg",
  OpenAI: "/logos/OpenAI_Logo.svg",
  Langchain: "/logos/langchain-logo.svg",
  "Prisma ORM": "/logos/prisma.svg",
  PostgreSQL: "/logos/postgresql.svg",
  "React Native": "/logos/react.svg",
  "Node": "/logos/nodejs.svg",
  "Express": "/logos/express.svg",
  "Sequelize ORM": "/logos/sequelize.svg",
}

export default function ProjectCard({ title, description, link, technologies, organization }: ProjectCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="group hover:shadow-lg transition-all duration-300">
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
          <p className="text-muted-foreground mb-4">{description}</p>

          {organization && (
            <p className="text-sm font-medium mb-4">
              <span className="text-primary">Organization:</span> {organization}
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
                      src={techLogos[tech] || "/placeholder.svg"}
                      alt={tech}
                      width={16}
                      height={16}
                      className="dark:invert-[.25]"
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
  )
}

