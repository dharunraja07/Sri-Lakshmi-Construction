import { Compass, PenTool, FileCheck, Hammer, Key } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Site Visit & Feasibility",
    description:
      "We inspect your plot dimensions, soil type, road approach, and Vastu orientation across Pudukkottai, Karaikudi, or Trichy, taking down your family's exact vision.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "2D Plans & 3D Elevations",
    description:
      "Our architects draft Vastu-compliant functional floor plans and photorealistic 3D exterior renders so you visualize your finished home before building.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Sanction & Approvals",
    description:
      "We prepare all blueprints, submit documentation to municipal corporations or town planning bodies, and secure 100% legal building permits.",
  },
  {
    step: "04",
    icon: Hammer,
    title: "Milestone-Driven Civil Execution",
    description:
      "Construction begins with tested TMT steel, branded cement, and daily engineer supervision. Payments are tied only to completed structural stages.",
  },
  {
    step: "05",
    icon: Key,
    title: "Finishing & Auspicious Handover",
    description:
      "From Italian tiling and modular woodwork to deep sanitization, we deliver your dream home on your chosen auspicious Grihapravesam date.",
  },
];

export function Process() {
  return (
    <section className="py-16 sm:py-24 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
            Transparent Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted">
            A structured, 5-stage turnkey process designed to give your family absolute clarity and zero stress at every milestone.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/60 transition-all duration-300 flex flex-col justify-between group shadow-card"
              >
                <div>
                  {/* Top step badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-olive/30 dark:text-olive/50 group-hover:text-olive transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-warm-primary dark:text-darkSurface-text mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-warm/60 dark:border-darkSurface-border/60 text-[11px] font-semibold text-olive dark:text-olive-400">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
