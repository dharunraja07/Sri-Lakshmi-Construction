import { CheckCircle2, ShieldCheck, Scale, Award, Users, HardHat } from "lucide-react";
import Link from "next/link";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "13 Years of Unbroken Trust",
    description:
      "Since 2011, over 60 families have trusted us to build their permanent homes across Pudukkottai, Karaikudi, and Trichy.",
  },
  {
    icon: Scale,
    title: "Zero Hidden Escalation Guarantee",
    description:
      "Detailed itemized Bill of Quantities (BOQ) with clearly specified brands. What we estimate is what you pay—no midway surprise bills.",
  },
  {
    icon: HardHat,
    title: "IS-Compliant Civil Engineering",
    description:
      "Tata Tiscon 550D TMT steel, Ramco/UltraTech 53-grade cement, and mandatory 28-day concrete cube compressive strength test audits.",
  },
  {
    icon: Award,
    title: "100% Legal & Municipal Compliance",
    description:
      "Mastery of local town planning, Pudukkottai/Trichy Corporation bylaws, and DTCP norms to ensure your building permit is 100% legitimate.",
  },
  {
    icon: Users,
    title: "Dedicated Single Point Coordinator",
    description:
      "You don't chase separate mason contractors, electricians, or plumbers. Our resident civil engineer manages the site and updates you weekly.",
  },
  {
    icon: CheckCircle2,
    title: "10-Year Structural Handover Warranty",
    description:
      "We stand by our construction. Enjoy a 10-year warranty on foundation & RCC structural integrity, plus a 1-year snagging support guarantee.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-warm-card dark:bg-darkSurface-card border-y border-warm dark:border-darkSurface-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
              The Family Advantage
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
              Why Families Choose Sri Lakshmi Construction
            </h2>

            <p className="text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
              Constructing a home is often the single largest financial and emotional commitment in a family&apos;s lifetime. We eliminate the uncertainty, cost overruns, and quality compromises common with unorganized contractors.
            </p>

            <div className="p-6 rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border space-y-4">
              <p className="font-bold text-sm text-warm-primary dark:text-darkSurface-text">
                Planning a new build in Pudukkottai, Karaikudi, or Trichy?
              </p>
              <p className="text-xs text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                Schedule a preliminary site review and layout discussion with our chief engineer.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-olive dark:text-olive-400 hover:underline"
              >
                <span>Request Free Site Inspection</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-warm-primary dark:text-darkSurface-text mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
