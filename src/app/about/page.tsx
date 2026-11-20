import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Clock,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { TEAM_MEMBERS } from "@/data/team";
import { getTelUrl } from "@/lib/utils";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Building Trust for 13 Years | About Sri Lakshmi Construction",
  description:
    "Learn about Sri Lakshmi Construction: 13+ years of building excellence, 60+ houses completed across Pudukkottai, Karaikudi, and Trichy. Meet our civil engineers and architects.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-semibold text-olive dark:text-olive-400">
            <span>Established 2011 • Turnkey Civil Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
            Building Trust for 13 Years
          </h1>

          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            Founded on the principle that every home is the sacred anchor of a family&apos;s future, Sri Lakshmi Construction brings disciplined engineering, uncompromised material integrity, and transparent execution to central Tamil Nadu.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-8 sm:p-12 shadow-card text-center">
          <div className="space-y-2 py-4 border-b md:border-b-0 md:border-r border-warm dark:border-darkSurface-border">
            <p className="text-4xl sm:text-5xl font-black text-olive dark:text-olive-400">
              13+ Years
            </p>
            <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
              of Building Experience
            </p>
            <p className="text-xs text-warm-muted dark:text-darkSurface-muted max-w-xs mx-auto">
              Continuous on-ground civil construction and engineering leadership.
            </p>
          </div>

          <div className="space-y-2 py-4 border-b md:border-b-0 md:border-r border-warm dark:border-darkSurface-border">
            <p className="text-4xl sm:text-5xl font-black text-olive dark:text-olive-400">
              60+ Houses
            </p>
            <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
              Completed &amp; Handed Over
            </p>
            <p className="text-xs text-warm-muted dark:text-darkSurface-muted max-w-xs mx-auto">
              From independent residences and villas to commercial centers.
            </p>
          </div>

          <div className="space-y-2 py-4">
            <p className="text-4xl sm:text-5xl font-black text-olive dark:text-olive-400">
              3 Cities
            </p>
            <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
              Served with Local Teams
            </p>
            <p className="text-xs text-warm-muted dark:text-darkSurface-muted max-w-xs mx-auto">
              Pudukkottai, Karaikudi, and Trichy metropolitan areas.
            </p>
          </div>
        </div>

        {/* Company Introduction Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
              Our Journey
            </span>

            <h2 className="text-3xl font-extrabold text-warm-primary dark:text-darkSurface-text">
              From Humble Foundations to 60+ Family Sanctuaries
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
              <p>
                Sri Lakshmi Construction began over 13 years ago in Pudukkottai with a simple observation: families investing their life savings into homebuilding were constantly frustrated by hidden cost escalations, non-sanctioned plan risks, and lack of professional site supervision.
              </p>
              <p>
                We established a single-point turnkey model. Our qualified civil engineers and in-house architects take complete ownership—from initial plot soil testing and Vastu-aligned architectural layouts to municipal corporation liaison and flawless interior finishing.
              </p>
              <p>
                Today, our operations span Pudukkottai, Karaikudi, and Trichy. Whether building a modern 4 BHK duplex or restoring a heritage-inspired Chettinad villa, we treat each client&apos;s home as if it were our own family&apos;s residence.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={getTelUrl(COMPANY_INFO.phone)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-bold shadow-soft transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Consult Our Founder directly: 6380772718</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-xl">
              <Image
                src="/images/projects/hero-house.webp"
                alt="Sri Lakshmi Construction Architectural Project"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest font-bold text-olive-300">
                  Built to Last Generations
                </p>
                <p className="text-base sm:text-lg font-bold mt-1">
                  &ldquo;A home is the biggest promise a family makes. We build it with the same care we would want for our own.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              Our Mission
            </h3>
            <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
              To deliver turnkey construction that eliminates stress for homeowners by ensuring strict structural compliance, transparent pricing with zero escalations, and timely handover.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              Our Vision
            </h3>
            <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
              To be recognized across central Tamil Nadu as the most trusted, dependable, and family-centric civil construction company, synonymous with uncompromising quality and honesty.
            </p>
          </div>

          {/* Values */}
          <div className="p-8 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              Our Values
            </h3>
            <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
              Uncompromising integrity, open-book material accountability, deep empathy for our client families, and respect for Vastu and local architectural heritage.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
              The People Behind the Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-warm-primary dark:text-darkSurface-text">
              Our Leadership &amp; Engineering Team
            </h2>
            <p className="text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted">
              Dedicated civil engineers, licensed architects, and statutory liaison professionals guiding your build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-warm-bg dark:bg-darkSurface-cardElevated overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-base text-warm-primary dark:text-darkSurface-text">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-olive dark:text-olive-400">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-warm-muted dark:text-darkSurface-muted">
                      {member.experience}
                    </p>
                    <p className="text-xs text-warm-secondary dark:text-darkSurface-muted pt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Locations Hub */}
        <div className="space-y-8 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-8 sm:p-12 shadow-card">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
              Regional Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-primary dark:text-darkSurface-text">
              Where We Build: 3 Cities in Central Tamil Nadu
            </h2>
            <p className="text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted">
              Active engineering teams and local municipal familiarity across Pudukkottai, Karaikudi, and Trichy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {COMPANY_INFO.cities.map((city) => (
              <div
                key={city.name}
                className="p-6 rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border space-y-3"
              >
                <div className="flex items-center gap-2 text-olive dark:text-olive-400 font-bold text-lg">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>{city.name}</span>
                </div>
                <p className="text-xs text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                  {city.description}
                </p>
                <div className="pt-2 border-t border-warm dark:border-darkSurface-border">
                  <p className="text-[11px] font-bold text-warm-muted dark:text-darkSurface-muted mb-1.5 uppercase tracking-wider">
                    Key Areas:
                  </p>
                  <p className="text-xs text-warm-primary dark:text-darkSurface-text font-medium">
                    {city.areas.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
