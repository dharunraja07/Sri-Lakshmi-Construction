import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Layers,
  Home,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.location} | Sri Lakshmi Construction`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - ${project.location}`,
      description: project.shortDescription,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [
        {
          url: project.mainImage,
          width: 1280,
          height: 800,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects in same location or category, excluding current
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.location === project.location || p.category === project.category)
  ).slice(0, 2);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  return (
    <div className="py-10 sm:py-16 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbs),
          }}
        />
      </head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-warm-secondary dark:text-darkSurface-muted hover:text-olive dark:hover:text-olive-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                project.category === "finished"
                  ? "bg-olive text-white"
                  : "bg-amber-600 text-white"
              }`}
            >
              {project.category === "finished" ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              )}
              <span>{project.category === "finished" ? "Finished Project" : "In Progress"}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border text-xs font-bold text-warm-primary dark:text-darkSurface-text">
              <MapPin className="w-3.5 h-3.5 text-olive" />
              <span>{project.addressSnippet}</span>
            </span>

            <span className="text-xs font-semibold text-warm-muted dark:text-darkSurface-muted">
              {project.projectType} • {project.builtUpArea}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-warm-primary dark:text-darkSurface-text leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-warm-secondary dark:text-darkSurface-muted max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Photograph */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border shadow-xl">
          <Image
            src={project.mainImage}
            alt={`${project.title} - Principal Elevation`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        {/* Two-Column Details & Specs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Description & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-8 shadow-card space-y-5">
              <h2 className="text-2xl font-bold text-warm-primary dark:text-darkSurface-text">
                Project Overview &amp; Execution
              </h2>

              <div className="space-y-4 text-warm-secondary dark:text-darkSurface-muted leading-relaxed text-sm sm:text-base">
                {project.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-warm dark:border-darkSurface-border space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text">
                  Key Architectural &amp; Engineering Features:
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Project Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text">
                  Additional Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border group shadow-sm"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Gallery Photo ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Project Specifications Table & Enquiry CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            
            {/* Specifications Card */}
            <div className="rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-6 sm:p-8 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-warm-primary dark:text-darkSurface-text border-b border-warm dark:border-darkSurface-border pb-4">
                Technical Specifications
              </h2>

              <dl className="space-y-3.5 text-xs sm:text-sm divide-y divide-warm/40 dark:divide-darkSurface-border/40">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="flex justify-between items-start pt-3 first:pt-0 gap-4">
                    <dt className="text-warm-muted dark:text-darkSurface-muted font-medium shrink-0">
                      {spec.label}
                    </dt>
                    <dd className="font-bold text-warm-primary dark:text-darkSurface-text text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Project Enquiry Box */}
            <div className="rounded-3xl bg-warm-bg dark:bg-darkSurface-cardElevated border border-warm dark:border-darkSurface-border p-6 sm:p-8 shadow-card space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-olive dark:text-olive-400">
                Inspired by this project?
              </span>
              <h3 className="text-lg font-bold text-warm-primary dark:text-darkSurface-text">
                Build a Similar Residence with Sri Lakshmi Construction
              </h3>
              <p className="text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
                We can adapt this layout or craft a bespoke architectural design matching your plot dimensions in Pudukkottai, Karaikudi, or Trichy.
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href={getTelUrl(COMPANY_INFO.phone)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-bold shadow-soft transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>

                <a
                  href={getWhatsAppUrl(`Hello, I was viewing your project '${project.title}' (${project.location}) and would like to build a similar home.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card hover:border-olive text-warm-primary dark:text-darkSurface-text text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="block text-center text-xs font-bold text-olive dark:text-olive-400 hover:underline pt-1"
                >
                  Or fill out the online enquiry form &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="pt-16 border-t border-warm dark:border-darkSurface-border space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-olive dark:text-olive-400">
                  More Works
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-primary dark:text-darkSurface-text mt-1">
                  Related Construction Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs sm:text-sm font-bold text-olive hover:underline flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <div
                  key={rel.slug}
                  className="group rounded-2xl overflow-hidden bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border hover:border-olive transition-all duration-300 shadow-card flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] bg-warm-bg dark:bg-darkSurface-cardElevated overflow-hidden">
                    <Image
                      src={rel.mainImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-md">
                      {rel.location}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-warm-primary dark:text-darkSurface-text group-hover:text-olive transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <Link
                      href={`/projects/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-olive dark:text-olive-400 hover:gap-2 transition-all pt-1"
                    >
                      <span>Explore this project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
