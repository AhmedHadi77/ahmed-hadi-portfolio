"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Deterministic waveform so server and client render the same path.
function buildWave(width: number, height: number, seed: number) {
  const points: string[] = [];
  const mid = height / 2;
  for (let x = 0; x <= width; x += 6) {
    const t = x / width;
    const spike = Math.abs(((x + seed) % 120) - 60) < 4 ? -mid * 0.75 : 0;
    const y =
      mid +
      Math.sin(t * Math.PI * 8 + seed) * mid * 0.28 +
      Math.sin(t * Math.PI * 23 + seed * 2) * mid * 0.12 +
      spike;
    points.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

const W = 320;
const H = 64;
const wave = buildWave(W, H, 7);

type SignalTraceProps = {
  className?: string;
  label?: string;
  unit?: string;
  base?: number;
};

// A scrolling oscilloscope trace with a ticking live reading.
export function SignalTrace({ className, label = "Telemetry", unit = "ms", base = 42 }: SignalTraceProps) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let step = 0;
    const id = window.setInterval(() => {
      step += 1;
      setValue(base + Math.round(Math.sin(step * 1.7) * 6 + Math.cos(step * 0.6) * 3));
    }, 1100);
    return () => window.clearInterval(id);
  }, [base]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="flex items-center gap-2 text-xs font-medium text-white/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          {label}
        </span>
        <span className="font-display text-lg font-semibold tabular-nums text-white">
          {value}
          <span className="ml-0.5 text-xs font-medium text-white/50">{unit}</span>
        </span>
      </div>
      <div className="relative mt-2 h-16 mask-fade-x">
        <svg
          className="absolute left-0 top-0 h-16 w-[200%] animate-marquee"
          style={{ animationDuration: "7s" }}
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="trace" x1="0" x2="1">
              <stop offset="0" stopColor="#2EE6C9" />
              <stop offset="1" stopColor="#F2A93B" />
            </linearGradient>
          </defs>
          <path d={wave} fill="none" stroke="url(#trace)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
          <path
            d={wave}
            transform={`translate(${W} 0)`}
            fill="none"
            stroke="url(#trace)"
            strokeWidth="1.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
