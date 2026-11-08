"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { credibilitySignals, stats } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-section-mesh" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="About me"
            title="Hardware-aware thinking, full stack execution."
            description="I build systems that collect device data, move it through reliable APIs, store it cleanly and present it in interfaces people can act on, on the web and on their phones."
          />

          <Reveal delay={0.1} className="space-y-5 text-lg leading-8 text-graphite lg:pt-12">
            <p>
              My work covers the whole connected-product stack: device simulation and
              ESP32 firmware, telemetry flows, backend services, databases, realtime
              dashboards and installable mobile apps.
            </p>
            <p>
              I turn unclear requirements into structured platforms with clean data
              models, clear API boundaries and useful monitoring states, and I care
              about the small details that make software feel finished.
            </p>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group flex flex-col-reverse justify-end bg-white p-6 transition-colors duration-500 hover:bg-navy-800 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <dt className="mt-2 text-sm text-graphite transition-colors duration-500 group-hover:text-white/70">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl font-bold text-ink transition-colors duration-500 group-hover:text-signal sm:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {credibilitySignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <motion.span
                className="block h-0.5 origin-left bg-gradient-to-r from-aqua to-amber"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="mt-5 text-sm text-graphite">{signal.label}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{signal.value}</h3>
              <p className="mt-2 text-sm leading-6 text-graphite">{signal.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
