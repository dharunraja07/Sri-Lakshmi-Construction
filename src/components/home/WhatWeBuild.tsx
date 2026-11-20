import Link from "next/link";
import {
  Home,
  Building2,
  Building,
  Hammer,
  PenTool,
  FileCheck,
  Globe,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Building,
  Hammer,
  PenTool,
  FileCheck,
  Globe,
};

export function WhatWeBuild() {
  return (
    <section className="py-16 sm:py-24 bg-warm-card dark:bg-darkSurface-card border-y border-warm dark:border-darkSurface-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
            End-to-End Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted">
            From the first blueprint pencil stroke to the Grihapravesam key handover, we manage every structural, municipal, and finishing stage.
          </p>
        </div>

        {/* Services Grid with Clean Minimalist Icons */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Home;

            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/60 transition-all duration-300 hover:shadow-hover flex flex-col justify-between"
              >
                <div>
                  {/* Clean Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-olive dark:text-olive-400 flex items-center justify-center mb-5 group-hover:bg-olive group-hover:text-white transition-colors duration-200 shadow-card">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text mb-3 group-hover:text-olive dark:group-hover:text-olive-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Learn more anchor */}
                <div className="pt-6 mt-6 border-t border-warm dark:border-darkSurface-border">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-olive dark:text-olive-400 group-hover:gap-3 transition-all"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all services footer link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-warm dark:border-darkSurface-border bg-warm-bg dark:bg-darkSurface-cardElevated text-sm font-bold text-warm-primary dark:text-darkSurface-text hover:border-olive transition-colors"
          >
            <span>Compare all 7 construction services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
