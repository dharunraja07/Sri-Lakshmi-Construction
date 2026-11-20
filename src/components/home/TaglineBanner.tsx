import { COMPANY_INFO } from "@/data/company";

export function TaglineBanner() {
  return (
    <section className="py-16 sm:py-20 bg-warm-bg dark:bg-darkSurface-bg transition-colors relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle decorative quotation mark */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-300 mb-6">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-snug sm:leading-tight">
          &ldquo;{COMPANY_INFO.tagline}&rdquo;
        </blockquote>

        <p className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
          — The Sri Lakshmi Construction Promise
        </p>
      </div>
    </section>
  );
}
