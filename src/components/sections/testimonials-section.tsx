import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="section-band section-padding bg-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Trust"
            title="Recruiter-ready signals: system depth, product maturity, and clean execution."
            description="The portfolio is built to show more than visual polish. It communicates how I think about architecture, realtime data, operational interfaces, and delivery quality."
            align="center"
            className="text-center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Technical range", "IoT, realtime, APIs, frontend, databases"],
            ["Delivery signal", "Clean code, build checks, reusable components"],
            ["Product maturity", "Dashboards, monitoring, automation, UX polish"]
          ].map(([label, value]) => (
            <Reveal key={label}>
              <div className="interactive-surface rounded-lg px-5 py-4">
                <p className="text-sm font-black uppercase text-aqua">{label}</p>
                <p className="mt-2 font-bold leading-6 text-ink">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <figure className="interactive-surface h-full rounded-lg p-6">
                <Quote className="text-coral" size={30} />
                <blockquote className="mt-5 text-base leading-8 text-graphite">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-black text-ink">{testimonial.name}</p>
                  <p className="mt-1 text-sm font-semibold text-graphite">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
