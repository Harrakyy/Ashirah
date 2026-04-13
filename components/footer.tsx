import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  company: [
    { name: "About", href: "/#about" },
    { name: "Team", href: "/#team" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Company Profile", href: "/#holdings" },
  ],
  products: [
    { name: "Custom Jersey", href: "/apparel#products" },
    { name: "Varsity Jackets", href: "/apparel#products" },
    { name: "Work Jackets", href: "/apparel#products" },
    { name: "Corporate Uniforms", href: "/apparel#products" },
  ],
  partnership: [
    { name: "Join Our Marketer", href: "/join-marketer" },
    { name: "Bulk Orders", href: "/order" },
    { name: "Event Partnership", href: "/order" },
    { name: "Reseller Program", href: "/join-marketer" },
  ],
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function LinktreeIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.511 5.853l4.005-4.004 2.122 2.122-4.005 4.004h5.834v3H16.51l4.005 4.003-2.122 2.122-5.127-5.126-5.126 5.126-2.122-2.122 4.004-4.003H4.87v-3h5.834L6.699 3.971l2.122-2.122 4.005 4.004V0h3v5.853zm-3 7.147h3v11h-3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1c2143] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/ashira-corporate-logo.png"
              alt="ASHIRA GROUP"
              width={150}
              height={50}
              className="mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              PT. ASHIRA NIAGA INDONESIA - Premium quality custom apparel vendor specializing in
              jerseys, t-shirts, varsity jackets, work jackets, and corporate uniforms.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:ashira.hco@ashira.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                ashira.hco@ashira.com
              </a>
              <a
                href="https://wa.me/6281944455006"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Contact Our Marketing
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/nu7iuEk42Wg8XoVE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Grand Batavia Arcade, Tangerang, Indonesia
                </a>
              </div>
              <a
                href="https://linkedin.com/company/ashiragroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <span className="text-[#D4AF37]">
                  <LinkedInIcon />
                </span>
                linkedin.com/company/ashiragroup
              </a>
              <a
                href="https://linktr.ee/ashirahgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <span className="text-[#D4AF37]">
                  <LinktreeIcon />
                </span>
                linktr.ee/ashirahgroup
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-sm tracking-[0.1em] uppercase mb-4 text-[#D4AF37]">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-[0.1em] uppercase mb-4 text-[#D4AF37]">
              Products
            </h4>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-[0.1em] uppercase mb-4 text-[#D4AF37]">
              Partnership
            </h4>
            <ul className="space-y-3">
              {navigation.partnership.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} PT. ASHIRA NIAGA INDONESIA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}