import Link from "next/link";
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICES } from "@/data/services";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-card dark:bg-darkSurface-card border-t border-warm dark:border-darkSurface-border transition-colors">
      {/* Top Banner / Trust bar */}
      <div className="border-b border-warm dark:border-darkSurface-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                  13 Years of Experience
                </p>
                <p className="text-xs text-warm-muted dark:text-darkSurface-muted">
                  60+ Completed Homes across Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-300 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                  3 Regional Hubs
                </p>
                <p className="text-xs text-warm-muted dark:text-darkSurface-muted">
                  Pudukkottai • Karaikudi • Trichy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-300 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                  10:00 AM – 9:00 PM
                </p>
                <p className="text-xs text-warm-muted dark:text-darkSurface-muted">
                  7 Days a Week Consultation Availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Philosophy (2 spans on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-olive flex items-center justify-center text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 9.5V11H4V20H9V14H15V20H20V11H22V9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-warm-primary dark:text-darkSurface-text">
                Sri Lakshmi Construction
              </span>
            </Link>

            <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed max-w-sm">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <div className="pt-2 space-y-2 text-sm text-warm-secondary dark:text-darkSurface-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-olive shrink-0" />
                <a
                  href={getTelUrl(COMPANY_INFO.phone)}
                  className="hover:text-olive dark:hover:text-olive-300 font-semibold"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-olive shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-olive dark:hover:text-olive-300"
                >
                  WhatsApp: +91 63807 72718
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span>Pudukkottai (HQ) | Karaikudi | Trichy, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <p className="font-bold text-sm tracking-wider uppercase text-warm-primary dark:text-darkSurface-text">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  About Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  Contact &amp; Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Services */}
          <div className="space-y-4">
            <p className="font-bold text-sm tracking-wider uppercase text-warm-primary dark:text-darkSurface-text">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-olive dark:text-olive-400 font-semibold text-xs hover:underline pt-1"
                >
                  <span>View all 7 services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Locations */}
          <div className="space-y-4">
            <p className="font-bold text-sm tracking-wider uppercase text-warm-primary dark:text-darkSurface-text">
              Locations
            </p>
            <ul className="space-y-2.5 text-sm text-warm-secondary dark:text-darkSurface-muted">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  <strong className="block text-warm-primary dark:text-darkSurface-text font-semibold">
                    Pudukkottai
                  </strong>
                  <span className="text-xs">Santhai Rd, Alangudi Rd, Nizam Colony</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  <strong className="block text-warm-primary dark:text-darkSurface-text font-semibold">
                    Karaikudi
                  </strong>
                  <span className="text-xs">Sekkalai, College Rd, Kalanivasal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-olive dark:hover:text-olive-300 transition-colors"
                >
                  <strong className="block text-warm-primary dark:text-darkSurface-text font-semibold">
                    Trichy
                  </strong>
                  <span className="text-xs">KK Nagar, Thillai Nagar, Crawford</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-warm dark:border-darkSurface-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-muted dark:text-darkSurface-muted">
          <p>
            &copy; {currentYear} Sri Lakshmi Construction. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-warm-primary dark:hover:text-darkSurface-text transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-warm-primary dark:hover:text-darkSurface-text transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-warm-primary dark:hover:text-darkSurface-text transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
