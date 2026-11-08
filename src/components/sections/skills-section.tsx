"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function DepthGauge({ value, color }: { value: number; color: string }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(15,29,42,0.08)" strokeWidth="8" />
        <motion.circle
          key={color + value}
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - value / 100) }}
          transition={{ duration: 1.1, ease }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-3xl font-bold text-ink">
            <AnimatedCounter key={value} value={value} suffix="%" duration={1} />
          </p>
          <p className="text-xs text-graphite">average depth</p>
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillCategories[activeIndex];
  const ActiveIcon = active.icon;
  const average = useMemo(
    () => Math.round(active.skills.reduce((sum, s) => sum + s.level, 0) / active.skills.length),
    [active]
  );

  return (
    <section id="skills" className="section-padding relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built around telemetry, APIs and products people use."
          description="Each layer serves the same goal: reliable data flow from devices and services into fast, understandable web and mobile apps."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:gap-10">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:gap-1 lg:overflow-visible lg:px-0"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={category.title}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors lg:py-4",
                    isActive ? "text-white" : "text-ink hover:bg-mist"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="skill-active"
                      className="absolute inset-0 rounded-2xl bg-navy-800"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                  <span
                    className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon size={19} />
                  </span>
                  <span className="relative font-display text-[17px] font-semibold">{category.title}</span>
                  <span
                    className={cn(
                      "relative ml-auto hidden text-sm tabular-nums lg:block",
                      isActive ? "text-white/60" : "text-graphite/60"
                    )}
                  >
                    {category.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-ink/8 bg-mist p-6 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl text-white"
                      style={{ backgroundColor: active.color }}
                    >
                      <ActiveIcon size={20} />
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-bold text-ink">{active.title}</h3>
                    <p className="mt-3 leading-7 text-graphite">{active.summary}</p>
                  </div>
                  <DepthGauge value={average} color={active.color} />
                </div>

                <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {active.skills.map((skill, index) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-baseline justify-between gap-4">
                        <span className="font-medium text-ink">{skill.name}</span>
                        <span className="text-sm tabular-nums text-graphite">{skill.level}%</span>
                      </div>
                      <div
                        className="h-1.5 overflow-hidden rounded-full bg-ink/8"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${active.color}, ${active.color}AA)`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.9, delay: 0.1 + index * 0.05, ease }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
