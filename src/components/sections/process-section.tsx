"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="process" className="section-padding relative bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Process"
            title="How a project moves from idea to production."
            description="I start with system boundaries and data flow, then build in layers so every decision supports reliability, usability and future change."
          />
        </div>

        <ol ref={listRef} className="relative grid gap-4">
          <span className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/10" aria-hidden />
          <motion.span
            className="absolute bottom-6 left-[27px] top-6 w-px origin-top bg-gradient-to-b from-aqua to-amber"
            style={{ scaleY: progress }}
            aria-hidden
          />
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                className="group relative flex gap-5 rounded-3xl p-2 pr-4 transition-colors duration-300 hover:bg-white sm:gap-6"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative z-10 grid h-10 w-10 shrink-0 translate-x-2 translate-y-2 place-items-center rounded-full border border-ink/10 bg-white text-aqua shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:bg-aqua group-hover:text-white">
                  <Icon size={18} />
                </span>
                <div className="py-3">
                  <p className="text-sm tabular-nums text-graphite">Step {index + 1}</p>
                  <h3 className="mt-0.5 font-display text-2xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-lg leading-7 text-graphite">{step.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
