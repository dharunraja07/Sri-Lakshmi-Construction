import { Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
            Real Homeowner Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text">
            What Families Say About Our Work
          </h2>
          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted">
            Hear from families across Pudukkottai, Karaikudi, and Trichy who entrusted their home construction to our engineering team.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/50 transition-all duration-300 shadow-card flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-olive/40 dark:text-olive/50 mb-4" />
                <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-warm dark:border-darkSurface-border">
                <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                  {test.clientName}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-olive dark:text-olive-400 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{test.location}</span>
                </div>
                <p className="text-[11px] text-warm-muted dark:text-darkSurface-muted mt-0.5">
                  {test.projectTitle} • Handed Over {test.completionYear}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
