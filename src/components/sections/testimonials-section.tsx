"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/lib/site-data";

export function PrinciplesSection() {
  return (
    <section className="section-padding relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How I work"
          title="Three principles behind everything I ship."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {principles.map((item, index) => (
            <motion.figure
              key={item.name}
              className="relative border-t border-ink/10 pt-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="absolute -top-px left-0 h-0.5 w-full origin-left bg-gradient-to-r from-aqua to-amber"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              <figcaption>
                <p className="font-display text-2xl font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-graphite">{item.role}</p>
              </figcaption>
              <blockquote className="mt-5 text-[17px] leading-8 text-graphite">{item.quote}</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
