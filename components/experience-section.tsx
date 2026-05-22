import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Aug 2025 – Present",
    title: "Anesthesiologist",
    hospitals: [
      {
        name: "Sir Ganga Ram Hospital, Lahore",
        department: "General Surgery & Gynae Department",
      },
      {
        name: "Mayo Hospital, Lahore",
        department: "Emergency Department",
      },
    ],
    responsibilities: [
      "Providing comprehensive anesthesia care",
      "Emergency airway management",
      "Critical patient stabilization",
      "Perioperative monitoring",
    ],
  },
  {
    period: "July 2025 – Sep 2025",
    title: "Anesthesia Resident",
    hospitals: [
      {
        name: "University of Lahore Teaching Hospital",
        department: "General Surgery & Orthopedics Department",
      },
    ],
    responsibilities: [
      "Airway management and intubation/extubation",
      "Spinal anesthesia administration",
      "Anesthesia machine preparation and calibration",
      "Sterile techniques implementation",
      "Vital sign documentation and monitoring",
      "Rapid induction procedures",
      "Trauma case stabilization",
    ],
  },
  {
    period: "April 2025 – June 2025",
    title: "Medical Trainee",
    hospitals: [
      {
        name: "Clinical Training Program",
        department: "Various Departments",
      },
    ],
    responsibilities: [
      "Foundation clinical training",
      "Patient assessment skills",
      "Medical documentation",
      "Team collaboration",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 hidden md:block ring-4 ring-background" />

                {/* Content */}
                <Card className={`${index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"} border-t-4 border-t-primary`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {exp.hospitals.map((hospital, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-accent mt-1 shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">{hospital.name}</p>
                            <p className="text-sm text-muted-foreground">{hospital.department}</p>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-2">Key Responsibilities:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.responsibilities.map((resp, rIndex) => (
                            <Badge key={rIndex} variant="secondary" className="text-xs">
                              {resp}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
