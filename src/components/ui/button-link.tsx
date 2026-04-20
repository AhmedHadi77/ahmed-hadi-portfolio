import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

const variantClasses = {
  primary:
    "bg-aqua text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#008F86] hover:shadow-premium",
  secondary:
    "border border-ink/10 bg-white/80 text-ink shadow-soft backdrop-blur hover:-translate-y-0.5 hover:border-aqua/40 hover:text-[#008F86]",
  ghost:
    "text-graphite hover:-translate-y-0.5 hover:bg-white/70 hover:text-ink"
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base"
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("https://wa.me");

  if (isExternal || props.download) {
    const shouldOpenNewTab = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        target={shouldOpenNewTab ? props.target ?? "_blank" : props.target}
        rel={shouldOpenNewTab ? props.rel ?? "noreferrer" : props.rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
