import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="section-band bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
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
              <div className="rounded-lg border border-ink/10 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-black uppercase text-aqua">{label}</p>
                <p className="mt-2 font-bold leading-6 text-ink">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <figure className="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-soft">
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
