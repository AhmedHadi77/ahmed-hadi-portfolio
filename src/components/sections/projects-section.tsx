"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, MonitorCheck } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

function hasLiveUrl(url: string) {
  return url.startsWith("http");
}

function formatLiveUrl(url: string) {
  if (!hasLiveUrl(url)) {
    return "Live URL available on request";
  }

  try {
    const parsed = new URL(url);
    return `${parsed.hostname}${parsed.pathname === "/" ? "" : parsed.pathname}`;
  } catch {
    return url;
  }
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-band section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Case-study projects that show architecture, execution, and real product judgement."
            description="These projects highlight connected systems, realtime interfaces, API-driven workflows, responsive frontend delivery, and the ability to ship complete products."
            align="center"
            className="text-center"
          />
        </Reveal>

        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <motion.article
                className="group grid overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition duration-300 hover:border-aqua/35 hover:shadow-premium lg:grid-cols-[0.48fr_0.52fr]"
                whileHover={{ y: -3 }}
              >
                <div className="relative min-h-[300px] overflow-hidden bg-mist p-4 sm:min-h-[360px] sm:p-6">
                  <div className="relative h-full min-h-[290px] overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
                    <div className="flex h-10 items-center gap-2 border-b border-ink/10 bg-white px-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                      <span className="h-2.5 w-2.5 rounded-full bg-aqua" />
                      <span className="ml-3 truncate text-xs font-black uppercase text-graphite">
                        Case study {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="relative h-[280px] overflow-hidden sm:h-[310px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-flex rounded-lg bg-white/90 px-3 py-2 text-sm font-black text-ink backdrop-blur">
                          {project.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8 lg:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-lg bg-aqua/10 px-3 py-1.5 text-sm font-black uppercase text-aqua">
                      {project.eyebrow}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-mist px-3 py-1.5 text-sm font-bold text-graphite">
                      <MonitorCheck size={16} />
                      {hasLiveUrl(project.links.live) ? "Live URL" : "Private build"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-ink sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Chip key={tag} className="bg-mist text-sm">
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  <div className="mt-5 rounded-lg border border-aqua/20 bg-aqua/10 px-4 py-3 shadow-sm">
                    <p className="text-xs font-black uppercase text-aqua">Project URL</p>
                    <p className="mt-1 break-all text-sm font-black text-ink">
                      {formatLiveUrl(project.links.live)}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      ["Role", project.role],
                      ["Architecture", project.architecture],
                      ["Outcome", project.outcome]
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-ink/10 bg-mist/80 px-4 py-3"
                      >
                        <p className="text-xs font-black uppercase text-aqua">{label}</p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-graphite">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex min-h-[42px] items-center gap-3 text-sm font-semibold text-graphite"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-aqua" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <ButtonLink href={project.links.live} size="sm">
                      {hasLiveUrl(project.links.live) ? "Open Live Project" : "Request Access"}
                      <ArrowUpRight size={16} />
                    </ButtonLink>
                    <ButtonLink href={project.links.github} variant="secondary" size="sm">
                      GitHub
                      <Github size={16} />
                    </ButtonLink>
                    <ButtonLink href={project.links.caseStudy} variant="ghost" size="sm">
                      Case Study
                      <FileText size={16} />
                    </ButtonLink>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
