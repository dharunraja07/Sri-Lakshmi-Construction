import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-olive/5 dark:bg-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Region / Experience Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-semibold text-olive dark:text-olive-300 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <span>Pudukkottai • Karaikudi • Trichy</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-[1.12]">
              Your family home, designed, approved and built by{" "}
              <span className="text-olive dark:text-olive-400 underline decoration-olive/30 decoration-wavy underline-offset-8">
                one team
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-warm-secondary dark:text-darkSurface-muted leading-relaxed max-w-2xl font-normal">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getTelUrl(COMPANY_INFO.phone)}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-base font-bold shadow-soft hover:shadow-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Book an appointment by call</span>
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card text-warm-primary dark:text-darkSurface-text hover:border-olive text-base font-semibold transition-colors duration-200"
              >
                <span>View Our Completed Houses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-warm dark:border-darkSurface-border grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-olive dark:text-olive-400">
                  13 Years
                </p>
                <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted mt-0.5">
                  of building experience
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-olive dark:text-olive-400">
                  60+
                </p>
                <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted mt-0.5">
                  houses completed
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-olive dark:text-olive-400">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted mt-0.5">
                  sanctioned approvals
                </p>
              </div>
            </div>

          </div>

          {/* Right Architectural Photograph Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative backdrop border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-olive/20 to-transparent blur-sm pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-warm dark:border-darkSurface-border shadow-2xl bg-warm-card dark:bg-darkSurface-card aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/projects/hero-house.webp"
                  alt="Modern independent villa designed and constructed by Sri Lakshmi Construction"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-warm-card/95 dark:bg-darkSurface-card/95 backdrop-blur-md border border-warm/80 dark:border-darkSurface-border/80 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-warm-primary dark:text-darkSurface-text">
                      Turnkey Villa &amp; Residential Projects
                    </p>
                    <p className="text-warm-muted dark:text-darkSurface-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-olive" />
                      Pudukkottai • Karaikudi • Trichy
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-olive/15 dark:bg-olive/25 text-olive dark:text-olive-300 font-bold shrink-0">
                    IS-456 Certified
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
