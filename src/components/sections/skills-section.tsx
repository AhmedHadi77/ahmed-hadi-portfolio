"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];
  const ActiveIcon = activeCategory.icon;
  const averageScore = useMemo(() => {
    const total = activeCategory.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / activeCategory.skills.length);
  }, [activeCategory]);
  const topSkills = activeCategory.skills.slice(0, 4);

  return (
    <section id="skills" className="section-band section-padding bg-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A stack built around telemetry, dashboards, APIs, and scalable product architecture."
            description="Each layer supports the same goal: reliable data flow from devices and services into fast, understandable applications."
            align="center"
            className="text-center"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal>
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:grid lg:overflow-visible lg:pb-0">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={category.title}
                    type="button"
                    className={cn(
                      "interactive-surface group flex min-h-[92px] min-w-[248px] items-center gap-4 rounded-lg p-4 text-left lg:min-w-0",
                      isActive ? "border-aqua/45" : "border-ink/10"
                    )}
                    onClick={() => setActiveIndex(index)}
                    style={isActive ? { boxShadow: `0 18px 46px ${category.color}22` } : undefined}
                  >
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="flex items-center justify-between gap-3 font-black text-ink">
                        {category.title}
                        <ArrowRight
                          className={cn(
                            "transition duration-300 group-hover:translate-x-1",
                            isActive ? "text-aqua opacity-100" : "text-graphite opacity-0"
                          )}
                          size={16}
                        />
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-graphite">
                        {category.summary}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div
              key={activeCategory.title}
              className="premium-surface overflow-hidden rounded-lg p-5 sm:p-7"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col gap-6 border-b border-ink/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-aqua">
                    Interactive capability map
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-ink">
                    {activeCategory.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-graphite">
                    {activeCategory.summary}
                  </p>
                </div>
                <div className="grid min-w-[180px] gap-3 rounded-lg border border-ink/10 bg-white/76 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-white"
                      style={{ backgroundColor: activeCategory.color }}
                    >
                      <ActiveIcon size={22} />
                    </span>
                    <div className="text-right">
                      <p className="text-3xl font-black text-ink">{averageScore}%</p>
                      <p className="text-xs font-bold uppercase text-graphite">Avg depth</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-7 xl:grid-cols-[0.58fr_0.42fr]">
                <div className="grid gap-5">
                  {activeCategory.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p className="font-bold text-ink">{skill.name}</p>
                        <p className="text-sm font-black text-graphite">{skill.level}%</p>
                      </div>
                      <div
                        className="h-3 overflow-hidden rounded-lg bg-ink/10"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                      >
                        <motion.div
                          className="h-full rounded-lg"
                          style={{ backgroundColor: activeCategory.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.75,
                            delay: index * 0.04,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-ink/10 bg-white/78 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
                      <Layers3 size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase text-aqua">System fit</p>
                      <p className="font-black text-ink">Where this shows up</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {topSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="rounded-lg border border-ink/10 bg-mist px-4 py-3"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                      >
                        <p className="text-sm font-black text-ink">{skill.name}</p>
                        <p className="mt-1 text-xs leading-5 text-graphite">
                          Applied in dashboards, APIs, monitoring workflows, and
                          connected product decisions.
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-lg bg-aqua/10 px-4 py-3 text-sm font-bold leading-6 text-[#008F86]">
                    Click another category to inspect the engineering layer behind
                    the portfolio.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
