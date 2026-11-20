"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-warm-card dark:bg-darkSurface-card border-l border-warm dark:border-darkSurface-border shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-warm dark:border-darkSurface-border">
            <span className="font-bold text-lg tracking-tight text-warm-primary dark:text-darkSurface-text">
              Sri Lakshmi <span className="text-olive">Construction</span>
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-warm-primary dark:text-darkSurface-text hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-olive text-white shadow-sm"
                      : "text-warm-primary dark:text-darkSurface-text hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-warm-muted dark:text-darkSurface-muted"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info & CTAs */}
        <div className="pt-6 border-t border-warm dark:border-darkSurface-border space-y-4">
          <div className="text-xs text-warm-muted dark:text-darkSurface-muted space-y-1">
            <p className="font-medium text-warm-primary dark:text-darkSurface-text">Pudukkottai • Karaikudi • Trichy</p>
            <p>Mon – Sun: 10:00 AM – 9:00 PM</p>
          </div>

          <a
            href={getTelUrl("6380772718")}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-olive hover:bg-olive-hover text-white font-semibold text-sm shadow-sm transition-colors text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call 6380772718</span>
          </a>

          <a
            href={getWhatsAppUrl("Hello Sri Lakshmi Construction, I would like to enquire from the mobile website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-warm dark:border-darkSurface-border text-warm-primary dark:text-darkSurface-text hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated text-sm font-semibold transition-colors text-center"
          >
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
