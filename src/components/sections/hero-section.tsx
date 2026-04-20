"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { heroBadges, heroSignals, siteConfig } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[86svh] overflow-hidden bg-section-mesh pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 engineered-grid opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,255,254,0.98)_0%,rgba(251,255,254,0.92)_48%,rgba(251,255,254,0.72)_100%)]" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-aqua/35 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-aqua/20 bg-white/78 px-4 py-2 text-sm font-bold text-[#008F86] shadow-sm backdrop-blur">
            <Sparkles size={16} />
            IoT platforms. Realtime dashboards. Full stack delivery.
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.04] text-ink sm:text-5xl lg:text-7xl">
            Building connected systems from{" "}
            <span className="gradient-text">device telemetry to production web platforms</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
            I design IoT monitoring platforms, digital twins, realtime dashboards,
            API layers, and scalable web applications that turn live system data
            into clear operational decisions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href={siteConfig.cvPath} variant="secondary" download>
              Download CV
              <Download size={18} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact Me
              <MessageCircle size={18} />
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <Chip key={badge}>{badge}</Chip>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 w-full max-w-[480px] lg:mt-0"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="absolute -left-5 top-12 hidden h-28 w-28 rounded-lg bg-leaf/25 blur-2xl sm:block" />
          <div className="absolute -right-5 bottom-16 hidden h-32 w-32 rounded-lg bg-coral/20 blur-2xl sm:block" />
          <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white shadow-premium">
            <Image
              src={siteConfig.profileImage}
              alt={`${siteConfig.name} professional portrait`}
              width={1200}
              height={900}
              priority
              className="h-[420px] w-full object-cover object-[center_34%] sm:h-[540px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-ink/10 bg-white/84 p-3 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase text-aqua">Profile</p>
                  <p className="mt-1 text-sm font-black text-ink">Ahmed Hadi</p>
                </div>
                <div className="rounded-lg border border-ink/10 bg-white/84 p-3 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase text-coral">Focus</p>
                  <p className="mt-1 text-sm font-black text-ink">IoT + Full Stack</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="glass-panel absolute -right-2 top-8 rounded-lg p-4 sm:-right-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs font-bold uppercase text-aqua">Current focus</p>
            <p className="mt-1 text-sm font-black text-ink">Digital Twin + Realtime</p>
          </motion.div>

          <motion.div
            className="glass-panel absolute -left-2 bottom-24 rounded-lg p-4 sm:-left-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs font-bold uppercase text-coral">System layer</p>
            <p className="mt-1 text-sm font-black text-ink">Devices to dashboards</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.label}
                className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white/78 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-aqua/35 hover:bg-white hover:shadow-soft"
                whileHover={{ y: -4 }}
              >
                <motion.span
                  className="absolute inset-x-0 top-0 h-1 bg-aqua"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.34 + index * 0.08 }}
                  style={{ transformOrigin: "left" }}
                />
                <Icon className="text-aqua" size={20} />
                <p className="mt-3 text-xs font-bold uppercase text-graphite">
                  {signal.label}
                </p>
                <p className="mt-1 text-base font-black text-ink">{signal.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
