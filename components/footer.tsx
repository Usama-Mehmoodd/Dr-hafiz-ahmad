import Link from "next/link"
import { Mail, Phone, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Hafiz Ahmad Khalid</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Professor of Anesthesia dedicated to excellence in patient care, 
              medical education, and advancing the field of anesthesiology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ahmad4557154@gmail.com"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  ahmad4557154@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923200497931"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +92 320 0497931
                </a>
              </li>
              <li>
                <a
                  href="tel:+92421403280"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +92 42 1403280
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            &copy; {currentYear} Dr. Hafiz Ahmad Khalid. All rights reserved.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
