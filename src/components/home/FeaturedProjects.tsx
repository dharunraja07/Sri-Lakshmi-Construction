import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-warm-card dark:bg-darkSurface-card border-y border-warm dark:border-darkSurface-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-olive dark:text-olive-400">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text">
              Featured Residential Projects
            </h2>
            <p className="text-base text-warm-secondary dark:text-darkSurface-muted">
              Explore recently completed and ongoing homes across Pudukkottai, Karaikudi, and Trichy.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-warm dark:border-darkSurface-border bg-warm-bg dark:bg-darkSurface-cardElevated text-sm font-bold text-warm-primary dark:text-darkSurface-text hover:border-olive hover:text-olive transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl overflow-hidden bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/60 transition-all duration-300 shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-card dark:bg-darkSurface-card">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm ${
                        project.category === "finished"
                          ? "bg-olive/90 text-white"
                          : "bg-amber-600/90 text-white"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {project.category === "finished" ? "Finished Project" : "In Progress"}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-olive-300" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-warm-muted dark:text-darkSurface-muted mb-2 font-medium">
                    <span>{project.projectType}</span>
                    <span>•</span>
                    <span>{project.builtUpArea}</span>
                  </div>

                  <h3 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text mb-3 group-hover:text-olive dark:group-hover:text-olive-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-warm-secondary dark:text-darkSurface-muted line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-bold text-warm-primary dark:text-darkSurface-text hover:bg-olive hover:text-white hover:border-olive transition-all duration-200"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
