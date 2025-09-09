import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Ditinex",
      role: "Generative AI Engineer",
      period: "November 2024 - Present",
      description: [
        "Developed and maintained AI-powered applications using Django for the backend and React for the frontend",
        "Integrated generative AI models to enhance product capabilities, improving user engagement by 30%",
        "Collaborated with cross-functional teams to build scalable AI-driven solutions",
      ],
    },
    {
      company: "Aasa Technology",
      role: "Full Stack Developer",
      period: "March 2024 - November 2024",
      description: [
        "Lead developer on multiple end-to-end projects using MERN stack",
        "Improved system performance and response times by 40%",
        "Implemented advanced state management solutions using Redux and Context API",
      ],
    },
    {
      company: "Ditinex",
      role: "Associate Software Engineer",
      period: "June 2023 - November 2023",
      description: [
        "Developed and maintained software solutions using the MERN stack",
        "Redesigned the company's flagship product, resulting in a 30% increase in user engagement",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span>{exp.company}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-base font-normal">{exp.role}</span>
              <span className="text-sm text-muted-foreground ml-auto">{exp.period}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

