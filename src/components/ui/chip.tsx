import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function Chip({ children, className, tone = "light" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[13px] font-medium",
        tone === "dark"
          ? "border border-white/12 bg-white/5 text-white/80"
          : "border border-ink/10 bg-white text-graphite",
        className
      )}
    >
      {children}
    </span>
  );
}
