"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Download } from "lucide-react"

const RESUME_PATH = "/resume.pdf"
const RESUME_FILE_NAME = "Dr-Hafiz-Ahmad-Khalid-Resume.pdf"

function handleResumeClick() {
  window.open(RESUME_PATH, "_blank", "noopener,noreferrer")

  const downloadLink = document.createElement("a")
  downloadLink.href = RESUME_PATH
  downloadLink.download = RESUME_FILE_NAME
  downloadLink.rel = "noopener noreferrer"
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-accent font-medium mb-2"> Anesthesia Specialist</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Dr. Hafiz Ahmad Khalid
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Treating patients, guiding students, and professionals in medicine and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <button type="button" onClick={handleResumeClick}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </button>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <a href="mailto:ahmad4557154@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                ahmad4557154@gmail.com
              </a>
              <a href="tel:+923200497931" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +92 320 0497931
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src="/images/dr-khalid-portrait.jpg"
                  alt="Dr. Hafiz Ahmad Khalid - Anesthesia Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
