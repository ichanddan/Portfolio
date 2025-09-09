import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Front-End Design",
    skills: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
        { name: "TypeScript", logo: "/logos/typescript.svg" },
    ],
  },
  // {
  //   name: "AI Integration",
  //   skills: [
  //     { name: "Soul Machines", logo: "/logos/sm_logo_grey.png" },
  //     { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg" },
  //     { name: "Langchain", logo: "/logos/langchain-logo.svg" },
  //     { name: "Open AI", logo: "/logos/OpenAI_Logo.svg" },
  //   ],
  // },
  {
    name: "Back-End",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/express.svg" },
      // { name: "Python", logo: "/logos/python.svg" },
      // { name: "Django", logo: "/logos/django.svg" },
        // { name: "TypeScript", logo: "/logos/typescript.svg" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "Firestore", logo: "/logos/firebase.svg" },
    ],
  },
  {
    name: "Application Development",
    skills: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "React Native", logo: "/logos/react.svg" },
      { name: "Expo", logo: "/logos/expo.svg" },
    ],
  },
  {
    name: "UI Library",
    skills: [
      { name: "shadcn/ui", logo: "/logos/shadcn.svg" },
      { name: "Ant Design", logo: "/logos/antd.svg" },
      { name: "NextUI", logo: "/logos/nextui.svg" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-2">
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    width={24}
                    height={24}
                  />
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
