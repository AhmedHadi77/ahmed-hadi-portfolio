import Link from "next/link";
import { contactMethods, mobileApps, navItems, siteConfig } from "@/lib/site-data";

const socialLabels = new Set(["LinkedIn", "GitHub", "Facebook", "WhatsApp"]);

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = contactMethods.filter((method) => socialLabels.has(method.label));

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-aqua font-display text-sm font-bold">
              {siteConfig.initials}
            </span>
            <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            {siteConfig.title} in {siteConfig.location}. Device monitoring, realtime
            dashboards, APIs, digital twins and Android apps.
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={method.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:text-signal"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-white/90">Pages</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/55">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-signal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Android apps</h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-white/55">
            {mobileApps.map((app) => (
              <li key={app.slug}>
                <Link href={`#app-${app.slug}`} className="transition-colors hover:text-signal">
                  {app.name}
                  {app.download.version ? ` ${app.download.version}` : ""}
                </Link>
              </li>
            ))}
            <li>
              <a href={siteConfig.cvPath} download className="transition-colors hover:text-signal">
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript and Framer Motion.</p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap px-4 pb-2 text-center font-display text-[17vw] font-bold leading-none text-white/[0.04] lg:text-[11rem]"
      >
        {siteConfig.name}
      </p>
    </footer>
  );
}
