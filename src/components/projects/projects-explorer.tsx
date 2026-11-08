"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { MobileApp, Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { AppShowcase } from "./app-showcase";
import { ProjectCard } from "./project-card";

type Filter = "all" | "apps" | "web";

type ProjectsExplorerProps = {
  apps: MobileApp[];
  projects: Project[];
  qrCodes: Record<string, string | null>;
};

export function ProjectsExplorer({ apps, projects, qrCodes }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");

  // Links like #apps or #app-kerjaflex should always land on a visible app.
  useEffect(() => {
    const sync = () => {
      if (/^#app/.test(window.location.hash)) setFilter((f) => (f === "web" ? "all" : f));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All work", count: apps.length + projects.length },
    { id: "apps", label: "Android apps", count: apps.length },
    { id: "web", label: "Web & IoT platforms", count: projects.length }
  ];

  const showApps = filter !== "web";
  const showWeb = filter !== "apps";

  return (
    <section id="projects" className="section-padding relative bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Products I designed, built and shipped."
            description="Two Android apps you can install right now, plus the IoT and web platforms behind my engineering work."
          />

          <LayoutGroup id="project-filter">
            <div
              role="tablist"
              aria-label="Filter projects"
              className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:self-start sm:rounded-full sm:border sm:border-ink/10 sm:bg-white sm:p-1 sm:px-1 lg:shrink-0 lg:self-end"
            >
              {filters.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                      active ? "text-white" : "text-graphite hover:text-ink"
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative">
                      {item.label}
                      <span className={cn("ml-1.5 tabular-nums", active ? "text-white/60" : "text-graphite/60")}>
                        {item.count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <div id="apps" className="scroll-mt-28" />
        <AnimatePresence mode="popLayout" initial={false}>
          {showApps ? (
            <motion.div
              key="apps"
              layout
              className="mt-12 grid gap-8 sm:mt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {apps.map((app, index) => (
                <AppShowcase key={app.slug} app={app} index={index} qrSvg={qrCodes[app.slug] ?? null} />
              ))}
            </motion.div>
          ) : null}

          {showWeb ? (
            <motion.div
              key="web"
              layout
              className="mt-12 sm:mt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {filter === "all" ? (
                <h3 className="mb-6 font-display text-2xl font-semibold text-ink">Web & IoT platforms</h3>
              ) : null}
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className={cn(index === 0 && projects.length % 2 === 1 && "md:col-span-2")}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard project={project} featured={index === 0 && projects.length % 2 === 1} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
