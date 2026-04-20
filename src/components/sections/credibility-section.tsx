import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { credibilitySignals } from "@/lib/site-data";

export function CredibilitySection() {
  return (
    <section className="section-band bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="premium-surface grid gap-4 rounded-lg p-4 sm:grid-cols-2 lg:grid-cols-4">
            {credibilitySignals.map((signal) => (
              <div
                key={signal.label}
                className="group flex min-h-[132px] flex-col justify-between rounded-lg border border-ink/10 bg-white/78 p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/35 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm font-black uppercase text-aqua">
                  <CheckCircle2 size={17} />
                  {signal.label}
                </div>
                <div>
                  <p className="mt-4 text-xl font-black text-ink">{signal.value}</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{signal.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
