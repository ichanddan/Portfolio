import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "./section-heading";
import WorkTimeline from "./work-timeline";
import EducationTimeline from "./education-timeline";

export default function ExperienceSection() {
  return (
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
  );
}
