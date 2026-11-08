"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Download, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Magnetic } from "@/components/animations/magnetic";
import { SignalNetwork } from "@/components/animations/signal-network";
import { SignalTrace } from "@/components/animations/signal-trace";
import { SplitText } from "@/components/animations/split-text";
import { ButtonLink } from "@/components/ui/button-link";
import { heroFacts, mobileApps, siteConfig } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Pointer-following glow
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(46, 230, 201, 0.10), transparent 70%)`;

  const latestApp = mobileApps[0];

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate overflow-hidden bg-navy-800 pb-16 pt-28 text-white sm:pb-20 sm:pt-36"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(event.clientX - rect.left);
        my.set(event.clientY - rect.top);
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 engineered-grid-dark mask-fade-b" />
      <SignalNetwork className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      <div className="absolute -left-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-aqua/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-amber/10 blur-[120px]" />
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: glow }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:min-h-[78svh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div style={{ y: contentY, opacity: fade }}>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 py-1.5 pl-2 pr-4 text-sm text-white/80 backdrop-blur"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-signal/15 text-signal">
              <MapPin size={13} />
            </span>
            {siteConfig.location}
          </motion.p>

          <h1 className="mt-6 text-balance text-[2.6rem] font-bold leading-[1.02] min-[400px]:text-5xl sm:text-6xl lg:text-[4.4rem]">
            <SplitText
              immediate
              delay={0.3}
              stagger={0.06}
              text="I build connected systems, from device telemetry to apps people install."
            />
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.05 }}
          >
            IoT Engineer and Full Stack Developer. I design monitoring platforms,
            digital twins, realtime dashboards and Android apps, and take them all
            the way to production.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.2 }}
          >
            <Magnetic>
              <ButtonLink href="#projects" size="lg" className="w-full sm:w-auto">
                See my work
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="#apps" variant="outline-light" size="lg" className="w-full sm:w-auto">
                <Smartphone size={18} />
                Get the Android apps
              </ButtonLink>
            </Magnetic>
            <ButtonLink
              href={siteConfig.cvPath}
              download
              variant="ghost"
              size="lg"
              className="text-white/70 hover:bg-white/5 hover:text-white"
            >
              <Download size={18} />
              Download CV
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Portrait + live widgets */}
        <motion.div
          className="relative mx-auto w-full max-w-[400px] lg:max-w-none"
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease, delay: 0.45 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-navy-700 shadow-premium">
            <Image
              src={siteConfig.profileImage}
              alt={`${siteConfig.name}, ${siteConfig.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent" />
            {/* Viewfinder corners */}
            {["left-4 top-4 border-l-2 border-t-2", "right-4 top-4 border-r-2 border-t-2", "bottom-4 left-4 border-b-2 border-l-2", "bottom-4 right-4 border-b-2 border-r-2"].map(
              (pos, i) => (
                <motion.span
                  key={pos}
                  className={`absolute h-6 w-6 rounded-[3px] border-signal/80 ${pos}`}
                  initial={{ opacity: 0, scale: 1.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.08, ease }}
                />
              )
            )}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl font-semibold">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-white/70">{siteConfig.title}</p>
            </div>
          </div>

          <motion.div
            className="glass-dark absolute -left-4 top-10 w-[230px] rounded-2xl p-4 shadow-premium sm:-left-14"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
          >
            <SignalTrace label="Demo sensor feed" unit="°C" base={36} />
          </motion.div>

          <motion.a
            href={`#app-${latestApp.slug}`}
            className="glass-dark absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl py-3 pl-3 pr-4 shadow-premium transition-colors hover:border-signal/50 sm:-right-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.5 },
              x: { duration: 0.8, delay: 1.5, ease },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.4 }
            }}
          >
            {latestApp.icon ? (
              <Image src={latestApp.icon} alt="" width={40} height={40} className="rounded-xl" />
            ) : null}
            <span>
              <span className="block text-xs text-white/60">New on Android</span>
              <span className="block text-sm font-semibold">
                {latestApp.name} {latestApp.download.version}
              </span>
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Facts strip */}
      <motion.dl
        className="relative mt-16 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 mx-4 sm:mx-6 sm:grid-cols-3 lg:mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease }}
      >
        {heroFacts.map((fact) => (
          <div key={fact.label} className="bg-navy-800/90 px-5 py-4 backdrop-blur">
            <dt className="text-xs text-white/50">{fact.label}</dt>
            <dd className="mt-1 text-sm font-medium text-white/90">{fact.value}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/40 transition-colors hover:text-white lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
