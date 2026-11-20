import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Sri Lakshmi Construction",
  description:
    "Privacy Policy for Sri Lakshmi Construction. Understand how we collect, handle, and protect your personal information, architectural sketches, and plot records.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
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
            <ShieldCheck className="w-4 h-4" />
            <span>Legal &amp; Privacy Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-warm-primary dark:text-darkSurface-text">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted">
            Last Updated: November 2026
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-card space-y-8 text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry on our website, contact us via WhatsApp, or speak with our engineers, we collect details necessary to assess your construction requirements. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contact details: Name, phone number, and email address.</li>
              <li>Project details: Plot location (Pudukkottai, Karaikudi, Trichy, or adjacent areas), plot dimensions, project category, and estimated budget.</li>
              <li>Optional documents: Survey drawings, Patta copies, or architectural references shared by you.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal information is used strictly for legitimate construction consultation and service delivery purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Conducting initial site inspections and feasibility studies.</li>
              <li>Drafting architectural floor plans, 3D exterior elevations, and itemized Bill of Quantities (BOQ).</li>
              <li>Liaising with municipal corporations, town planning authorities, and DTCP for building plan sanctions.</li>
              <li>Communicating milestone progress, site photographs, and invoicing.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              3. Protection &amp; Confidentiality
            </h2>
            <p>
              Sri Lakshmi Construction maintains strict confidentiality regarding our clients&apos; property boundaries, financial arrangements, and personal contact details. We do not sell, lease, or monetize your contact information with external marketing agencies or material brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              4. Cookies and Analytics
            </h2>
            <p>
              Our website uses basic functional session cookies and privacy-respecting analytics to gauge website performance, assess mobile responsiveness, and understand which architectural services interest visitors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about how your information is stored or wish to update your records, please reach out to us at{" "}
              <a href="mailto:enquiry@srilakshmiconstruction.in" className="text-olive font-semibold hover:underline">
                enquiry@srilakshmiconstruction.in
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+916380772718" className="text-olive font-semibold hover:underline">
                +91 63807 72718
              </a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
