
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/drhafizkhalid",
    },
    {
      name: "X",
      icon: FaXTwitter,
      href: "https://x.com/drhafizkhalid",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/drhafizkhalid",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/923200497931",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/drhafizkhalid",
    },
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Dr. Hafiz Ahmad Khalid
            </h3>

            <p className="text-background/70 leading-relaxed text-sm">
              Anesthesiologist dedicated to excellence in patient care,
              medical education, and advancing the field of
              Anesthesiology. Committed to patient safety,
              compassionate care, evidence-based practice,
              and continuous professional development while
              contributing to clinical research and the training
              of future healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-background/70
                      hover:text-background
                      transition-colors
                      duration-300
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:ahmad4557154@gmail.com"
                className="
                  flex items-center gap-3
                  text-background/70
                  hover:text-background
                  transition-colors
                "
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  ahmad4557154@gmail.com
                </span>
              </a>

              <a
                href="tel:+923200497931"
                className="
                  flex items-center gap-3
                  text-background/70
                  hover:text-background
                  transition-colors
                "
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">
                  +92 320 0497931
                </span>
              </a>

              <a
                href="tel:+92421403280"
                className="
                  flex items-center gap-3
                  text-background/70
                  hover:text-background
                  transition-colors
                "
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">
                  +92 42 1403280
                </span>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Follow Me
              </h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="
                        group
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-full
                        border
                        border-background/20
                        bg-background/5
                        text-background/70
                        hover:text-background
                        hover:border-background/50
                        hover:bg-background/10
                        hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  )
                })}
              </div>

              <p className="mt-4 text-xs text-background/50 leading-relaxed">
                Follow for healthcare insights, medical education,
                professional updates, and academic contributions
                in the field of Anesthesiology.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {currentYear} Dr. Hafiz Ahmad Khalid.
              All rights reserved.
            </p>

            <p className="text-xs text-background/40 text-center md:text-right">
              Designed with precision, compassion, and commitment
              to healthcare excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

