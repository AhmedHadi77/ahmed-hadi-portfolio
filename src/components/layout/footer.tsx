import Link from "next/link";
import { contactMethods, navItems, siteConfig } from "@/lib/site-data";

const socialLabels = new Set(["LinkedIn", "GitHub", "Facebook", "Email"]);

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = contactMethods.filter((method) => socialLabels.has(method.label));

  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <Link href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-sm font-black text-white">
              {siteConfig.initials}
            </span>
            <span>
              <span className="block font-black text-ink">{siteConfig.name}</span>
              <span className="block text-sm font-semibold text-graphite">
                {siteConfig.title}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-graphite">
            Device monitoring, realtime dashboards, API architecture, digital
            twins, and scalable full stack products built with practical
            engineering judgement.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-ink">Quick links</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-graphite transition hover:bg-mist hover:text-aqua"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-ink">Social</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-ink/10 bg-mist text-graphite transition hover:-translate-y-0.5 hover:border-aqua/30 hover:bg-white hover:text-aqua"
                  aria-label={method.label}
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-sm font-semibold text-graphite">
            &copy; {year} {siteConfig.name}. Built for serious connected-system conversations.
          </p>
        </div>
      </div>
    </footer>
  );
}
