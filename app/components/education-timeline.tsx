import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationTimeline() {
  const education = [
    {
      school: "Manipal University Jaipur",
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Software and Media Applications",
      period: "2023 - 2025",
      description: [
        "Specialized in advanced software development and system design",
        "Completed projects in web development and database management",
      ],
    },
    {
      school: "National Institute of Electronics & Information Technology",
      degree: "O Level",
      field: "Computer Software and Media Applications",
      period: "2022 - 2023",
      description: [
        "Gained strong foundation in software development and system design concepts",
        "Completed academic and practical projects in web development",
        "Consistently maintained excellent academic performance during O Level program",
      ],
    },
    {
      school: "Mahatma Gandhi Kashi Vidyapeeth",
      degree: "Bachelor's degree",
      field: "Computer Science",
      period: "July 2018 - July 2021",
      description: [
        "Focused on core computer science fundamentals",
        "Developed strong problem-solving and analytical skills",
        "Completed various programming projects",
        "Active member of the computer science society",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{edu.school}</CardTitle>
            <p className="text-lg font-semibold text-primary">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.field}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mb-2">{edu.period}</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {edu.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

