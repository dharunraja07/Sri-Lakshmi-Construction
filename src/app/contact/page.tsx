import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Building,
  Navigation,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get in Touch With Us | Contact Sri Lakshmi Construction",
  description:
    "Contact Sri Lakshmi Construction in Pudukkottai, Karaikudi, and Trichy. Phone: 6380772718. Working hours: 10 AM to 9 PM. Book a free plot inspection and architectural consultation.",
  alternates: {
    canonical: "/contact",
  },
};

interface Props {
  searchParams?: Promise<{ service?: string; project?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const resolvedParams = searchParams ? await searchParams : {};
  const initialService = resolvedParams.service || "";
  const initialProject = resolvedParams.project || "";

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="py-12 sm:py-20 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-semibold text-olive dark:text-olive-400">
            <span>Direct Engineering Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
            Get in Touch With Us
          </h1>

          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            Planning a new house, villa, commercial building, or renovation? Speak directly with our chief civil engineer or send your project specifications below.
          </p>
        </div>

        {/* Top 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-warm-primary dark:text-darkSurface-text">
              Direct Phone Call
            </h2>
            <p className="text-xs text-warm-secondary dark:text-darkSurface-muted">
              Speak directly with our senior engineer for immediate project inquiries.
            </p>
            <a
              href={getTelUrl(COMPANY_INFO.phone)}
              className="inline-block text-base sm:text-lg font-black text-olive dark:text-olive-400 hover:underline pt-1"
            >
              {COMPANY_INFO.phoneFormatted}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-warm-primary dark:text-darkSurface-text">
              WhatsApp Chat
            </h2>
            <p className="text-xs text-warm-secondary dark:text-darkSurface-muted">
              Share plot sketches, layout plans, or site photos for instant feasibility review.
            </p>
            <a
              href={getWhatsAppUrl("Hello Sri Lakshmi Construction, I would like to enquire about a construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base sm:text-lg font-black text-[#25D366] hover:underline pt-1"
            >
              +91 63807 72718
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="p-6 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-warm-primary dark:text-darkSurface-text">
              Working Hours
            </h2>
            <p className="text-xs text-warm-secondary dark:text-darkSurface-muted">
              Available 7 days a week for family discussions and on-site visits.
            </p>
            <p className="text-base sm:text-lg font-black text-warm-primary dark:text-darkSurface-text pt-1">
              10:00 AM – 9:00 PM
            </p>
          </div>

        </div>

        {/* Main Grid: Form (7 cols) + Locations & Offices (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-96 rounded-3xl bg-warm-card animate-pulse" />}>
              <ContactForm
                initialProjectType={initialService || (initialProject ? "New House Construction" : "")}
                initialMessage={initialProject ? `Hi, I am interested in building a home similar to your project: ${initialProject}.` : ""}
              />
            </Suspense>
          </div>

          {/* Office & Service Areas */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-6 sm:p-8 shadow-card space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-olive dark:text-olive-400">
                  Office Location
                </span>
                <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
                  Our Office in Tamil Nadu
                </h3>
              </div>

              {/* Pudukkottai (HQ) */}
              <div className="p-5 rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-olive text-white text-[10px] font-bold">
                    Main Office
                  </span>
                  <h4 className="font-bold text-base text-warm-primary dark:text-darkSurface-text">
                    Pudukkottai
                  </h4>
                </div>
                <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                  Santhai Road, Near Municipal Office, Pudukkottai – 622001, Tamil Nadu
                </p>
                <div className="pt-2 border-t border-warm dark:border-darkSurface-border text-xs text-warm-muted dark:text-darkSurface-muted space-y-1">
                  <p><strong className="text-warm-primary dark:text-darkSurface-text">Direct Contact:</strong> +91 63807 72718</p>
                  <p><strong className="text-warm-primary dark:text-darkSurface-text">Consultation Hours:</strong> 10:00 AM – 9:00 PM (Mon – Sun)</p>
                </div>
              </div>

              {/* Project Execution Notice */}
              <div className="p-5 rounded-2xl bg-olive/10 border border-olive/30 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-olive dark:text-olive-400">
                  Projects in Karaikudi &amp; Trichy
                </h4>
                <p className="text-xs text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                  Our single engineering office is located in Pudukkottai. We regularly execute turnkey construction and provide direct on-site supervision for homes and villas across <strong>Karaikudi</strong> and <strong>Trichy</strong> without the overhead of branch offices.
                </p>
              </div>

              <div className="pt-1 text-xs text-warm-muted dark:text-darkSurface-muted flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-olive shrink-0" />
                <span>On-site plot inspections available within 24 hours.</span>
              </div>
            </div>

            {/* Google Maps Integration / Embed */}
            <div className="rounded-3xl overflow-hidden bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                  <Navigation className="w-4 h-4 text-olive" />
                  <span>Google Maps Coverage Area</span>
                </div>
                <span className="text-xs text-olive font-semibold">Central Tamil Nadu</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border">
                {/* Clean Embedded Google Map for Pudukkottai Region */}
                <iframe
                  title="Sri Lakshmi Construction Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125434.7226500599!2d78.75082155000001!3d10.3833075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00676451e360f7%3A0x633513a0279c67bc!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] contrast-105"
                />
              </div>

              <p className="text-[11px] text-warm-muted dark:text-darkSurface-muted text-center">
                We also visit sites in contiguous districts: Sivagangai, Thanjavur, and Madurai border regions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
