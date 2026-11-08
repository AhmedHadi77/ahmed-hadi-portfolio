"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-navy-800 text-white">
      <div className="absolute inset-0 engineered-grid-dark mask-fade-b" />
      <div className="absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-aqua/15 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="What I build"
          title="Systems for monitoring, automation and everyday use."
          description="From device data to cloud services to the screen in someone's hand, I build platforms that solve real workflow problems."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const wide = index === 0;
            return (
              <motion.div
                key={service.title}
                className={cn(wide && "sm:col-span-2 lg:row-span-1")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard tilt={0} className="group h-full rounded-3xl">
                  <div
                    className={cn(
                      "relative z-[2] flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 group-hover:border-signal/30 sm:p-7",
                      wide && "bg-gradient-to-br from-aqua/20 to-transparent"
                    )}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-signal transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <h3 className={cn("mt-6 font-display font-semibold", wide ? "text-2xl" : "text-xl")}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/60">{service.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
