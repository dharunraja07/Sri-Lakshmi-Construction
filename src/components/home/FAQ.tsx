"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { getFAQSchema } from "@/lib/seo";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const faqSchema = getFAQSchema();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-warm-card dark:bg-darkSurface-card border-y border-warm dark:border-darkSurface-border transition-colors">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
            Clear Answers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted">
            Important details about construction timelines, approvals, structural warranties, and NRI project management.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-warm-primary dark:text-darkSurface-text hover:text-olive dark:hover:text-olive-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-olive shrink-0 opacity-80" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-olive shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-warm-secondary dark:text-darkSurface-muted leading-relaxed border-t border-warm/40 dark:border-darkSurface-border/40 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
