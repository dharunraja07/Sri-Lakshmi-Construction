import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-warm-bg dark:bg-darkSurface-bg transition-colors relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-olive/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-bold text-olive dark:text-olive-300 shadow-soft">
          <ShieldCheck className="w-4 h-4" />
          <span>Serving Pudukkottai • Karaikudi • Trichy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight max-w-3xl mx-auto">
          Ready to Build Your Family Home with Complete Confidence?
        </h2>

        <p className="text-base sm:text-xl text-warm-secondary dark:text-darkSurface-muted max-w-2xl mx-auto leading-relaxed">
          Speak directly with our senior civil engineer today. We provide upfront architectural guidance, Vastu insights, and transparent itemized estimates.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getTelUrl(COMPANY_INFO.phone)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-base font-bold shadow-soft hover:shadow-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>

          <a
            href={getWhatsAppUrl("Hello Sri Lakshmi Construction, I would like to schedule an initial consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-bold shadow-soft hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us Now</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card text-warm-primary dark:text-darkSurface-text hover:border-olive text-base font-bold transition-colors"
          >
            <span>Online Enquiry Form</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Operational hours note */}
        <p className="text-xs text-warm-muted dark:text-darkSurface-muted pt-2">
          Available 10:00 AM – 9:00 PM • Monday through Sunday
        </p>

      </div>
    </section>
  );
}
