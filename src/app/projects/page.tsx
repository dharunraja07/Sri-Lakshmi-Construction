import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectsFilterableGrid } from "@/components/projects/ProjectsFilterableGrid";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Construction Projects | Houses, Villas & Commercial Buildings",
  description:
    "Explore Sri Lakshmi Construction's portfolio of finished and ongoing residential houses, luxury villas, duplex homes, and commercial buildings across Pudukkottai, Karaikudi, and Trichy.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-semibold text-olive dark:text-olive-400">
            <span>Portfolio of Completed &amp; Ongoing Works</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
            Our Construction Projects
          </h1>

          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            Every residence reflects our commitment to structural permanence, Vastu harmony, and meticulous finishing across Pudukkottai, Karaikudi, and Trichy.
          </p>
        </div>

        {/* Filterable Project Grid Component */}
        <ProjectsFilterableGrid initialProjects={PROJECTS} />

      </div>
    </div>
  );
}
