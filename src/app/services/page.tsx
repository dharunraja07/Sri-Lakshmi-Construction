import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  Building,
  Hammer,
  PenTool,
  FileCheck,
  Globe,
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Complete Construction Solutions Under One Roof | Sri Lakshmi Construction",
  description:
    "Explore our complete turnkey construction services in Pudukkottai, Karaikudi, and Trichy: New Houses, Villas, Commercial Buildings, Renovations, Architectural 3D Design, Plan Approvals, and NRI Construction.",
  alternates: {
    canonical: "/services",
  },
};

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Building,
  Hammer,
  PenTool,
  FileCheck,
  Globe,
};

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="py-12 sm:py-20 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbs),
          }}
        />
      </head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-semibold text-olive dark:text-olive-400">
            <span>Turnkey Engineering &amp; Architectural Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
            Complete Construction Solutions Under One Roof
          </h1>

          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            Sri Lakshmi Construction handles everything from land feasibility, municipal blue-print sanctions, and Vastu architectural designs to turnkey civil construction and luxury interior delivery across Pudukkottai, Karaikudi, and Trichy.
          </p>
        </div>

        {/* Services List with Detailed Cards & Architectural Images */}
        <div className="space-y-16 sm:space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Home;
            const isEven = index % 2 === 1;

            return (
              <section
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-6 sm:p-10 lg:p-12 shadow-card"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border shadow-md group">
                      <Image
                        src={service.image}
                        alt={`${service.title} by Sri Lakshmi Construction`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-olive text-white inline-block mb-1">
                          Service #{index + 1}
                        </span>
                        <p className="text-sm font-bold truncate">{service.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-olive dark:text-olive-400">
                          {service.suitableFor}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-primary dark:text-darkSurface-text">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Full Description */}
                    <p className="text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text">
                        Key Inclusions &amp; Specifications:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted"
                          >
                            <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-warm dark:border-darkSurface-border">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-bold shadow-soft transition-colors"
                      >
                        <span>Enquire for {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={getWhatsAppUrl(`Hello, I would like to enquire about your ${service.title} service.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-bg dark:bg-darkSurface-cardElevated hover:border-olive text-warm-primary dark:text-darkSurface-text text-xs sm:text-sm font-bold transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-[#25D366]" />
                        <span>WhatsApp Enquiry</span>
                      </a>

                      <a
                        href={getTelUrl(COMPANY_INFO.phone)}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-warm-secondary dark:text-darkSurface-muted hover:text-olive transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Direct Call</span>
                      </a>
                    </div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-warm-primary dark:text-darkSurface-text">
            Need a Custom Architecture or Commercial Estimate?
          </h3>
          <p className="text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted max-w-2xl mx-auto">
            Our chief engineer will review your plot layout, verify local bylaws in Pudukkottai, Karaikudi, or Trichy, and provide a comprehensive itemized cost plan.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-bold shadow-soft transition-colors"
            >
              <span>Book an Engineering Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
