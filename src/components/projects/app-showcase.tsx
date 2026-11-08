"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Download, Mail, QrCode, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Magnetic } from "@/components/animations/magnetic";
import { Chip } from "@/components/ui/chip";
import { appDownloadPath, hasDownload, siteConfig, type MobileApp } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./phone-frame";

type AppShowcaseProps = {
  app: MobileApp;
  qrSvg: string | null;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function AppShowcase({ app, qrSvg, index }: AppShowcaseProps) {
  const ref = useRef<HTMLElement>(null);
  const [showSteps, setShowSteps] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const available = hasDownload(app);
  const reversed = index % 2 === 1;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const frontY = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  const meta = [
    app.download.version ? { label: "Version", value: app.download.version } : null,
    app.download.sizeMb ? { label: "Size", value: `${app.download.sizeMb} MB` } : null,
    { label: "Requires", value: app.download.minAndroid },
    app.download.updated ? { label: "Updated", value: app.download.updated } : null
  ].filter(Boolean) as { label: string; value: string }[];

  function handleDownload() {
    const onAndroid = /android/i.test(navigator.userAgent);
    setToast(
      onAndroid
        ? `Downloading ${app.name}. When it finishes, open the file to install.`
        : `Downloading ${app.name}.apk to this computer. To install on your phone, scan the QR code instead.`
    );
    window.setTimeout(() => setToast(null), 6000);
  }

  const [front, back] = app.screens;

  return (
    <motion.article
      ref={ref}
      id={`app-${app.slug}`}
      className="relative scroll-mt-28 overflow-hidden rounded-[32px] bg-navy-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease }}
    >
      {/* Ambient light in the app's own colour */}
      <div
        className="pointer-events-none absolute -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-[110px]"
        style={{ background: app.accent, [reversed ? "right" : "left"]: "-120px" }}
      />
      <div className="pointer-events-none absolute inset-0 engineered-grid-dark opacity-60" />

      <div
        className={cn(
          "relative grid gap-10 p-5 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-14",
          reversed && "lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        {/* Phones */}
        <div
          className={cn(
            "relative flex min-h-[380px] items-center justify-center sm:min-h-[520px]",
            reversed && "lg:order-2"
          )}
        >
          <div
            className="absolute aspect-square w-[78%] max-w-[440px] rounded-full border border-white/10"
            style={{ boxShadow: `0 0 120px 10px ${app.accent}33 inset` }}
          />
          <motion.div
            className="absolute aspect-square w-[96%] max-w-[540px] rounded-full border border-dashed border-white/[0.07]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          {front ? (
            <>
              {back ? (
                <motion.div className="absolute w-[40%] max-w-[220px]" style={{ y: backY }}>
                  <div className="-translate-x-[58%] -rotate-[8deg] opacity-85">
                    <PhoneFrame src={back.src} alt={back.alt} />
                  </div>
                </motion.div>
              ) : null}
              <motion.div className="relative w-[46%] max-w-[250px]" style={{ y: frontY }}>
                <div className={cn(back && "translate-x-[30%] rotate-[4deg]")}>
                  <PhoneFrame src={front.src} alt={front.alt} />
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              className="relative w-[52%] max-w-[260px]"
              style={{ y: frontY }}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame>
                <div
                  className="flex h-full flex-col items-center justify-center gap-4"
                  style={{
                    background: `radial-gradient(circle at 50% 35%, ${app.accent}55, transparent 60%), #0A1520`
                  }}
                >
                  <span
                    className="grid h-20 w-20 place-items-center rounded-[22px] font-display text-4xl font-bold text-white shadow-glow"
                    style={{ background: app.accent }}
                  >
                    {app.monogram}
                  </span>
                  <span className="font-display text-2xl font-semibold">{app.name}</span>
                  <span className="h-1 w-16 overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-full w-1/2 rounded-full"
                      style={{ background: app.accent }}
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </span>
                </div>
              </PhoneFrame>
            </motion.div>
          )}
        </div>

        {/* Details */}
        <div className={cn("flex flex-col justify-center", reversed && "lg:order-1")}>
          <div className="flex items-center gap-4">
            {app.icon ? (
              <Image src={app.icon} alt={`${app.name} icon`} width={64} height={64} className="rounded-2xl shadow-glow" />
            ) : (
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl font-display text-2xl font-bold"
                style={{ background: app.accent }}
              >
                {app.monogram}
              </span>
            )}
            <div>
              <h3 className="font-display text-3xl font-bold sm:text-4xl">{app.name}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
                <Smartphone size={14} />
                Android app{app.download.version ? `, version ${app.download.version}` : ""}
              </p>
            </div>
          </div>

          <p className="mt-6 font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
            {app.tagline}
          </p>
          <p className="mt-4 max-w-xl leading-7 text-white/65">{app.description}</p>

          {app.features.length ? (
            <ul className="mt-6 grid gap-2.5">
              {app.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex gap-3 text-[15px] text-white/80"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease }}
                >
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{ background: `${app.accent}33`, color: app.accent }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <Chip key={tag} tone="dark">
                {tag}
              </Chip>
            ))}
          </div>

          {/* Download panel */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                {available ? (
                  <Magnetic className="w-full sm:w-auto">
                    <a
                      href={appDownloadPath(app)}
                      onClick={handleDownload}
                      className="group/dl relative inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full px-7 text-base font-semibold text-white transition-transform active:scale-[0.98] sm:w-auto"
                      style={{ background: app.accent, boxShadow: `0 16px 40px -14px ${app.accent}` }}
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/dl:translate-x-full" />
                      <Download size={20} className="relative transition-transform group-hover/dl:translate-y-0.5" />
                      <span className="relative">
                        Download APK
                        {app.download.sizeMb ? (
                          <span className="ml-2 font-normal text-white/75">{app.download.sizeMb} MB</span>
                        ) : null}
                      </span>
                    </a>
                  </Magnetic>
                ) : (
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`${app.name} APK`)}`}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white transition-colors hover:border-white/40 sm:w-auto"
                  >
                    <Mail size={19} />
                    Request the APK
                  </a>
                )}
                <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {meta.map((item) => (
                    <div key={item.label} className="flex gap-1.5">
                      <dt className="text-white/45">{item.label}</dt>
                      <dd className="font-medium text-white/85">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                {app.webUrl ? (
                  <a
                    href={app.webUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                  >
                    Website and iPhone version
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
                {!available ? (
                  <p className="mt-3 text-sm text-white/50">
                    A public download link is coming soon.
                  </p>
                ) : null}
              </div>

              {qrSvg ? (
                <div className="hidden shrink-0 items-center gap-4 border-white/10 sm:flex sm:border-l sm:pl-5">
                  <div
                    className="h-[104px] w-[104px] shrink-0 rounded-xl bg-white p-2"
                    aria-label={`QR code to download ${app.name}`}
                    role="img"
                    dangerouslySetInnerHTML={{ __html: qrSvg }}
                  />
                  <p className="w-[96px] text-sm leading-5 text-white/60">
                    <QrCode size={16} className="mb-1.5 text-white/80" />
                    Scan with your Android phone to install
                  </p>
                </div>
              ) : null}
            </div>

            {available ? (
              <div className="mt-4 border-t border-white/10 pt-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-1 text-left text-sm font-medium text-white/75 hover:text-white"
                  aria-expanded={showSteps}
                  onClick={() => setShowSteps((value) => !value)}
                >
                  How to install
                  <motion.span animate={{ rotate: showSteps ? 180 : 0 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {showSteps ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <ol className="mt-3 grid gap-2.5 text-sm leading-6 text-white/70">
                        {[
                          "Tap Download APK on your Android phone, or scan the QR code from a computer.",
                          "When the download finishes, open the file from your notifications or the Downloads folder.",
                          "If Android asks, allow your browser to install unknown apps, then tap Install."
                        ].map((step, i) => (
                          <li key={step} className="flex gap-3">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      <p className="mt-3 flex gap-2 text-xs leading-5 text-white/45">
                        <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                        Google Play Protect may show a notice because the app is installed
                        outside the Play Store. The APK is signed and built by me.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {mounted
        ? createPortal(
      <AnimatePresence>
        {toast ? (
          <motion.div
            role="status"
            className="fixed bottom-6 left-1/2 z-[70] w-[min(92vw,440px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-900/95 px-5 py-4 text-sm text-white shadow-premium backdrop-blur"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            <span className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: app.accent }}>
                <Download size={13} />
              </span>
              {toast}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>,
            document.body
          )
        : null}
    </motion.article>
  );
}
