import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="section-band bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="I connect hardware-aware thinking with full stack product engineering."
              description="My focus is building systems that collect device data, move it through reliable APIs, store it cleanly, and present it through realtime dashboards people can act on."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-surface rounded-lg p-6 sm:p-8">
              <div className="space-y-6 text-lg leading-9 text-graphite">
                <p>
                  I build across the full connected-product stack: device
                  simulation, telemetry flows, backend services, databases,
                  realtime interfaces, and deployment-ready web applications.
                </p>
                <p>
                  My strength is turning unclear technical requirements into
                  structured platforms with clean data models, clear API boundaries,
                  useful monitoring states, and interfaces that make complex
                  infrastructure easier to understand.
                </p>
                <p>
                  I approach every project with architecture discipline and product
                  awareness, balancing performance, maintainability, user experience,
                  and the practical realities of building systems that need to scale.
                </p>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["System architecture", "Realtime product UX", "API and data flow"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-ink/10 bg-white/80 px-4 py-3 text-sm font-black text-ink"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="group relative overflow-hidden rounded-lg border border-ink/10 bg-mist p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <span className="absolute inset-x-0 top-0 h-1 bg-aqua transition duration-300 group-hover:bg-coral" />
                <p className="text-4xl font-black text-ink">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase text-graphite">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
