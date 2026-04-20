import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="section-band section-padding bg-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What I build"
            title="The systems I build are designed for monitoring, automation, and operational clarity."
            description="From device data to cloud services to user-facing dashboards, I focus on platforms that solve real workflow problems."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <div className="interactive-surface group relative h-full overflow-hidden rounded-lg p-6">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua via-leaf to-coral opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-aqua/10 text-aqua">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-ink">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-graphite">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
