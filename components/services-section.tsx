import { Stethoscope, GraduationCap, HelpCircle, BookOpen, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultancy",
    description: "Expert consultation on anesthesia-related matters, perioperative care, and pain management strategies for patients and healthcare providers.",
    features: ["Pre-operative assessment", "Anesthesia planning", "Pain management advice"],
  },
  {
    icon: GraduationCap,
    title: "Education & Career Guidance",
    description: "Mentorship and guidance for medical students and young doctors pursuing careers in anesthesiology and related specialties.",
    features: ["Career counseling", "Residency guidance", "Skill development"],
  },
  {
    icon: HelpCircle,
    title: "Medical Profession Questions",
    description: "Addressing queries related to the medical profession, clinical practices, and healthcare system navigation.",
    features: ["Clinical queries", "Professional guidance", "Healthcare insights"],
  },
  {
    icon: BookOpen,
    title: "Research & Thesis Support",
    description: "Comprehensive support for research projects, thesis writing, and academic publications in medical sciences.",
    features: ["Research methodology", "Thesis supervision", "Publication guidance"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offering professional services to patients, students, and medical professionals seeking guidance and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Interested in my services?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact me to discuss your needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
