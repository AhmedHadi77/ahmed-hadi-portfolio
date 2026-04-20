import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-ink/10 bg-white/75 px-3 py-1.5 text-sm font-semibold text-graphite shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

