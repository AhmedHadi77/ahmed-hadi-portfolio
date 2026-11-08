import { techMarquee } from "@/lib/site-data";

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <section aria-label="Technologies I work with" className="border-b border-ink/8 bg-white py-6">
      <div className="group relative overflow-hidden mask-fade-x">
        <ul className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= techMarquee.length}
              className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-semibold text-ink/35 transition-colors hover:text-ink sm:text-2xl"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-aqua/50" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
