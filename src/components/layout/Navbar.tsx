"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { getTelUrl } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-bg/95 dark:bg-darkSurface-bg/95 backdrop-blur-md shadow-sm border-b border-warm dark:border-darkSurface-border py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive rounded-lg"
              aria-label="Sri Lakshmi Construction - Return to homepage"
            >
              {/* Logo Emblem Icon */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-olive flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 9.5V11H4V20H9V14H15V20H20V11H22V9.5L12 2ZM12 4.5L18 9H6L12 4.5Z" />
                </svg>
              </div>

              {/* Company Wordmark */}
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg sm:text-xl text-warm-primary dark:text-darkSurface-text leading-tight group-hover:text-olive dark:group-hover:text-olive-300 transition-colors">
                  Sri Lakshmi
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-olive dark:text-olive-400 uppercase">
                  Construction
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-warm-card/80 dark:bg-darkSurface-card/80 border border-warm/80 dark:border-darkSurface-border/80 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-card">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-olive text-white shadow-sm"
                        : "text-warm-secondary dark:text-darkSurface-muted hover:text-warm-primary dark:hover:text-darkSurface-text hover:bg-warm-bg dark:hover:bg-darkSurface-cardElevated"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions: Call CTA & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />

              <a
                href={getTelUrl("6380772718")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-bold shadow-soft hover:shadow-hover transition-all duration-200 active:scale-95"
                title="Call 6380772718"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Book by Call:</span>
                <span>6380772718</span>
              </a>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card text-warm-primary dark:text-darkSurface-text hover:border-olive transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
