import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms and Conditions | Sri Lakshmi Construction",
  description:
    "Terms and Conditions governing architectural consulting, construction estimation, and turnkey civil contracts with Sri Lakshmi Construction.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms and Conditions", url: "/terms" },
  ]);

  return (
    <div className="py-12 sm:py-20 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-warm-secondary dark:text-darkSurface-muted hover:text-olive transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs font-semibold text-olive">
            <Scale className="w-4 h-4" />
            <span>Service Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-warm-primary dark:text-darkSurface-text">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted">
            Last Updated: November 2026
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-8 text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              1. Scope of Online Information
            </h2>
            <p>
              The materials, project photographs, 3D renderings, and specifications on this website are provided for informational and preliminary planning purposes. Specific engineering contracts, architectural drawings, and pricing schedules are formally executed through customized written agreements signed by both parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              2. Architectural &amp; Engineering Consultation
            </h2>
            <p>
              Initial site reviews and layout discussions provide preliminary feasibility. Formal structural drawings and municipal sanction submissions require verified title documents (Patta, Chitta, FMB sketch, and parent documents) and formal engagement with our engineering firm.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              3. Fixed-Cost Agreements &amp; Scope Changes
            </h2>
            <p>
              Sri Lakshmi Construction operates with transparent, itemized Bill of Quantities (BOQ). Our project cost remains locked for the agreed specifications. Any architectural modifications, material upgrades (e.g. custom imported flooring or sanitary fittings), or structural additions requested by the client during ongoing construction are documented and approved via written change orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              4. Statutory Approvals &amp; Government Liaison
            </h2>
            <p>
              While we prepare compliant drawings and manage municipal submissions in Pudukkottai, Karaikudi, and Trichy, official government sanction timelines remain subject to local municipal council review and statutory scrutiny fees established by the Government of Tamil Nadu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              5. Intellectual Property
            </h2>
            <p>
              All architectural renderings, photographic portfolio records, brand trademarks, and editorial copy on this site are the intellectual property of Sri Lakshmi Construction. Unauthorized duplication, reproduction, or use of our designs without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              Any disputes arising from construction contracts or website usage shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Pudukkottai, Tamil Nadu.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
