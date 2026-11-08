"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { navItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 480 && !isOpen);
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-2 py-2 pl-3 transition-[background-color,border-color,box-shadow] duration-500",
          scrolled
            ? "border-white/10 bg-navy-800/85 shadow-premium backdrop-blur-xl"
            : "border-white/10 bg-navy-800/40 backdrop-blur-md"
        )}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name}, back to top`}
          onClick={() => setIsOpen(false)}
        >
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-aqua font-display text-sm font-bold text-white transition-transform duration-500 group-hover:rotate-[360deg]">
            {siteConfig.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold text-white sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = activeSection === item.sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-ink" : "text-white/70 hover:text-white"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={siteConfig.cvPath} variant="outline-light" size="sm" download>
            <Download size={15} />
            CV
          </ButtonLink>
          <ButtonLink href="#contact" size="sm">
            Hire me
          </ButtonLink>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white lg:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-3 top-[72px] z-40 max-h-[calc(100dvh-88px)] overflow-y-auto rounded-3xl border border-white/10 bg-navy-800/95 p-3 shadow-premium backdrop-blur-xl sm:inset-x-6 lg:hidden"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index + 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3 font-display text-xl font-semibold transition-colors",
                      activeSection === item.sectionId
                        ? "bg-white text-ink"
                        : "text-white/80 hover:bg-white/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <ButtonLink
                href={siteConfig.cvPath}
                variant="outline-light"
                download
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Download CV
              </ButtonLink>
              <ButtonLink href="#contact" onClick={() => setIsOpen(false)}>
                Hire me
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
