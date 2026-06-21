import { GraduationCap, Stethoscope, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"


// This component represents the "About Me" section of a personal or professional website. It provides information about Dr. Hafiz Ahmad Khalid, highlighting his background, experience, and expertise in the field of Anesthesia. The section is structured with a heading, descriptive paragraphs, and a grid layout that includes cards showcasing his education, current role, and areas of expertise. The design uses Tailwind CSS classes for styling and layout.
export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am Dr. Hafiz Ahmad Khalid, a dedicated Anesthesialogist with extensive experience 
              in clinical practice and academic medicine. My journey in medicine has been driven by a 
              passion for patient care and a commitment to nurturing the next generation of medical 
              professionals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With years of hands-on experience in operating rooms across prestigious hospitals in Lahore, 
              I have developed expertise in airway management, regional anesthesia, trauma stabilization, 
              and perioperative care. My academic pursuits complement my clinical work, allowing me to 
              contribute to medical research and mentor aspiring doctors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in a holistic approach to medicine—one that combines technical excellence with 
              compassionate patient care and continuous learning.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Education</h3>
                    <p className="text-muted-foreground">Graduate from University of Lahore</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Specialization in Anesthesiology</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Current Role</h3>
                    <p className="text-muted-foreground">Doctor of Anesthesia</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Academic teaching & clinical practice</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expertise</h3>
                    <p className="text-muted-foreground">Anesthesia & Critical Care</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Airway management, regional anesthesia, trauma care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
