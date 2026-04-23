"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { navItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.01
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 18);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-ink/10 px-3 transition duration-300 sm:px-4",
          isScrolled
            ? "bg-white/88 py-2 shadow-soft backdrop-blur-xl"
            : "bg-white/72 py-3 shadow-sm backdrop-blur-xl"
        )}
      >
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-black text-white transition group-hover:bg-aqua">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black text-ink">{siteConfig.name}</span>
            <span className="block text-xs font-semibold text-graphite">
              {siteConfig.shortTitle}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.sectionId ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold text-graphite transition hover:bg-white/80 hover:text-ink",
                activeSection === item.sectionId && "bg-aqua/10 text-aqua shadow-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={siteConfig.cvPath} variant="secondary" size="sm" download>
            Download CV
          </ButtonLink>
          <ButtonLink href="#contact" size="sm">
            Contact
          </ButtonLink>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 bg-white text-ink lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-x-3 top-[76px] z-40 max-h-[calc(100dvh-92px)] overflow-y-auto rounded-lg border border-ink/10 bg-white p-4 shadow-premium sm:inset-x-6 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={activeSection === item.sectionId ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-semibold text-graphite transition",
                    activeSection === item.sectionId && "bg-mist text-aqua"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <ButtonLink
                href={siteConfig.cvPath}
                variant="secondary"
                download
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </ButtonLink>
              <ButtonLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact Me
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
