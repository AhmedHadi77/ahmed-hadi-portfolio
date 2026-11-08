"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function WideGallery({ project, className }: { project: Project; className?: string }) {
  const images = project.gallery?.length ? project.gallery : [project.image];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), 3200);
    return () => window.clearInterval(id);
  }, [inView, images.length]);

  return (
    <div ref={ref} className={cn("relative aspect-[1600/820] overflow-hidden bg-navy-800", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={images[active]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images[active]}
            alt={`${project.title} screenshot ${active + 1}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-navy-900/60 px-2 py-1.5 backdrop-blur">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === active ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function PhoneGallery({ project }: { project: Project }) {
  const images = (project.gallery ?? [project.image]).slice(0, 2);
  return (
    <div className="relative flex aspect-[1600/820] items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900 px-6">
      <div className="absolute inset-0 engineered-grid-dark" />
      {images.map((image, i) => (
        <div
          key={image}
          className={cn(
            "relative h-[118%] aspect-[9/19.5] overflow-hidden rounded-[1.4rem] border-[5px] border-[#05090E] shadow-premium transition-transform duration-700 ease-out",
            i === 0 ? "translate-y-[8%] group-hover:translate-y-[4%]" : "translate-y-[16%] group-hover:translate-y-[10%]"
          )}
        >
          <Image src={image} alt={`${project.title} screen ${i + 1}`} fill sizes="200px" className="object-cover object-top" />
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const live = project.links.live;
  const github = project.links.github;

  return (
    <SpotlightCard tilt={2} className="group h-full rounded-[28px]">
      <article
        className={cn(
          "relative z-[2] flex h-full flex-col overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-soft transition-shadow duration-500 group-hover:shadow-premium",
          featured && "lg:grid lg:grid-cols-[1.35fr_1fr]"
        )}
      >
        <div className={cn(featured && "lg:flex lg:flex-col lg:border-r lg:border-ink/8")}>
        {/* Browser chrome */}
        <div className="flex h-9 items-center gap-1.5 border-b border-ink/8 bg-mist px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-aqua/70" />
          <span className="ml-3 truncate rounded-full bg-white px-3 py-0.5 text-[11px] text-graphite">
            {live ? hostOf(live) : "Private build"}
          </span>
        </div>

        {project.imageMode === "phone" ? <PhoneGallery project={project} /> : <WideGallery project={project} className={featured ? "lg:aspect-auto lg:flex-1" : undefined} />}
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-8", featured && "lg:justify-center lg:p-10")}>
          <p className="text-sm font-medium text-[#00796E]">{project.eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-graphite">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Chip key={tag} className="bg-mist">
                {tag}
              </Chip>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 self-start text-sm font-medium text-ink underline decoration-aqua/40 decoration-2 underline-offset-4 transition-colors hover:decoration-aqua"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide project details" : "Show role, architecture and outcome"}
          </button>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.dl
                className="grid gap-4 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {[
                  ["My role", project.role],
                  ["Architecture", project.architecture],
                  ["Outcome", project.outcome]
                ].map(([label, value], i) => (
                  <div key={label} className={cn("border-l-2 border-aqua/40 pl-4", i === 0 && "mt-4")}>
                    <dt className="text-sm font-semibold text-ink">{label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-graphite">{value}</dd>
                  </div>
                ))}
              </motion.dl>
            ) : null}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            {live ? (
              <ButtonLink href={live} size="sm" variant="dark">
                Open live project
                <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </ButtonLink>
            ) : (
              <ButtonLink href="#contact" size="sm" variant="dark">
                Ask for a demo
                <MessageCircle size={16} />
              </ButtonLink>
            )}
            {github ? (
              <ButtonLink href={github} size="sm" variant="secondary">
                <Github size={16} />
                Source code
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
