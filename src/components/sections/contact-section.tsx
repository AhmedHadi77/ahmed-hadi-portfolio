"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Magnetic } from "@/components/animations/magnetic";
import { SplitText } from "@/components/animations/split-text";
import { contactMethods, siteConfig } from "@/lib/site-data";

const fieldClass =
  "peer h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 pt-4 text-base text-white outline-none transition placeholder:text-transparent focus:border-signal/60 focus:bg-white/[0.07]";
const labelClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200 peer-focus:top-3.5 peer-focus:text-xs peer-focus:text-signal peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-xs";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const project = String(formData.get("project") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`
    );

    setStatus("Your email app is opening with the message ready to send.");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-navy-800 text-white">
      <div className="absolute inset-0 engineered-grid-dark mask-fade-b" />
      <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-aqua/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2.5 text-sm font-semibold text-signal">
            <span className="h-px w-8 bg-signal" />
            Contact
          </p>
          <h2 className="text-balance text-[2.4rem] font-bold leading-[1.02] sm:text-6xl">
            <SplitText text="Let's build something that works in the real world." />
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
            IoT platforms, realtime dashboards, backend systems, mobile apps, or an
            engineering role where connected systems matter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-14 items-center rounded-full bg-white px-6 font-display text-lg font-semibold text-ink transition-colors hover:bg-signal"
              >
                {siteConfig.email}
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-signal hover:text-signal"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "ok" : "copy"}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {copied ? <Check size={20} /> : <Copy size={19} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <AnimatePresence>
              {copied ? (
                <motion.span
                  role="status"
                  className="text-sm text-signal"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Email copied
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {contactMethods
              .filter((method) => method.label !== "Email")
              .map((method) => {
                const Icon = method.icon;
                const isExternal = method.href.startsWith("http");
                return (
                  <li key={method.label}>
                    <a
                      href={method.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-signal transition-transform duration-300 group-hover:scale-110">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/50">{method.label}</span>
                        <span className="block truncate text-sm font-medium text-white/90">{method.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <motion.form
          className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-display text-2xl font-semibold">Send a message</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="relative">
              <input id="name" name="name" placeholder="Name" required className={fieldClass} />
              <label htmlFor="name" className={labelClass}>Name</label>
            </div>
            <div className="relative">
              <input id="email" type="email" name="email" placeholder="Email" required className={fieldClass} />
              <label htmlFor="email" className={labelClass}>Email</label>
            </div>
          </div>

          <label className="mt-4 block">
            <span className="sr-only">Project type</span>
            <select
              name="project"
              defaultValue="IoT platform"
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition focus:border-signal/60 [&>option]:text-ink"
            >
              <option>IoT platform</option>
              <option>Realtime dashboard</option>
              <option>Mobile app</option>
              <option>Full stack web app</option>
              <option>Digital twin solution</option>
              <option>API/backend system</option>
              <option>Job opportunity</option>
            </select>
          </label>

          <div className="relative mt-4">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="peer min-h-[160px] w-full resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 pb-3 pt-7 text-base leading-7 text-white outline-none transition placeholder:text-transparent focus:border-signal/60 focus:bg-white/[0.07]"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-4 text-white/50 transition-all duration-200 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-signal peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Tell me about the system, product or role
            </label>
          </div>

          <button
            className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-aqua px-7 text-base font-semibold text-white transition-all hover:bg-[#008F86] hover:shadow-glow active:scale-[0.98] sm:w-auto"
            type="submit"
          >
            Send message
            <Send size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
          </button>

          <AnimatePresence>
            {status ? (
              <motion.p
                role="status"
                className="mt-4 rounded-2xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-signal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
