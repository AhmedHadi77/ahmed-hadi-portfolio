"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMethods, siteConfig } from "@/lib/site-data";

export function ContactSection() {
  const [status, setStatus] = useState("");

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

    setStatus("Opening your email client with the message ready.");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-band relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-section-mesh opacity-80" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Need someone who can connect devices, APIs, dashboards, and product execution?"
            description="Reach out for IoT platforms, realtime dashboards, API/backend systems, digital twin products, full stack applications, or engineering roles where connected systems matter."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith("http");

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="flex min-h-[88px] items-center gap-4 rounded-lg border border-ink/10 bg-white/82 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-aqua/30 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-aqua/10 text-aqua">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase text-graphite">
                      {method.label}
                    </span>
                    <span className="mt-1 block break-words font-black text-ink">
                      {method.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            className="glass-panel rounded-lg p-5 sm:p-7"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ink">
                Name
                <input
                  className="h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-semibold text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Email
                <input
                  className="h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-semibold text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
              Project type
              <select
                className="h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-semibold text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                name="project"
                defaultValue="IoT platform"
              >
                <option>IoT platform</option>
                <option>Realtime dashboard</option>
                <option>Full stack web app</option>
                <option>Digital twin solution</option>
                <option>API/backend system</option>
                <option>Recruiter conversation</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
              Message
              <textarea
                className="min-h-[150px] resize-y rounded-lg border border-ink/10 bg-white px-4 py-3 text-base font-semibold leading-7 text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                name="message"
                placeholder="Tell me about the system, product, role, or collaboration."
                required
              />
            </label>

            <button
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-aqua px-5 py-3 text-base font-black text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#008F86] hover:shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 sm:w-auto"
              type="submit"
            >
              Send Message
              <Send size={18} />
            </button>

            {status ? (
              <p className="mt-4 rounded-lg border border-aqua/20 bg-aqua/10 px-4 py-3 text-sm font-bold text-[#008F86]">
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
