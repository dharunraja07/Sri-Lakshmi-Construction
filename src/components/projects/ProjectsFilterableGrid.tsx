"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, Clock, Building } from "lucide-react";
import { Project } from "@/lib/types";

interface Props {
  initialProjects: Project[];
}

export function ProjectsFilterableGrid({ initialProjects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchCategory =
        selectedCategory === "all" ? true : p.category === selectedCategory;
      const matchLocation =
        selectedLocation === "all" ? true : p.location.toLowerCase() === selectedLocation.toLowerCase();
      return matchCategory && matchLocation;
    });
  }, [initialProjects, selectedCategory, selectedLocation]);

  return (
    <div className="space-y-10">
      {/* Category & Location Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border">
        
        {/* Category Tabs: All / Finished / In Progress */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-olive text-white shadow-sm"
                : "text-warm-secondary dark:text-darkSurface-muted hover:text-warm-primary hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated"
            }`}
          >
            All Projects ({initialProjects.length})
          </button>
          
          <button
            type="button"
            onClick={() => setSelectedCategory("finished")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              selectedCategory === "finished"
                ? "bg-olive text-white shadow-sm"
                : "text-warm-secondary dark:text-darkSurface-muted hover:text-warm-primary hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated"
            }`}
          >
            Finished Projects ({initialProjects.filter((p) => p.category === "finished").length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("in-progress")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              selectedCategory === "in-progress"
                ? "bg-olive text-white shadow-sm"
                : "text-warm-secondary dark:text-darkSurface-muted hover:text-warm-primary hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated"
            }`}
          >
            In Progress ({initialProjects.filter((p) => p.category === "in-progress").length})
          </button>
        </div>

        {/* Location Dropdown / Pills */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-semibold">
          <span className="text-warm-muted dark:text-darkSurface-muted hidden md:inline">Location:</span>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-2 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border text-warm-primary dark:text-darkSurface-text font-bold text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
            aria-label="Filter projects by city"
          >
            <option value="all">All Cities (Pudukkottai, Karaikudi, Trichy)</option>
            <option value="pudukkottai">Pudukkottai</option>
            <option value="karaikudi">Karaikudi</option>
            <option value="trichy">Trichy</option>
          </select>
        </div>

      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-warm-card dark:bg-darkSurface-card rounded-2xl border border-warm dark:border-darkSurface-border p-8">
          <Building className="w-12 h-12 text-olive/40 mx-auto mb-3" />
          <p className="text-lg font-bold text-warm-primary dark:text-darkSurface-text">
            No projects found in this category
          </p>
          <p className="text-xs sm:text-sm text-warm-muted dark:text-darkSurface-muted mt-1">
            Try resetting your filters to view all our completed and ongoing construction projects.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedLocation("all");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-olive text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl overflow-hidden bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border hover:border-olive dark:hover:border-olive/60 transition-all duration-300 shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-bg dark:bg-darkSurface-cardElevated">
                  <Image
                    src={project.mainImage}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm ${
                        project.category === "finished"
                          ? "bg-olive/95 text-white"
                          : "bg-amber-600/95 text-white"
                      }`}
                    >
                      {project.category === "finished" ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {project.category === "finished" ? "Finished" : "In Progress"}
                      </span>
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
                  <div className="flex items-center gap-2 text-xs text-warm-muted dark:text-darkSurface-muted mb-2 font-medium">
                    <span>{project.projectType}</span>
                    <span>•</span>
                    <span>{project.builtUpArea}</span>
                    {project.bedrooms && (
                      <>
                        <span>•</span>
                        <span>{project.bedrooms}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text mb-2.5 group-hover:text-olive dark:group-hover:text-olive-300 transition-colors line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-sm text-warm-secondary dark:text-darkSurface-muted line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-1">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border text-xs sm:text-sm font-bold text-warm-primary dark:text-darkSurface-text hover:bg-olive hover:text-white hover:border-olive transition-all duration-200"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
