import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="process" className="section-band section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A practical engineering workflow for complex, connected products."
            description="I start with system boundaries and data flow, then build the product in layers so each decision supports reliability, usability, and future extension."
            align="center"
            className="text-center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="interactive-surface group relative h-full overflow-hidden rounded-lg bg-mist p-6 hover:bg-white">
                  <div className="absolute right-4 top-4 text-6xl font-black text-ink/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-aqua shadow-sm transition duration-300 group-hover:bg-aqua group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-ink">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-graphite">
                    {step.description}
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
