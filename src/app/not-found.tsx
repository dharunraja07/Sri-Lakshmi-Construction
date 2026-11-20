import Link from "next/link";
import { ArrowLeft, Home, Phone, Building } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getTelUrl } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-warm-bg dark:bg-darkSurface-bg transition-colors">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Architectural Icon */}
        <div className="w-16 h-16 rounded-2xl bg-olive/10 dark:bg-olive/20 text-olive dark:text-olive-400 mx-auto flex items-center justify-center">
          <Building className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-olive dark:text-olive-400">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-warm-primary dark:text-darkSurface-text">
            Page Not Found
          </h1>
          <p className="text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            The page you are looking for may have been moved or does not exist. Let us guide you back to our active projects or homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-bold shadow-soft transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card text-warm-primary dark:text-darkSurface-text hover:border-olive text-xs sm:text-sm font-bold transition-colors"
          >
            <span>View Projects</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-warm dark:border-darkSurface-border text-xs text-warm-muted dark:text-darkSurface-muted">
          <span>Need help? Call us directly: </span>
          <a
            href={getTelUrl(COMPANY_INFO.phone)}
            className="text-olive dark:text-olive-400 font-bold hover:underline"
          >
            {COMPANY_INFO.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
