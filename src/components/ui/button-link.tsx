import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "outline-light";
  size?: "sm" | "md" | "lg";
};

const variantClasses = {
  primary:
    "bg-aqua text-white shadow-[0_10px_30px_-10px_rgba(0,169,154,0.7)] hover:bg-[#008F86] hover:shadow-glow",
  secondary:
    "border border-ink/12 bg-white text-ink hover:border-aqua/50 hover:text-[#00796E]",
  ghost: "text-graphite hover:bg-ink/5 hover:text-ink",
  dark: "bg-ink text-white hover:bg-navy-700",
  "outline-light":
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-signal/60 hover:bg-white/10"
};

const sizeClasses = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm sm:text-base",
  lg: "min-h-14 px-6 py-3.5 text-base"
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-center font-semibold transition-all duration-300 active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal || props.download !== undefined) {
    const opensNewTab = href.startsWith("http") && props.download === undefined;

    return (
      <a
        href={href}
        className={classes}
        target={target ?? (opensNewTab ? "_blank" : undefined)}
        rel={rel ?? (opensNewTab ? "noreferrer" : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} target={target} rel={rel} {...props}>
      {children}
    </Link>
  );
}
